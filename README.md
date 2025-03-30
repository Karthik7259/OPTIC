# AURA_AI
Automated User Risk Assesment

## Comprehensive Project Description: AURA - Privacy-first AI-driven Online Proctoring System

### 1. Project Overview
Online examinations currently face significant challenges due to privacy concerns, scalability issues, and high false-positive rates associated with traditional proctoring methods involving continuous audio and video surveillance. AURA addresses these gaps by offering a privacy-first, non-intrusive solution that leverages agent-based behavioral analytics, dynamic risk scoring, and AI-driven anomaly detection to ensure exam integrity seamlessly.

### 2. Gap Analysis
Traditional proctoring approaches rely heavily on constant surveillance via webcam, microphone, and screen recording. These methods often misinterpret normal behaviors such as brief eye movements, ambient noises, or minor distractions as cheating, causing undue stress for students and administrative overhead for institutions. Additionally, such methods suffer from scalability constraints, especially when deployed for large-scale assessments.

### 3. Literature Review
The literature highlights consistent privacy concerns with invasive proctoring technologies. Research indicates students experience heightened anxiety, mistrust towards institutions, and diminished exam performance under surveillance-intensive conditions. Further, literature suggests a strong need for alternative, scalable, and privacy-respecting solutions, emphasizing the potential of AI-driven behavioral analytics and anomaly detection to revolutionize digital assessments.

### 4. Methodology

AURA's implementation involves several key stages:

- **Data Collection & Behavioral Monitoring**: Capturing non-invasive behavioral signals such as keyboard dynamics, mouse interactions, window focus changes, and IP address stability.
- **Agent-based Behavioral Analytics**: Deploying CrewAI and LangChain-based AI agents that continuously analyze behavioral patterns in real-time.
- **Real-time Anomaly Detection**: Using FastAPI and Flask-based Python APIs, behavioral data streams are evaluated instantly to detect anomalies indicative of potential cheating.
- **Dynamic Risk Scoring**: AI algorithms continuously update risk scores, adapting the system’s responses dynamically based on behavioral deviations.
- **Reporting & Feedback**: Comprehensive session summaries, including JSON and PDF reports, enriched by graphical analytics (charts depicting trends and risk breakdowns).

### 5. Results
AURA successfully demonstrates the capability to significantly reduce false positives by accurately distinguishing genuine anomalies from normal test-taking behaviors. Students reported increased comfort and reduced anxiety due to non-invasive monitoring. Educational institutions saw reduced administrative burden and better scalability, resulting in enhanced trust and acceptance of online assessments.

### 6. Technical Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: MERN Stack (MongoDB, Express.js, React, Node.js), Flask, FastAPI
- **AI Integration**: CrewAI, LangChain, Hugging Face
- **Workflow Automation**: n8n
- **Deployment & Infrastructure**: Docker, Kubernetes, AWS, GCP, Azure
- **Security & Authentication**: JWT, OAuth
- **Caching & Performance**: Redis
- **CI/CD & DevOps**: GitHub Actions
- **Reporting**: jsPDF, Chart.js, FPDF, matplotlib

### 7. Use Cases
- University-level online assessments
- Professional certification exams
- Corporate training evaluations
- Remote job assessments
- Competitive entrance exams

### 8. Implementation Steps (Step-by-step)
1. **Requirement Analysis**: Identified key issues with existing proctoring tools.
2. **Design and Architecture**: Defined an agent-based, privacy-first monitoring framework.
3. **Frontend Development**: Built a secure React UI with multilingual support and speech synthesis.
4. **Backend & AI Module Development**: Established MERN-based API services and integrated AI agents (CrewAI).
5. **Integration & Automation**: Connected modules via n8n for seamless workflow automation.
6. **Deployment & Testing**: Containerized and deployed the solution on cloud services, utilizing CI/CD for continuous updates.
7. **Evaluation & Feedback**: Conducted pilot testing, gathering user feedback for continuous improvement.

### 9. Supplementary Materials
- Demonstration and explanatory videos highlighting user interactions, system response to anomalies, and reporting features.
- Graphical analysis of real-time risk trends captured during user sessions.
- Detailed documentation and user manuals to guide system administrators and end-users.

---

# Steps to Implement 



---

## 📌 Implementation & Utilization Guide for AURA_AI

**Repository:**  
```bash
git clone https://github.com/pvjambur/AURA_AI
```

---

## 📁 Project Structure (After Cloning):

```
AURA_AI
├── admin
├── adminbackend
├── Backend
│   ├── auraai
│   └── backend
├── hackthon
└── Manish_exam
```

---

## 🚀 Installation Steps:

1. **Navigate to each folder and subfolder**:
   ```bash
   cd admin
   npm install
   
   cd ../adminbackend
   npm install
   
   cd ../Backend/auraai
   npm install
   
   cd ../backend
   npm install
   
   cd ../../hackthon
   npm install
   
   cd ../Manish_exam
   npm install
   ```

2. **Starting Development Servers**:

- Run `npm run dev` in the following directories:
  ```bash
  admin
  adminbackend
  Backend/auraai
  Backend/backend
  hackthon
  ```

- Run `npm start` specifically in:
  ```bash
  Manish_exam
  ```

---

## 🖥️ Using the Application UI:

- After servers are running, open the frontend UI (`Manish_exam`) in a web browser:
  ```
  http://localhost:3000
  ```

- Use the provided UI for interactive quizzes with multilingual support, speech synthesis, and real-time risk assessments.

---

## 📊 Demo & Supporting Resources:

