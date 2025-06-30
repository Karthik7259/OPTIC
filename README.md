<div align="center">

# 🚀 OPTIC Platform
### Comprehensive Employee Analytics & Management System

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688.svg)](https://fastapi.tiangolo.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue.svg)](https://mysql.com/)
[![Python](https://img.shields.io/badge/Python-3.9+-yellow.svg)](https://python.org/)

*Advanced AI-powered platform for employee management, analytics, and organizational insights*

</div>

---

## 📖 Table of Contents

- [🚀 Overview](#-overview)
- [🏗️ Architecture](#️-architecture)
- [📁 Platform Components](#-platform-components)
- [✨ Core Features](#-core-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [📋 Prerequisites](#-prerequisites)
- [🔧 Installation](#-installation)
- [🚦 Development Workflow](#-development-workflow)
- [📦 Deployment](#-deployment)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

---

## 🚀 Overview

AURA AI is a comprehensive enterprise platform that combines advanced analytics, AI-powered insights, and modern web technologies to provide organizations with powerful tools for employee management, performance tracking, and strategic decision-making.

### 🎯 Key Objectives

- 📊 **Advanced Analytics** - Real-time employee performance and organizational metrics
- 🤖 **AI-Powered Insights** - Machine learning-driven recommendations and predictions
- 👥 **User Management** - Comprehensive employee profiles and role-based access
- 🔐 **Secure Authentication** - JWT-based security with admin and user portals
- 📱 **Modern Interface** - Responsive, intuitive dashboards and user experiences

---

## 🏗️ Architecture

The AURA AI platform follows a modern microservices architecture with clear separation of concerns:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Landing Page  │    │ User Interface  │    │ Admin Dashboard │
│    (React)      │    │    (React)      │    │    (React)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │  Backend API    │
                    │   (Node.js)     │
                    └─────────────────┘
                                 │
                    ┌─────────────────┐    ┌─────────────────┐
                    │   MONGO DB      │    │   AI Services   │
                    │   (Database)    │    │   (FastAPI)     │
                    └─────────────────┘    └─────────────────┘
```

---

## 📁 Platform Components

| Component | Technology | Purpose | Documentation |
|-----------|------------|---------|---------------|
| **Landing Page** | React + Tailwind CSS | Public-facing website and platform introduction | [📖 View Docs](./landingpage/README.md) |
| **User Interface** | React + Vite | User authentication and portal | [📖 View Docs](./backend/Login/README.md) |
| **Admin Dashboard** | React + Vite | Administrative interface and analytics | [📖 View Docs](./admin/README.md) |
| **Backend API** | Node.js + Express | RESTful API and business logic | [📖 View Docs](./backend/Backend/README.md) |
| **AI Services** | FastAPI + Python | Machine learning and AI analytics | [📖 View Docs](./fastapi/README.md) |

---

## ✨ Core Features

### 📊 Analytics & Reporting
- Real-time employee performance metrics
- Advanced data visualization and dashboards
- Custom report generation
- Trend analysis and forecasting

### 🤖 AI-Powered Insights
- Predictive analytics for employee performance
- Automated risk assessment
- Intelligent recommendations
- Natural language processing for insights

### 👥 User Management
- Comprehensive employee profiles
- Role-based access control
- Skill tracking and development
- Team collaboration tools

### 🔐 Security & Authentication
- JWT-based authentication system
- Secure admin and user portals
- Data encryption and protection
- Audit logs and compliance

### 📱 Modern Interface
- Responsive design for all devices
- Intuitive user experience
- Real-time updates and notifications
- Customizable dashboards

---

## 🛠️ Technology Stack

### Frontend Technologies
- **React 19** - Modern UI framework with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Chart.js** - Data visualization library

### Backend Technologies
- **Node.js 18+** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MySQL 8.0** - Relational database management
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing and security

### AI & Analytics
- **Python 3.9+** - Core AI development language
- **FastAPI** - Modern Python web framework
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computing
- **Scikit-learn** - Machine learning library

---

## 🚀 Quick Start

### 📋 Prerequisites

Before running the AURA AI platform, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.9 or higher) - [Download](https://python.org/)
- **MySQL** (v8.0 or higher) - [Download](https://mysql.com/)
- **Git** - [Download](https://git-scm.com/)

### 🔧 Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd optic
   ```

2. **Set Up Database**
   ```bash
   # Create MySQL database
   mysql -u root -p
   CREATE DATABASE aura_ai;
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend/Backend
   npm install
   ```

4. **Install AI Services Dependencies**
   ```bash
   cd ../../fastapi
   pip install -r requirements.txt
   ```

5. **Install Frontend Dependencies**
   ```bash
   # Admin Dashboard
   cd ../admin
   npm install
   
   # User Interface
   cd ../backend/Login
   npm install
   
   # Landing Page
   cd ../../landingpage
   npm install
   ```

6. **Configure Environment Variables**
   
   Create `.env` files in each component with the following variables:
   
   **Backend** (`backend/Backend/.env`):
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=your_password
   DB_NAME=aura_ai
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
   
   **AI Services** (`fastapi/.env`):
   ```env
   DATABASE_URL=mysql://user:password@localhost/aura_ai
   API_KEY=your_api_key
   ```

---

## 🚦 Development Workflow

### Starting All Services

1. **Start Backend API**
   ```bash
   cd backend/Backend
   npm run dev
   ```

2. **Start AI Services**
   ```bash
   cd fastapi
   python -m uvicorn api:app --reload
   ```

3. **Start Frontend Applications**
   ```bash
   # Admin Dashboard (Terminal 1)
   cd admin
   npm run dev
   
   # User Interface (Terminal 2)
   cd backend/Login
   npm run dev
   
   # Landing Page (Terminal 3)
   cd landingpage
   npm start
   ```

### 🌐 Access Points

- **Landing Page**: http://localhost:3000
- **User Interface**: http://localhost:5173
- **Admin Dashboard**: http://localhost:5174
- **Backend API**: http://localhost:5000
- **AI Services**: http://localhost:8000

---

## 📦 Deployment

### Production Build

1. **Build Frontend Applications**
   ```bash
   # Admin Dashboard
   cd admin && npm run build
   
   # User Interface
   cd ../backend/Login && npm run build
   
   # Landing Page
   cd ../../landingpage && npm run build
   ```

2. **Deploy Backend Services**
   ```bash
   # Backend API
   cd backend/Backend && npm start
   
   # AI Services
   cd ../../fastapi && python -m uvicorn api:app --host 0.0.0.0 --port 8000
   ```

### 🚀 Deployment Platforms

- **Frontend**: Vercel, Netlify, AWS S3 + CloudFront
- **Backend**: AWS EC2, Digital Ocean, Heroku
- **Database**: AWS RDS, Digital Ocean Managed Databases
- **AI Services**: AWS Lambda, Google Cloud Run, Azure Functions

---

## 📚 Documentation

### Component Documentation

- [🏠 Landing Page Documentation](./landingpage/README.md)
- [👥 User Interface Documentation](./backend/Login/README.md)
- [📊 Admin Dashboard Documentation](./admin/README.md)
- [🔌 Backend API Documentation](./backend/Backend/README.md)
- [🤖 AI Services Documentation](./fastapi/README.md)

### API Documentation

- **Backend API**: `http://localhost:5000/api/docs` (when running)
- **AI Services**: `http://localhost:8000/docs` (FastAPI auto-generated docs)

---

## 🤝 Contributing

We welcome contributions to the AURA AI platform! Please follow these guidelines:

### 📋 Development Guidelines

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Your Changes**
4. **Test Your Changes**
5. **Submit a Pull Request**

### 📝 Code Standards

- Follow ESLint configuration for JavaScript/React
- Use PEP 8 for Python code
- Write clear commit messages
- Include tests for new features
- Update documentation as needed

### 🧪 Testing

```bash
# Frontend Tests
npm test

# Backend Tests
npm run test

# Python Tests
pytest
```

---

## 📞 Support

### 🐛 Bug Reports

If you encounter any issues, please:

1. Check existing [Issues](../../issues)
2. Create a new issue with detailed information
3. Include steps to reproduce
4. Provide system information

### 💬 Community

- **Documentation**: Component-specific README files
- **Issues**: GitHub Issues for bug reports and feature requests
- **Discussions**: GitHub Discussions for questions and ideas

### 📧 Contact

For enterprise support and custom implementations, please contact our development team.

---

<div align="center">

**Built with ❤️ by the OPTIC Team**

*Empowering organizations through intelligent analytics and modern technology*

</div>
