<div align="center">

# 👥 OPTIC - User Interface
### Authentication & User Portal

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue.svg)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.3-red.svg)](https://reactrouter.com/)

*Modern authentication interface with secure user login and admin access*

</div>

---

## 📖 Table of Contents

- [🚀 Overview](#-overview)
- [🔗 Platform Navigation](#-platform-navigation)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [🔐 Authentication Pages](#-authentication-pages)
- [🎨 Components](#-components)
- [🔧 Configuration](#-configuration)
- [🧪 Development](#-development)
- [📦 Building & Deployment](#-building--deployment)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

---

## 🚀 Overview

The AURA AI User Interface serves as the primary authentication gateway and user portal for the AURA AI platform. Built with React 19 and Vite, it provides secure login functionality for both regular users and administrators, featuring modern design, responsive layouts, and seamless integration with the backend API.

### 🎯 Purpose

- 🔐 **Secure Authentication** - JWT-based login system for users and admins
- 👥 **User Portal** - Dashboard and profile management for registered users
- 🛡️ **Admin Access** - Separate admin authentication and routing
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- 🔄 **Seamless Integration** - Direct connection to backend API and admin dashboard

---

## 🔗 Platform Navigation

<div align="center">

### 🌐 AURA AI Authentication Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    🌐 LANDING PAGE                         │
│                    Port: 3000                              │
├─────────────────────────────────────────────────────────────┤
│                       ↓                                     │
│                👥 USER INTERFACE                           │
│               (Authentication Portal)                      │
│                    Port: 5174                              │
├─────────────────────────────────────────────────────────────┤
│         👤 User Login    │    🛡️ Admin Login                │
│              ↓           │         ↓                       │
│       📊 User Dashboard  │  🛡️ Admin Dashboard             │
│                          │    Port: 5173                   │
├─────────────────────────────────────────────────────────────┤
│                       ↓                                     │
│              🔧 BACKEND API SERVER                          │
│                    Port: 4000                              │
└─────────────────────────────────────────────────────────────┘
```

</div>

### 📚 **Related Documentation**

| Component | Documentation | Purpose | Port |
|-----------|---------------|---------|------|
| 🌐 **Landing Page** | [Landing README](../../landingpage/README.md) | Marketing & Onboarding | 3000 |
| 👥 **User Interface** | [This README](README.md) | Authentication Portal | 5174 |
| 🛡️ **Admin Dashboard** | [Admin README](../../Admin/README.md) | Business Management | 5173 |
| 🔧 **Backend API** | [Backend README](../Backend/README.md) | REST API Server | 4000 |
| 🤖 **AI Services** | [FastAPI README](../../fastapi/README.md) | AI Processing | 8000 |
| 📋 **Main Project** | [Root README](../../README.md) | Complete Overview | - |

---

## ✨ Features

### 🔐 **Authentication System**
- **Dual Login Interface**: Separate authentication for users and administrators
- **JWT Integration**: Secure token-based authentication with backend API
- **Session Management**: Persistent login sessions with automatic token refresh
- **Secure Routing**: Protected routes based on authentication status
- **Password Security**: Encrypted password handling and validation

### 👥 **User Experience**
- **Modern UI/UX**: Clean, intuitive interface design
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Smooth loading indicators and feedback
- **Error Handling**: User-friendly error messages and validation
- **Accessibility**: WCAG compliant design standards

### 🔄 **Navigation & Routing**
- **React Router Integration**: Seamless page navigation
- **Role-based Redirection**: Automatic routing based on user role
- **Protected Routes**: Secure access to authenticated areas
- **Deep Linking**: Direct access to specific application sections
- **Browser History**: Full browser navigation support

---

## 🏗️ Architecture

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERFACE ARCHITECTURE             │
├─────────────────────────────────────────────────────────────┤
│  🎨 Presentation Layer                                     │
│  ├── 📱 Authentication Pages                               │
│  ├── 🎬 Interactive Components                             │
│  └── 🎯 User Interface Elements                            │
├─────────────────────────────────────────────────────────────┤
│  🧩 Component Layer                                        │
│  ├── 👤 UserLogin Component                                │
│  ├── 🛡️ AdminLogin Component                               │
│  └── 🔗 AuthContainer Component                            │
├─────────────────────────────────────────────────────────────┤
│  🔧 State Management                                        │
│  ├── 👥 UserContext                                        │
│  ├── 🛡️ AdminContext                                       │
│  └── 🔐 Authentication State                               │
├─────────────────────────────────────────────────────────────┤
│  🌐 API Layer                                               │
│  ├── 📡 Axios HTTP Client                                  │
│  ├── 🔗 Backend Integration                                │
│  └── 🔑 Token Management                                   │
├─────────────────────────────────────────────────────────────┤
│  ⚙️ Build Layer                                             │
│  ├── ⚛️ Vite Build System                                  │
│  ├── 📦 Module Bundling                                    │
│  └── 🔧 Development Tools                                  │
└─────────────────────────────────────────────────────────────┘
```

</div>

---

## 📁 Project Structure

```
📦 Login/ (User Interface)
├── 📄 package.json              # Dependencies & scripts
├── 📄 README.md                 # This documentation
├── 📄 vite.config.js            # Vite configuration
├── 📄 eslint.config.js          # ESLint configuration
├── 📄 index.html                # HTML template
├── 📄 .env                      # Environment variables
├── 📄 .gitignore               # Git ignore rules
├── 📁 public/                   # Static assets
│   └── 🖼️ vite.svg              # Vite logo
├── 📁 src/                      # Source code
│   ├── 📄 App.jsx               # Main application component
│   ├── 📄 main.jsx              # Application entry point
│   ├── 🎨 index.css             # Global styles
│   ├── 📁 assets/               # Static assets
│   │   └── 🖼️ react.svg         # React logo
│   ├── 📁 components/           # Reusable components
│   ├── 📁 context/              # React context providers
│   │   ├── 👥 UserContext.jsx   # User state management
│   │   └── 🛡️ AdminContext.jsx  # Admin state management
│   └── 📁 pages/                # Page components
│       ├── 👤 UserLogin.jsx     # User authentication page
│       ├── 🛡️ AdminLogin.jsx    # Admin authentication page
│       ├── 🔗 AuthContainer.jsx # Authentication wrapper
│       └── 🎨 Login.css         # Authentication styles
└── 📁 node_modules/             # Dependencies (auto-generated)
```

---

## 🛠️ Technology Stack

### ⚛️ **Core React Ecosystem**
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0.0 | UI library for building user interfaces |
| **React DOM** | 19.0.0 | DOM-specific methods for React |
| **React Router DOM** | 7.3.0 | Client-side routing and navigation |

### ⚡ **Build Tools & Development**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Vite** | 6.2.0 | Fast build tool and development server |
| **ESLint** | 9.21.0 | Code linting and style enforcement |

### 🎨 **Styling & UI**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.0.14 | Utility-first CSS framework |
| **Spline React** | 4.0.0 | 3D graphics and animations |

### 🌐 **HTTP & API Integration**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Axios** | 1.8.3 | HTTP client for API requests |

---

## 🚀 Quick Start

### 📋 Prerequisites
- 📦 Node.js (v18 or higher)
- 📦 npm or yarn package manager
- 🔧 Backend API running on port 4000
- 🌐 Modern web browser

### ⚡ Installation

1. **📥 Navigate to User Interface Directory**
   ```bash
   cd path/to/optic/backend/Login
   ```

2. **📦 Install Dependencies**
   ```bash
   npm install
   ```

3. **🔧 Environment Setup**
   ```bash
   # Create or update .env file
   echo "VITE_API_URL=http://localhost:4000" > .env
   ```

4. **🚀 Start Development Server**
   ```bash
   npm run dev
   ```

5. **🌐 Access Application**
   ```
   Open browser and go to: http://localhost:5174
   ```

6. **✅ Verify Installation**
   - Authentication pages should load properly
   - Login forms should be functional
   - Routing should work between user and admin login

### 🏗️ Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build optimized production bundle
npm run build

# Lint code for style issues
npm run lint

# Preview production build
npm run preview
```

---

## 🔐 Authentication Pages

### 👤 **User Login** (`src/pages/UserLogin.jsx`)

**Features:**
- 📧 **Email/Password Authentication**: Standard user login form
- 🔒 **Secure Validation**: Client-side and server-side validation
- 💾 **Remember Me**: Persistent login sessions
- 🔗 **Registration Link**: Easy access to user registration
- 📱 **Responsive Design**: Mobile-optimized layout

**Usage:**
```javascript
// User login workflow
const userLogin = async (credentials) => {
  try {
    const response = await axios.post('/user/login', credentials);
    // Store JWT token
    localStorage.setItem('userToken', response.data.token);
    // Redirect to user dashboard
    navigate('/user/dashboard');
  } catch (error) {
    // Handle authentication errors
  }
};
```

### 🛡️ **Admin Login** (`src/pages/AdminLogin.jsx`)

**Features:**
- 🛡️ **Admin Authentication**: Separate admin login interface
- 🔐 **Enhanced Security**: Additional security measures for admin access
- 👑 **Role Verification**: Server-side admin role validation
- 🚀 **Quick Access**: Streamlined admin authentication flow
- 📊 **Direct Dashboard Link**: Immediate access to admin dashboard

**Usage:**
```javascript
// Admin login workflow
const adminLogin = async (credentials) => {
  try {
    const response = await axios.post('/admin/login', credentials);
    // Store admin JWT token
    localStorage.setItem('adminToken', response.data.token);
    // Redirect to admin dashboard
    window.location.href = 'http://localhost:5173';
  } catch (error) {
    // Handle admin authentication errors
  }
};
```

### 🔗 **Auth Container** (`src/pages/AuthContainer.jsx`)

**Features:**
- 🔄 **Route Management**: Handles authentication routing
- 🎨 **Unified Layout**: Consistent design across auth pages
- 🔐 **Protected Routes**: Ensures proper authentication flow
- 📱 **Responsive Container**: Adapts to different screen sizes

---

## 🎨 Components

### 🔧 **Context Providers**

#### 👥 **UserContext** (`src/context/UserContext.jsx`)
```javascript
// User state management
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
```

#### 🛡️ **AdminContext** (`src/context/AdminContext.jsx`)
```javascript
// Admin state management
const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  
  return (
    <AdminContext.Provider value={{ admin, setAdmin, isAdminAuthenticated }}>
      {children}
    </AdminContext.Provider>
  );
};
```

---

## 🔧 Configuration

### ⚡ **Vite Configuration** (`vite.config.js`)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

### 🌍 **Environment Variables** (`.env`)

```env
# API Configuration
VITE_API_URL=http://localhost:4000
VITE_API_TIMEOUT=10000

# Admin Dashboard URL
VITE_ADMIN_DASHBOARD_URL=http://localhost:5173

# Development Configuration
VITE_NODE_ENV=development
```

### 🎨 **Tailwind CSS Integration**

```javascript
// tailwind.config.js (if present)
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#64748b',
      }
    },
  },
  plugins: [],
}
```

---

## 🧪 Development

### 🔧 **Development Workflow**

1. **🚀 Start Development Server**
   ```bash
   npm run dev
   ```

2. **🔐 Test Authentication**
   - Test user login functionality
   - Verify admin login process
   - Check token storage and retrieval
   - Test routing and redirects

3. **🌐 API Integration Testing**
   ```bash
   # Test backend connection
   curl http://localhost:4000/user/login
   
   # Test admin endpoints
   curl http://localhost:4000/admin/login
   ```

### 📝 **Coding Standards**

**Component Structure:**
```javascript
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Authentication logic
  };

  return (
    <div className="auth-container">
      {/* Component JSX */}
    </div>
  );
};