- **Demo Video**: Provided showcasing AURA's real-time monitoring, dynamic risk scoring, and final reporting capabilities.

[![AURA Demo Video](https://img.youtube.com/vi/TZFipZdc190/0.jpg)](https://youtu.be/TZFipZdc190)


- **Reporting**: Automatic PDF and JSON session reports are generated upon quiz completion, including detailed analytics:
  - Risk scoring trends (Line Chart)
  - Risk breakdown by type (Radar Chart)
  - Overall risk distribution (Pie Chart)

---

## 🔄 Flowchart of AURA Implementation:

```plaintext
User Starts Exam
       │
       ▼
React Frontend (Manish_exam)
│─ Session Initialized
│─ User Behavior Tracking
│─ Real-time Alerts & Warnings
       │
       ▼
Backend (MERN, Flask, FastAPI)
│─ Event Monitoring (Mouse, Keyboard, IP Check)
│─ CrewAI & LangChain (Agent-based Analysis)
│─ Dynamic Risk Scoring
       │
       ▼
n8n Workflow Automation
│─ Automated Actions (Warnings, Lockouts)
│─ Data Processing & Storage (MongoDB, Redis)
       │
       ▼
Session Completion
│─ JSON Session Logs
│─ PDF Report Generation (jsPDF/FPDF)
│─ Risk Analytics (Chart.js, matplotlib)
       │
       ▼
Final Review & Feedback
```

![Screenshot 2025-03-15 152431](https://github.com/user-attachments/assets/fc4681de-5eee-4580-80b7-746a7ddf6b31)


---

## 🛠️ Tech Stack Summary:

- **Frontend:** React.js, Tailwind CSS
- **Backend:** MERN (MongoDB, Express.js, React, Node.js), Flask, FastAPI
- **AI Integration:** CrewAI, LangChain
- **Workflow Automation:** n8n
- **Deployment & Infrastructure:** Docker, Kubernetes, AWS/GCP/Azure
- **Security & Authentication:** JWT, OAuth
- **Reporting & Visualization:** jsPDF, Chart.js, matplotlib
- **Monitoring & Caching:** Redis
- **CI/CD:** GitHub Actions

![image](https://github.com/user-attachments/assets/62214178-f0ca-431f-bf4c-47c0a6914164)


---

## 🎬 Demo Video:
**Watch the detailed project demonstration here:** [AURA Demo Video](https://youtu.be/TZFipZdc190)  
The video highlights key functionalities, including session initialization, real-time anomaly detection, risk scoring, reporting capabilities, and user interactions.

---

## 📊 Flowchart and Visual Descriptions:

### 1\. Tech Flowchart:
- **Description:**  
  Illustrates AURA's complete technical workflow, clearly defining interactions between frontend (React UI), backend (MERN stack, Flask, FastAPI APIs), AI modules (CrewAI, LangChain), workflow automation (n8n), data management (MongoDB, Redis), and deployment environments (Docker, Kubernetes, AWS/Azure/GCP). It visually represents the seamless integration and continuous data flow among these components.
![Screenshot 2025-03-15 152431](https://github.com/user-attachments/assets/fc4681de-5eee-4580-80b7-746a7ddf6b31)
---

### 2\. Initial Prototype:
- **Description:**  
  Showcases the early-stage UI and backend integration of the AURA system. It demonstrates basic user interactions, preliminary anomaly detection, initial risk scoring features, and the initial data logging process. This visual helps in comparing improvements from the prototype phase to the final deployment.

![image](https://github.com/user-attachments/assets/13dbbe44-fa99-4c31-b60f-24cf630a10ad)

---

### 3\. N8N Langraph Workflow:
- **Description:**  
  Provides a detailed visualization of workflow automation designed using n8n and LangChain (Langraph). It clearly displays how real-time user data, anomaly detection events, and dynamic risk scoring triggers are managed, highlighting automated responses (warnings, lockouts), and seamless communication between AI agents and backend services.

![0-4DYT-RlzGMiJSAQo](https://github.com/user-attachments/assets/e08cc832-327e-4d25-958c-c55f3c592f6a)


---

### 4\. Pricing:
- **Description:**  
  Offers a clear breakdown of AURA’s pricing structure, including different service tiers, usage-based costs, scalability options, and added features per tier. This chart helps educational institutions and corporate clients understand cost efficiency and customization options available, facilitating informed decision-making.

![image](https://github.com/user-attachments/assets/58632b2f-519e-4924-bb8f-e405ddfc4145)

![image](https://github.com/user-attachments/assets/86ace3f2-1adb-49f0-9537-57a8b2f02476)



---

### 5\. Example PDF Generated (Version 1):
- **Description:**  
  Demonstrates a comprehensive, auto-generated session report in PDF format upon exam completion. This version includes session duration, answers summary, keyboard and mouse event counts, anomaly detection occurrences, dynamic risk scoring, and insightful graphical analytics (line, pie, radar charts).


![image](https://github.com/user-attachments/assets/f1f6b227-1adc-4b73-80f6-3d8c7e2c32c5)




---

### 6\. Example PDF Generated (Version 2):
- **Description:**  
  Another variant of the automatically generated PDF report, this example emphasizes deeper analytical insights, providing a granular breakdown of detected risks, timestamps of suspicious activities, comparative session analyses, and user behavioral trends across multiple sessions. Ideal for administrative reviews and auditing purposes.

![image](https://github.com/user-attachments/assets/6846d35b-5058-4a7f-a804-3029adc02b87)


---




