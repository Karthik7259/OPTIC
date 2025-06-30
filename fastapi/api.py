# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware  # Add this import
# from langchain_community.llms import Ollama
# from pydantic import BaseModel
# from typing import List
# import uvicorn

# app = FastAPI()

# # Add CORS middleware
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5177"],  # Allow your frontend to access this API
#     allow_credentials=True,
#     allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
#     allow_headers=["*"],  # Allow all headers
# )


# # Employee data model
# class Employee(BaseModel):
#     name: str
#     skills: List[str]
#     experience: int
#     productivity: float

# # Request model (simplified)
# class TaskRequest(BaseModel):
#     description: str  # Only sending description

# # Initialize LLM
# llm = Ollama(model="llama3")

# # Employee database
# employees = [
#     Employee(name="Alice", skills=["React", "Node.js", "MongoDB"], experience=3, productivity=8.5),
#     Employee(name="Frank", skills=["Go", "Kubernetes", "Docker"], experience=7, productivity=9.7),
#     # ... other employees ...
# ]

# @app.post("/evaluate-task/")
# async def evaluate_task(request: TaskRequest):
#     """Evaluate task description and recommend employees using LLM"""
#     # Prepare employee data for the prompt
#     employee_data = "\n".join(
#         f"{emp.name}: Skills: {', '.join(emp.skills)}, Exp: {emp.experience} yrs, Productivity: {emp.productivity}/10"
#         for emp in employees
#     )
    
#     # Create the prompt
#     prompt = f"""
#     Task Description: {request.description}
    
#     Available Employees:
#     {employee_data}
    
#     Analyze which 3 employees are best suited for this task considering:
#     - Skill match
#     - Experience level
#     - Productivity
    
#     Return your analysis in this format:
#     1. [Employee Name]: [Brief justification]
#     2. [Employee Name]: [Brief justification]
#     3. [Employee Name]: [Brief justification]
#     """
    
#     # Get LLM response
#     response = llm.invoke(prompt)
    
#     return {
#         "task": request.description,
#         "recommendations": response.strip()
#     }

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from langchain_community.llms import Ollama
# from pydantic import BaseModel
# from typing import List

# app = Flask(__name__)

# # Enable CORS for specific origins
# CORS(app, origins=["http://localhost:5177"], supports_credentials=True)

# # Employee data model (simulated as Pydantic models)
# class Employee(BaseModel):
#     name: str
#     skills: List[str]
#     experience: int
#     productivity: float

# # Request model (simplified)
# class TaskRequest(BaseModel):
#     description: str

# # Initialize LLM
# llm = Ollama(model="llama3")

# # Employee database
# employees = [
#     Employee(name="Alice", skills=["React", "Node.js", "MongoDB"], experience=3, productivity=8.5),
#     Employee(name="Frank", skills=["Go", "Kubernetes", "Docker"], experience=7, productivity=9.7),
#     # Add other employees here
# ]

# @app.route("/evaluate-task/", methods=["POST"])
# def evaluate_task():
#     request_data = request.get_json()

#     # Parse the request data
#     task_description = request_data["description"]

#     # Prepare employee data for the prompt
#     employee_data = "\n".join(
#         f"{emp.name}: Skills: {', '.join(emp.skills)}, Exp: {emp.experience} yrs, Productivity: {emp.productivity}/10"
#         for emp in employees
#     )

#     # Create the prompt for the LLM
#     prompt = f"""
#     Task Description: {task_description}

#     Available Employees:
#     {employee_data}

#     Analyze which 3 employees are best suited for this task considering:
#     - Skill match
#     - Experience level
#     - Productivity

#     Return your analysis in this format:
#     1. [Employee Name]: [Brief justification]
#     2. [Employee Name]: [Brief justification]
#     3. [Employee Name]: [Brief justification]
#     """

#     # Get LLM response
#     response = llm.invoke(prompt)

#     return jsonify({
#         "task": task_description,
#         "recommendations": response.strip()
#     })

# if __name__ == "__main__":
#     app.run(debug=True, host="0.0.0.0", port=8000)




from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_community.llms import Ollama
from pydantic import BaseModel
from typing import List

app = Flask(__name__)

# Enable CORS for specific origins
CORS(app, origins=["http://localhost:5177"], supports_credentials=True)

# Employee data model (simulated as Pydantic models)
class Employee(BaseModel):
    name: str
    skills: List[str]
    experience: int
    productivity: float

# Request model (simplified)
class TaskRequest(BaseModel):
    description: str

# Initialize LLM
llm = Ollama(model="llama3")

# Employee database
employees = [
    Employee(name="Alice", skills=["React", "Node.js", "MongoDB"], experience=3, productivity=8.5),
    Employee(name="Frank", skills=["Go", "Kubernetes", "Docker"], experience=7, productivity=9.7),
    # Add other employees here
]

@app.route("/evaluate-task/", methods=["POST"])
def evaluate_task():
    try:
        # Get the request data
        request_data = request.get_json()

        # Check if 'description' is present in the request data
        if "description" not in request_data:
            return jsonify({"error": "'description' field is required"}), 400

        # Parse the request data
        task_description = request_data["description"]

        # Prepare employee data for the prompt
        employee_data = "\n".join(
            f"{emp.name}: Skills: {', '.join(emp.skills)}, Exp: {emp.experience} yrs, Productivity: {emp.productivity}/10"
            for emp in employees
        )

        # Create the prompt for the LLM
        prompt = f"""
        Task Description: {task_description}

        Available Employees:
        {employee_data}

        Analyze which 3 employees are best suited for this task considering:
        - Skill match
        - Experience level
        - Productivity

        Return your analysis in this format:
        1. [Employee Name]: [Brief justification]
        2. [Employee Name]: [Brief justification]
        3. [Employee Name]: [Brief justification]
        """

        # Get LLM response
        response = llm.invoke(prompt)

        return jsonify({
            "task": task_description,
            "recommendations": response.strip()
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
