from flask import Flask, request, jsonify
from flask_cors import CORS
from phi.assistant import Assistant
from phi.llm.groq import Groq
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Ensure the GROQ_API_KEY is loaded
groq_api_key = os.getenv("GROQ_API_KEY")
if not groq_api_key:
    raise ValueError("GROQ_API_KEY not found in environment variables. Make sure it's set in your .env file.")

# Instantiate Assistant
assistant = Assistant(
    llm=Groq(model="llama3-8b-8192", api_key=groq_api_key),
    description="""You are an HR agent. Your job is to help assign tasks to employees based on:
    - Who is currently free.
    - If all are busy, assign to the one with fewer tasks completed.
    - If multiple people are free, pick the one with fewer tasks completed.
    Present your response professionally, clearly stating the reason for the assignment, dont mention for what job.
    The employees currently we have are provided below in csv format:
    name of employee,occupied,current task,tasks completed
    Alice,Yes,Build Authentication Module,12
    Bob,No,API Backend for Task Management,20
    Charlie,Yes,Dashboard UI for Analytics,8
    David,Yes,Cloud Deployment Automation,30
    Eve,Yes,Microservices Integration,17
    Frank,No,DevOps CI/CD Pipeline,40
    Grace,Yes,iOS UI Revamp,10
    Heidi,Yes,Database Optimization,14
    Ivy,Yes,Frontend Revamp,14
    Jack,Yes,Performance Tuning,14
    Karen,No,Security Enhancements,14
    """
)

app = Flask(__name__)

CORS(app, origins=["http://localhost:5177"], supports_credentials=True)

@app.route('/assign-task', methods=['POST'])
def assign_task():
    data = request.get_json()
    if not data or 'query' not in data:
        return jsonify({"error": "Query is missing in the request"}), 400
    
    query = data['query']
    print(f"Received query: {query}")  # Debugging print
    
    try:
        # Run the assistant with the query and consume the generator
        response = list(assistant.run(query))
        print(f"Assistant response: {response}")  # Debugging print
        
        # Combine the response tokens into a single string
        combined_response = ''.join(response)
        print(f"Combined response: {combined_response}")  # Debugging print
        
        if combined_response.strip():
            return jsonify({"response": combined_response})  # Return the combined response
        else:
            return jsonify({"error": "Empty response from assistant"}), 500
    except Exception as e:
        print(f"Error occurred: {str(e)}")  # Debugging print
        return jsonify({"error": f"An error occurred during processing: {str(e)}"}), 500

@app.route('/')
def home():
    return "HR Task Assignment API is working!"

if __name__ == '__main__':
    app.run(debug=True)