export default LoginComponent;
```

**API Integration:**
```javascript
// API service configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

---

## 📦 Building & Deployment

### 🏗️ **Production Build**

```bash
# Create optimized production build
npm run build

# The dist folder contains:
# - Minified JavaScript bundles
# - Optimized CSS files
# - Static assets
```

### 🚀 **Deployment Options**

**Static Hosting:**
```bash
# Netlify deployment
npm run build
# Upload dist/ folder to Netlify

# Vercel deployment
npm install -g vercel
vercel --prod

# Traditional web servers
# Upload dist/ contents to web server
```

**Environment Configuration:**
```bash
# Production environment variables
VITE_API_URL=https://api.auraai.com
VITE_ADMIN_DASHBOARD_URL=https://admin.auraai.com
VITE_NODE_ENV=production
```

---

## 🤝 Contributing

### 📝 **Contribution Guidelines**

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/auth-enhancement
   ```
3. **💾 Make your changes**
   - Follow React best practices
   - Maintain authentication security
   - Test login functionality
   - Update documentation
4. **🧪 Test thoroughly**
   ```bash
   npm run lint
   npm run build
   ```
5. **📤 Submit a pull request**

### 🔐 **Security Considerations**

- **Token Security**: Proper JWT token handling and storage
- **Input Validation**: Sanitize all user inputs
- **HTTPS Only**: Ensure secure connections in production
- **Error Handling**: Don't expose sensitive information in errors

---

## 📞 Support

### 🆘 **Getting Help**

- 📧 **Email**: auth-support@auraai.com
- 🐛 **Issues**: [Report authentication issues](../../issues)
- 📚 **Documentation**: Check React Router and authentication docs
- 💬 **Community**: Join our frontend developer community

### 🔧 **Common Issues**

<details>
<summary>🔐 Authentication Failures</summary>

```bash
# Check backend API connection
curl http://localhost:4000/health

