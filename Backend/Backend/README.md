<div align="center">

# 🔧 OPTIC - Backend API
### RESTful API Server with Authentication & Admin Management

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.12-green.svg)](https://mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-9.0-orange.svg)](https://jwt.io/)
[![ES6](https://img.shields.io/badge/ES6-Modules-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

*Secure, scalable Node.js backend with JWT authentication and role-based access control*

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
- [🔐 Authentication](#-authentication)
- [📊 Database Models](#-database-models)
- [🔧 Configuration](#-configuration)
- [🧪 Development](#-development)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

---

## 🚀 Overview

The AURA AI Backend API is a robust Node.js server built with Express.js that provides secure authentication, user management, and admin operations. It features JWT-based authentication, MongoDB integration, and a clean MVC architecture with role-based access control.

### 🎯 Key Capabilities

- 🔐 **Secure Authentication** - JWT token-based authentication with refresh tokens
- 👥 **User Management** - Complete user registration, login, and profile management
- 🛡️ **Admin Operations** - Administrative controls and management features
- 📊 **Database Integration** - MongoDB with Mongoose ODM
- 🔒 **Security Features** - Password hashing, token blacklisting, CORS protection
- ⚡ **High Performance** - Optimized Express.js server with middleware

---

## ✨ Features

### 🔐 **Authentication & Security**
- **JWT Authentication**: Secure token-based authentication system
- **Password Hashing**: bcrypt encryption for user passwords
- **Token Blacklisting**: Secure logout with token invalidation
- **CORS Protection**: Cross-origin resource sharing configuration
- **Input Validation**: Express-validator for request validation
- **Cookie Management**: Secure cookie handling

### 👥 **User Management**
- **User Registration**: Secure user account creation
- **User Login/Logout**: Authentication with session management
- **Profile Management**: User profile updates and data management
- **Password Security**: Encrypted password storage and validation

### 🛡️ **Admin Features**
- **Admin Authentication**: Separate admin authentication system
- **User Administration**: Admin controls for user management
- **System Management**: Administrative system operations
- **Role-based Access**: Different permission levels

### 🗄️ **Database Operations**
- **MongoDB Integration**: NoSQL database with Mongoose ODM
- **Data Modeling**: Structured schemas for users and admins
- **Connection Management**: Robust database connection handling
- **Error Handling**: Comprehensive error management

---

## 🏗️ Architecture

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                    EXPRESS.JS APPLICATION                  │
├─────────────────────────────────────────────────────────────┤
│  🌐 Routes Layer                                           │
│  ├── 👥 User Routes (/user)                               │
│  └── 🛡️ Admin Routes (/admin)                             │
├─────────────────────────────────────────────────────────────┤
│  🔧 Middleware Layer                                       │
│  ├── 🔐 Authentication Middleware                         │
│  ├── 🍪 Cookie Parser                                     │
│  ├── 🌐 CORS Middleware                                   │
│  └── 📝 JSON/URL Encoded Parser                           │
├─────────────────────────────────────────────────────────────┤
│  🎮 Controller Layer                                       │
│  ├── 👥 User Controller                                   │
│  └── 🛡️ Admin Controller                                  │
├─────────────────────────────────────────────────────────────┤
│  🏗️ Service Layer                                          │
│  ├── 👥 User Service                                      │
│  └── 🛡️ Admin Service                                     │
├─────────────────────────────────────────────────────────────┤
│  📊 Data Layer                                             │
│  ├── 👤 User Model                                        │
│  ├── 🛡️ Admin Model                                       │
│  └── 🔒 BlacklistToken Model                              │
├─────────────────────────────────────────────────────────────┤
│  🗄️ Database Layer                                         │
│  └── 🍃 MongoDB with Mongoose ODM                         │
└─────────────────────────────────────────────────────────────┘
```

</div>

---

## 📁 Project Structure

```
📦 Backend/
├── 📄 package.json              # Dependencies & scripts
├── 📄 Server.js                 # HTTP server entry point
├── 📄 App.js                    # Express application setup
├── 📄 .env                      # Environment variables
├── 📄 README.md                 # This documentation
├── 📁 db/                       # Database configuration
│   └── 📄 db.js                 # MongoDB connection setup
├── 📁 routes/                   # API route definitions
│   ├── 📄 user.routes.js        # User endpoints
│   └── 📄 admin.routes.js       # Admin endpoints
├── 📁 controller/               # Request handlers
│   ├── 📄 user.controller.js    # User business logic
│   └── 📄 admin.controller.js   # Admin business logic
├── 📁 service/                  # Business logic layer
│   ├── 📄 user.service.js       # User services
│   └── 📄 admin.serivce.js      # Admin services
├── 📁 models/                   # Database schemas
│   ├── 📄 user.model.js         # User data model
│   ├── 📄 admin.model.js        # Admin data model
│   └── 📄 BlacklistToken.model.js # Token blacklist model
├── 📁 middleware/               # Custom middleware
│   └── 📄 auth.middleware.js    # Authentication middleware
└── 📁 node_modules/             # Dependencies (auto-generated)
```

---

## 🛠️ Technology Stack

### 🚀 **Core Framework**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | JavaScript runtime environment |
| **Express.js** | 4.21.2 | Web application framework |
| **ES6 Modules** | Latest | Modern JavaScript module system |

### 🗄️ **Database & ODM**
| Technology | Version | Purpose |
|------------|---------|---------|
| **MongoDB** | Latest | NoSQL database |
| **Mongoose** | 8.12.1 | MongoDB object modeling |

### 🔐 **Authentication & Security**
| Technology | Version | Purpose |
|------------|---------|---------|
| **JWT** | 9.0.2 | JSON Web Token authentication |
| **bcrypt** | 5.1.1 | Password hashing |
| **bcryptjs** | 3.0.2 | Alternative bcrypt implementation |

### 🔧 **Middleware & Utilities**
| Technology | Version | Purpose |
|------------|---------|---------|
| **CORS** | 2.8.5 | Cross-origin resource sharing |
| **cookie-parser** | 1.4.7 | Cookie parsing middleware |
| **express-validator** | 7.2.1 | Input validation and sanitization |
| **dotenv** | 16.5.0 | Environment variable management |

---

## 🚀 Quick Start

### 📋 Prerequisites
- 📦 Node.js (v18 or higher)
- 🗄️ MongoDB (local or cloud instance)
- 📦 npm package manager
- 🔧 Git (for version control)

### ⚡ Installation

1. **📥 Navigate to Backend Directory**
   ```bash
   cd path/to/optic/backend/Backend
   ```

2. **📦 Install Dependencies**
   ```bash
   npm install
   ```

3. **🔧 Environment Setup**
   ```bash
   # Create .env file with required variables
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **🗄️ Database Setup**
   ```bash
   # Ensure MongoDB is running
   # Local: mongod
   # Cloud: Ensure connection string is correct
   ```

5. **🚀 Start Development Server**
   ```bash
   npm run dev
   ```

6. **✅ Verify Installation**
   ```bash
   # Test the server
   curl http://localhost:4000
   # Should return: "Hello World"
   ```

### 🏗️ Available Scripts

```bash
# Development server with auto-reload
npm run dev

# Run tests (when implemented)
npm test

# Start production server
npm start
```

---

## 🔧 API Endpoints

### 👥 **User Endpoints** (`/user`)

#### Authentication
```http
POST   /user/register          # User registration
POST   /user/login             # User login
POST   /user/logout            # User logout
GET    /user/profile           # Get user profile
PUT    /user/profile           # Update user profile
```

#### User Management
```http
GET    /user/me                # Get current user data
PUT    /user/me                # Update current user
DELETE /user/me                # Delete user account
GET    /user/dashboard         # User dashboard data
```

### 🛡️ **Admin Endpoints** (`/admin`)

#### Admin Authentication
```http
POST   /admin/register         # Admin registration
POST   /admin/login            # Admin login
POST   /admin/logout           # Admin logout
```

#### Admin Operations
```http
GET    /admin/users            # Get all users
GET    /admin/users/:id        # Get specific user
PUT    /admin/users/:id        # Update user
DELETE /admin/users/:id        # Delete user
GET    /admin/analytics        # System analytics
GET    /admin/dashboard        # Admin dashboard
```

### 🔐 **Authentication Headers**

```http
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

---

## 🔐 Authentication

### 🔑 **JWT Token System**

**Token Structure:**
```javascript
{
  "id": "user_id",
  "email": "user@example.com",
  "role": "user|admin",
  "iat": 1703721600,
  "exp": 1703808000
}
```

**Authentication Flow:**
1. 📝 User registers/logs in with credentials
2. 🔐 Server validates credentials and generates JWT
3. 📤 JWT sent to client (cookie + response)
4. 🔒 Client includes JWT in subsequent requests
5. ✅ Server validates JWT for protected routes

### 🛡️ **Security Features**

**Password Security:**
```javascript
// Password hashing with bcrypt
const hashedPassword = await bcrypt.hash(password, 12);

// Password verification
const isValid = await bcrypt.compare(password, hashedPassword);
```

**Token Blacklisting:**
```javascript
// Blacklist token on logout
const blacklistToken = new BlacklistToken({
  token: jwt_token,
  createdAt: new Date()
});
```

**Middleware Protection:**
```javascript
// Protected route example
app.get('/user/profile', authMiddleware, getUserProfile);
```

---

## 📊 Database Models

### 👤 **User Model** (`user.model.js`)

```javascript
const userSchema = {
  name: String,           // User's full name
  email: String,          // Unique email address
  password: String,       // Hashed password
  phone: String,          // Phone number
  role: String,           // User role (default: 'user')
  isActive: Boolean,      // Account status
  createdAt: Date,        // Registration date
  updatedAt: Date,        // Last update
  lastLogin: Date         // Last login timestamp
}
```

### 🛡️ **Admin Model** (`admin.model.js`)

```javascript
const adminSchema = {
  name: String,           // Admin's full name
  email: String,          // Unique admin email
  password: String,       // Hashed password
  role: String,           // Admin role/permissions
  permissions: [String],  // Specific permissions array
  isActive: Boolean,      // Account status
  createdAt: Date,        // Account creation
  lastLogin: Date         // Last login timestamp
}
```

### 🔒 **BlacklistToken Model** (`BlacklistToken.model.js`)

```javascript
const blacklistTokenSchema = {
  token: String,          // JWT token string
  createdAt: Date,        // Blacklist timestamp
  expiresAt: Date         // Token expiration
}
```

---

## 🔧 Configuration

### 🌍 **Environment Variables** (`.env`)

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database Configuration
DB_CONNECT=mongodb+srv://username:password@cluster.mongodb.net/database

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
JWT_REFRESH_SECRET=your-refresh-token-secret

# Security Configuration
BCRYPT_ROUNDS=12
COOKIE_SECRET=your-cookie-secret

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

### ⚙️ **Application Setup** (`App.js`)

```javascript
// Core Express setup
const app = express();

// Middleware configuration
app.use(express.json());                    // Parse JSON requests
app.use(cors());                           // Enable CORS
app.use(express.urlencoded({extended:true})); // Parse URL-encoded data
app.use(cookieParser());                   // Parse cookies

// Route configuration
app.use('/user', userRoutes);              // User endpoints
app.use('/admin', adminRoutes);            // Admin endpoints
```

### 🗄️ **Database Connection** (`db/db.js`)

```javascript
function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to the database'))
    .catch((error) => console.log('Error connecting:', error));
}
```

---

## 🧪 Development

### 🔧 **Development Workflow**

1. **🚀 Start Development Server**
   ```bash
   npm run dev
   ```

2. **🧪 Test API Endpoints**
   ```bash
   # Test basic endpoint
   curl http://localhost:4000
   
   # Test user registration
   curl -X POST http://localhost:4000/user/register \
     -H "Content-Type: application/json" \
     -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
   
   # Test user login
   curl -X POST http://localhost:4000/user/login \
     -H "Content-Type: application/json" \
     -d '{"email":"john@example.com","password":"password123"}'
   ```

3. **📊 Monitor Database**
   ```bash
   # MongoDB shell
   mongo
   
   # MongoDB Compass (GUI)
   # Connect to your database URL
   ```

### 🔍 **Debugging**

**Server Debugging:**
```javascript
// Add debug logging in controllers
console.log('Request received:', req.body);
console.log('User authenticated:', req.user);
```

**Database Debugging:**
```javascript
// Enable Mongoose debugging
mongoose.set('debug', true);
```

**Error Handling:**
```javascript
// Global error handler
app.use((error, req, res, next) => {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
});
```

### 📝 **Code Standards**

- 📦 **ES6 Modules**: Use import/export syntax
- 🔧 **MVC Pattern**: Separate routes, controllers, and services
- 🔐 **Security First**: Always validate inputs and sanitize data
- 📊 **Error Handling**: Implement comprehensive error handling
- 📝 **Documentation**: Comment complex business logic

### 🧪 **Testing Setup**

```bash
# Install testing dependencies
npm install --save-dev jest supertest

# Create test files
mkdir tests
touch tests/user.test.js tests/admin.test.js
```

**Example Test:**
```javascript
// tests/user.test.js
import request from 'supertest';
import app from '../App.js';

describe('User Authentication', () => {
  test('POST /user/register', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });
});
```

---

## 📦 Deployment

### 🐳 **Docker Deployment**

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S backend -u 1001

USER backend

EXPOSE 4000

CMD ["npm", "start"]
```

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  backend:
    build: .
    ports:
      - "4000:4000"
    environment:
      - NODE_ENV=production
      - DB_CONNECT=${DB_CONNECT}
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - mongodb
  
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

### ☁️ **Cloud Deployment**

**Environment Variables:**
```bash
# Production environment
export NODE_ENV=production
export PORT=4000
export DB_CONNECT=mongodb+srv://prod-user:pass@cluster.mongodb.net/prod-db
export JWT_SECRET=super-secure-production-secret
```

**PM2 Process Management:**
```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start Server.js --name "aura-backend"

# Monitor processes
pm2 monitor

# Auto-restart on changes
pm2 restart aura-backend
```

---

## 🤝 Contributing

### 📝 **Contribution Guidelines**

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/new-endpoint
   ```
3. **💾 Make your changes**
   - Follow MVC architecture patterns
   - Add proper error handling
   - Include input validation
   - Write meaningful commit messages
4. **🧪 Test your changes**
   ```bash
   npm test
   npm run dev # Manual testing
   ```
5. **📤 Submit a pull request**

### 🏗️ **Adding New Features**

**New API Endpoint:**
1. Add route in `routes/user.routes.js` or `routes/admin.routes.js`
2. Create controller function in `controller/`
3. Add business logic in `service/`
4. Update database models if needed
5. Add authentication middleware if required

**New Database Model:**
1. Create model file in `models/`
2. Define Mongoose schema
3. Add validation rules
4. Export model for use in controllers

---

## 📞 Support

### 🆘 **Getting Help**

- 📧 **Email**: backend-support@auraai.com
- 🐛 **Issues**: [Report backend issues](../../issues)
- 📚 **Documentation**: Check API documentation and inline comments
- 💬 **Community**: Join our backend developer community

### 🔧 **Common Issues**

<details>
<summary>🗄️ Database Connection Issues</summary>

```bash
# Check MongoDB connection
mongosh "mongodb+srv://cluster.mongodb.net/test"

# Verify environment variables
echo $DB_CONNECT

# Check firewall/network settings
ping cluster.mongodb.net
```
</details>

<details>
<summary>🔐 JWT Authentication Issues</summary>

```bash
# Verify JWT secret
echo $JWT_SECRET

# Check token format
# Should be: Bearer <token>

# Debug token expiration
# Check exp claim in JWT payload
```
</details>

<details>
<summary>🚪 Port Already in Use</summary>

```bash
# Find process using port 4000
lsof -i :4000

# Kill process
kill -9 <PID>

# Use different port
export PORT=4001
```
</details>

---

<div align="center">

# 🔧 Backend API

**Part of the AURA AI OPTIC Platform**

*Built with Node.js, Express.js, and modern backend technologies*

---

### 🌟 Secure, Scalable, Production-Ready

[![API Status](https://img.shields.io/badge/API-Online-green)](http://localhost:4000)
[![Security](https://img.shields.io/badge/Security-JWT+bcrypt-blue)](../../)
[![Database](https://img.shields.io/badge/Database-MongoDB-green)](../../)

</div>
