<div align="center">

# 🤖 OPTIC - FastAPI Services
### AI-Powered Backend Services & Task Management

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.12-green.svg)](https://fastapi.tiangolo.com/)
[![Flask](https://img.shields.io/badge/Flask-3.1.0-blue.svg)](https://flask.palletsprojects.com/)
[![Python](https://img.shields.io/badge/Python-3.8+-yellow.svg)](https://python.org/)
[![Langchain](https://img.shields.io/badge/Langchain-Community-purple.svg)](https://langchain.com/)
[![Ollama](https://img.shields.io/badge/Ollama-LLM-orange.svg)](https://ollama.ai/)

*AI-driven employee task assignment and HR analytics powered by Large Language Models*

</div>

---

## 📖 Table of Contents

- [🚀 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [🔧 API Endpoints](#-api-endpoints)
- [🤖 AI Models](#-ai-models)
- [🔧 Configuration](#-configuration)
- [📊 Employee Management](#-employee-management)
- [🧪 Development](#-development)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

---

## 🚀 Overview

The AURA AI FastAPI Services provide intelligent task assignment and HR analytics capabilities powered by Large Language Models (LLMs). This service uses both **Ollama** for local LLM inference and **Groq** for cloud-based AI processing to optimize employee task allocation and provide intelligent workforce management.

### 🎯 Key Capabilities

- 🤖 **Intelligent Task Assignment** - AI-powered employee matching based on skills and availability
- 👥 **HR Analytics** - Workforce optimization and performance insights
- 📊 **Real-time Employee Management** - Dynamic task allocation and tracking
- 🔍 **Skill-based Matching** - Advanced algorithms for optimal task-employee pairing
- ⚡ **High Performance** - FastAPI and Flask hybrid architecture for optimal performance

---

## ✨ Features

### 🎯 **AI-Powered Task Assignment**
- **Smart Employee Matching**: Analyzes skills, experience, and productivity
- **Dynamic Load Balancing**: Distributes tasks based on current workload
- **Availability Tracking**: Real-time employee availability management
- **Performance Optimization**: Considers past performance for future assignments

### 📊 **HR Analytics & Insights**
- **Workforce Analytics**: Employee productivity and task completion analysis
- **Skill Gap Analysis**: Identifies training needs and skill development areas
- **Performance Metrics**: Tracks individual and team productivity metrics
- **Resource Optimization**: Optimal resource allocation recommendations

### 🔧 **Intelligent Automation**
- **Automated Task Distribution**: AI-driven task assignment workflows
- **Priority-based Assignment**: Handles urgent tasks with intelligent prioritization
- **Conflict Resolution**: Manages scheduling conflicts and resource constraints
- **Predictive Analytics**: Forecasts project completion and resource needs

---

## 🏗️ Architecture

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                    AI SERVICES LAYER                       │
├─────────────────────────────────────────────────────────────┤
│  🤖 Task Assignment API    │  👥 HR Analytics API           │
│  (Flask + Ollama LLama3)   │  (Flask + Groq LLama3)        │
├─────────────────────────────────────────────────────────────┤
│                    LLM PROCESSING LAYER                    │
│  🧠 Ollama (Local)         │  ☁️ Groq (Cloud)              │
│  - Task Analysis           │  - HR Insights                │
│  - Employee Matching       │  - Performance Analytics      │
├─────────────────────────────────────────────────────────────┤
│                    DATA PROCESSING LAYER                   │
│  📊 Employee Database      │  📈 Analytics Engine          │
│  - Skills & Experience     │  - Performance Metrics        │
│  - Availability Status     │  - Task Completion History    │
└─────────────────────────────────────────────────────────────┘
```

</div>

---

## 📁 Project Structure

```
📦 fastapi/
├── 📄 api.py                    # Main task assignment API
├── 📄 hr.py                     # HR analytics and management API
├── 📄 requirements.txt          # Python dependencies
└── 📄 README.md                 # This documentation

📊 Data Models:
├── 👤 Employee Model
│   ├── name: str
│   ├── skills: List[str]
│   ├── experience: int
│   ├── productivity: float
│   ├── occupied: bool
│   ├── current_task: str
│   └── tasks_completed: int
│
└── 📋 Task Request Model
    └── description: str
```

---

## 🛠️ Technology Stack

### 🐍 **Core Framework**
| Technology | Version | Purpose |
|------------|---------|---------|
| **FastAPI** | 0.115.12 | High-performance async API framework |
| **Flask** | 3.1.0 | Lightweight web framework for specific endpoints |
| **Python** | 3.8+ | Core programming language |
| **Uvicorn** | 0.34.2 | ASGI server for FastAPI |

### 🤖 **AI & Machine Learning**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Langchain Community** | Latest | LLM integration and prompt management |
| **Ollama** | Latest | Local LLM inference (LLama3) |
| **Groq** | 0.23.0 | Cloud-based LLM processing |
| **Phidata** | 2.7.10 | AI assistant framework |

### 🔧 **Utilities & Integration**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Pydantic** | 2.11.3 | Data validation and serialization |
| **CORS** | Latest | Cross-origin resource sharing |
| **python-dotenv** | 1.1.0 | Environment variable management |
| **Rich** | 14.0.0 | Beautiful terminal output |

---

## 🚀 Quick Start

### 📋 Prerequisites
- 🐍 Python 3.8 or higher
- 🦙 Ollama installed locally (for LLama3 model)
- 🔑 Groq API key (for cloud AI services)
- 📦 pip package manager

### ⚡ Installation

1. **📥 Navigate to FastAPI Directory**
   ```bash
   cd path/to/optic/fastapi
   ```

2. **🔧 Create Virtual Environment**
   ```bash
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

3. **📦 Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **🔑 Environment Setup**
   ```bash
   # Create .env file
   echo "GROQ_API_KEY=your_groq_api_key_here" > .env
   ```

5. **🦙 Setup Ollama**
   ```bash
   # Install Ollama (if not already installed)
   # Download from: https://ollama.ai/
   
   # Pull LLama3 model
   ollama pull llama3
   ```

### 🚀 Running the Services

#### 🤖 **Task Assignment API** (Port: 8000)
```bash
python api.py
```

#### 👥 **HR Analytics API** (Port: 5000)
```bash
python hr.py
```

#### ⚡ **Using Uvicorn (Alternative)**
```bash
# For FastAPI applications
uvicorn api:app --host 0.0.0.0 --port 8000 --reload
```

---

## 🔧 API Endpoints

### 🤖 **Task Assignment API** (`api.py`)

#### **POST /evaluate-task/**
Evaluates task description and recommends best employees based on AI analysis.

**Request:**
```json
{
  "description": "Develop a React frontend with authentication and user dashboard"
}
```

**Response:**
```json
{
  "task": "Develop a React frontend with authentication and user dashboard",
  "recommendations": "1. Alice: Expert in React, Node.js, MongoDB with 3 years experience and 8.5/10 productivity\n2. Frank: Strong backend skills with Go, Kubernetes, Docker, 7 years experience and 9.7/10 productivity\n3. [Third recommendation]"
}
```

**Features:**
- 🎯 AI-powered skill matching
- 📊 Experience and productivity analysis
- 🧠 LLama3 model reasoning
- ⚡ Real-time task evaluation

### 👥 **HR Analytics API** (`hr.py`)

#### **POST /assign-task**
Assigns tasks to employees based on availability and workload optimization.

**Employee Database:**
```csv
name,occupied,current_task,tasks_completed
Alice,Yes,Build Authentication Module,12
Bob,No,API Backend for Task Management,20
Charlie,Yes,Dashboard UI for Analytics,8
David,Yes,Cloud Deployment Automation,30
Eve,Yes,Microservices Integration,17
```

**Assignment Logic:**
1. 🟢 **Priority 1**: Assign to free employees
2. 🟡 **Priority 2**: If all busy, assign to employee with fewer completed tasks
3. 🔄 **Load Balancing**: Optimal workload distribution

---

## 🤖 AI Models

### 🦙 **Ollama LLama3** (Local Processing)
- **Usage**: Task evaluation and employee matching
- **Benefits**: 
  - 🔒 Privacy-focused (local processing)
  - ⚡ Low latency for frequent requests
  - 💰 No API costs
- **Model**: `llama3`
- **Requirements**: Local Ollama installation

### ☁️ **Groq LLama3** (Cloud Processing)
- **Usage**: HR analytics and complex reasoning
- **Benefits**:
  - 🚀 High performance cloud processing
  - 📈 Advanced analytical capabilities
  - 🔄 Scalable for heavy workloads
- **Model**: `llama3-8b-8192`
- **Requirements**: Groq API key

---

## 🔧 Configuration

### 🌍 **Environment Variables**

Create a `.env` file in the fastapi directory:

```env
# Groq API Configuration
GROQ_API_KEY=your_groq_api_key_here

# Optional: Custom model configurations
OLLAMA_MODEL=llama3
GROQ_MODEL=llama3-8b-8192

# Optional: Server configurations
API_HOST=0.0.0.0
API_PORT=8000
HR_PORT=5000
```

### ⚙️ **API Configuration**

**CORS Settings:**
```python
# Task Assignment API
CORS(app, origins=["http://localhost:5177"], supports_credentials=True)

# HR Analytics API
CORS(app, origins=["http://localhost:5177"], supports_credentials=True)
```

### 🦙 **Ollama Setup**

1. **Install Ollama**
   ```bash
   # Visit: https://ollama.ai/download
   # Or use package manager
   ```

2. **Pull Required Models**
   ```bash
   ollama pull llama3
   ```

3. **Verify Installation**
   ```bash
   ollama list
   ```

---

## 📊 Employee Management

### 👤 **Employee Data Model**

```python
class Employee(BaseModel):
    name: str                    # Employee name
    skills: List[str]           # Technical skills
    experience: int             # Years of experience
    productivity: float         # Productivity score (0-10)
    occupied: bool              # Current availability status
    current_task: str           # Current assignment
    tasks_completed: int        # Total completed tasks
```

### 📈 **Sample Employee Database**

```python
employees = [
    Employee(
        name="Alice", 
        skills=["React", "Node.js", "MongoDB"], 
        experience=3, 
        productivity=8.5,
        occupied=True,
        current_task="Build Authentication Module",
        tasks_completed=12
    ),
    Employee(
        name="Frank", 
        skills=["Go", "Kubernetes", "Docker"], 
        experience=7, 
        productivity=9.7,
        occupied=False,
        current_task="",
        tasks_completed=20
    )
    # ... more employees
]
```

### 🎯 **Assignment Algorithm**

1. **Skill Matching**: Analyzes required skills vs employee expertise
2. **Experience Weighting**: Considers years of experience for complex tasks
3. **Productivity Scoring**: Factors in historical performance metrics
4. **Availability Check**: Prioritizes available employees
5. **Load Balancing**: Distributes workload evenly across team

---

## 🧪 Development

### 🔧 **Development Workflow**

1. **🚀 Start Development Servers**
   ```bash
   # Terminal 1: Task Assignment API
   python api.py
   
   # Terminal 2: HR Analytics API  
   python hr.py
   ```

2. **🧪 Test API Endpoints**
   ```bash
   # Test task assignment
   curl -X POST http://localhost:8000/evaluate-task/ \
     -H "Content-Type: application/json" \
     -d '{"description": "Build a React dashboard"}'
   
   # Test HR assignment
   curl -X POST http://localhost:5000/assign-task \
     -H "Content-Type: application/json" \
     -d '{"task": "Frontend development"}'
   ```

3. **📊 Monitor Ollama**
   ```bash
   # Check Ollama status
   ollama ps
   
   # View Ollama logs
   ollama logs
   ```

### 🔍 **Debugging**

**Common Issues:**

<details>
<summary>🦙 Ollama Connection Issues</summary>

```bash
# Check if Ollama is running
ollama ps

# Restart Ollama
ollama serve

# Verify model availability
ollama list
```
</details>

<details>
<summary>🔑 Groq API Key Issues</summary>

```bash
# Check environment variables
echo $GROQ_API_KEY

# Verify .env file
cat .env

# Test API key
curl -H "Authorization: Bearer $GROQ_API_KEY" https://api.groq.com/openai/v1/models
```
</details>

<details>
<summary>🌐 CORS Issues</summary>

```python
# Update CORS origins in api.py and hr.py
CORS(app, origins=["http://localhost:3000", "http://localhost:5177"])
```
</details>

### 📝 **Adding New Features**

1. **New AI Models**
   ```python
   # Add new model in api.py
   from langchain_community.llms import AnotherLLM
   
   new_llm = AnotherLLM(model="model-name")
   ```

2. **Custom Employee Attributes**
   ```python
   # Extend Employee model
   class Employee(BaseModel):
       # ... existing fields
       department: str
       manager: str
       availability_hours: List[int]
   ```

3. **Advanced Analytics**
   ```python
   # Add new analytics endpoints in hr.py
   @app.route("/analytics/performance", methods=["GET"])
   def get_performance_analytics():
       # Implementation
   ```

---

## 📦 Deployment

### 🐳 **Docker Deployment**

Create `Dockerfile`:
```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install Ollama
RUN curl -fsSL https://ollama.ai/install.sh | sh

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# Pull Ollama model
RUN ollama pull llama3

EXPOSE 8000 5000

CMD ["python", "api.py"]
```

### ☁️ **Cloud Deployment**

**Environment Setup:**
```bash
# Production environment variables
export GROQ_API_KEY=prod_groq_key
export OLLAMA_HOST=ollama.yourdomain.com
export API_HOST=0.0.0.0
export API_PORT=8000
```

**Process Management:**
```bash
# Using gunicorn for production
pip install gunicorn

# Run API service
gunicorn -w 4 -k uvicorn.workers.UvicornWorker api:app --bind 0.0.0.0:8000

# Run HR service
gunicorn -w 4 hr:app --bind 0.0.0.0:5000
```

---

## 🤝 Contributing

### 📝 **Contribution Guidelines**

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/ai-enhancement
   ```
3. **💾 Make your changes**
   - Follow PEP 8 style guidelines
   - Add proper documentation
   - Include error handling
4. **🧪 Test your changes**
   ```bash
   python -m pytest tests/
   ```
5. **📤 Submit a pull request**

### 🔧 **Development Setup**
```bash
# Clone and setup
git clone <repository-url>
cd fastapi
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### 🧪 **Testing**
```bash
# Install testing dependencies
pip install pytest pytest-asyncio httpx

# Run tests
pytest tests/ -v

# Run with coverage
pytest --cov=. tests/
```

---

## 📞 Support

### 🆘 **Getting Help**

- 📧 **Email**: ai-support@auraai.com
- 🐛 **Issues**: [Report AI service issues](../../issues)
- 📚 **Documentation**: Check API documentation and inline docs
- 💬 **Community**: Join our AI developer community

### 🔧 **Performance Optimization**

- 🦙 **Ollama Optimization**: Use GPU acceleration if available
- ☁️ **Groq Rate Limits**: Implement proper rate limiting
- 📊 **Caching**: Cache frequent AI responses
- ⚡ **Async Processing**: Use async/await for better performance

---

<div align="center">

# 🤖 AI Services

**Part of the AURA AI OPTIC Platform**

*Powered by LLama3, Langchain, and modern AI technologies*

---

### 🌟 Intelligent Task Assignment & HR Analytics

[![API Status](https://img.shields.io/badge/API-Online-green)](http://localhost:8000)
[![AI Models](https://img.shields.io/badge/AI-LLama3-blue)](https://ollama.ai/)
[![Performance](https://img.shields.io/badge/Performance-Optimized-orange)](../../)

</div>