# Verify environment variables
echo $VITE_API_URL

# Check browser network tab for API calls
# Verify JWT token format and expiration
```
</details>

<details>
<summary>🌐 CORS Issues</summary>

```bash
# Ensure backend CORS is configured for:
# http://localhost:5174 (development)
# Your production domain (production)

# Check browser console for CORS errors
```
</details>

<details>
<summary>🔄 Routing Problems</summary>

```bash
# Verify React Router configuration
# Check protected route implementations
# Test navigation between pages
```
</details>

---

<div align="center">

# 👥 User Interface

**Authentication Gateway to AURA AI Platform**

*Built with React 19, Vite, and modern authentication patterns*

---

### 🔐 Secure, Fast, User-Friendly

[![Auth Status](https://img.shields.io/badge/Auth-Secure-green)](http://localhost:5174)
[![React](https://img.shields.io/badge/React-19.0-blue)](../../)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple)](../../)

---

### 🔗 **Access the Complete Platform**

| 👥 [User Interface](README.md) | 🛡️ [Admin Dashboard](../../Admin/README.md) | 🌐 [Landing Page](../../landingpage/README.md) |
|:---:|:---:|:---:|
| Authentication Portal | Business Management | Marketing & Onboarding |

| 🔧 [Backend API](../Backend/README.md) | 🤖 [AI Services](../../fastapi/README.md) | 📋 [Main Project](../../README.md) |
|:---:|:---:|:---:|
| REST API Server | AI Processing | Complete Overview |

</div>
