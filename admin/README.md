<div align="center">

# 🛡️ OPTIC - Admin Dashboard
### Comprehensive Business Management & Analytics Platform

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.5-pink.svg)](https://www.framer.com/motion/)

*Advanced admin dashboard with AI-powered insights and comprehensive management tools*

</div>

---

## 📖 Table of Contents

- [🚀 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [📱 Pages & Components](#-pages--components)
- [🎨 UI Components](#-ui-components)
- [📊 Analytics Features](#-analytics-features)
- [🔧 Configuration](#-configuration)
- [🧪 Development](#-development)
- [📦 Building](#-building)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

---

## 🚀 Overview

The AURA AI Admin Dashboard is a sophisticated React-based web application designed to provide comprehensive business management capabilities. Built with modern technologies like React 19, Vite, and Tailwind CSS, it offers real-time analytics, user management, risk assessment, violation tracking, and much more.

### 🎯 Key Highlights

- 🤖 **AI-Powered Insights** - Advanced analytics with machine learning integration
- 📊 **Real-time Dashboards** - Live data visualization with interactive charts
- 👥 **User Management** - Comprehensive user administration and role management
- ⚠️ **Risk Assessment** - Proactive risk monitoring and alert systems
- 🚨 **Violation Tracking** - Compliance monitoring and incident management
- 📝 **Exam Management** - Assessment creation and tracking system
- 📋 **Task Assignment** - Workflow management and task distribution
- 🗄️ **Database Management** - Data administration and management tools

---

## ✨ Features

### 📊 **Analytics & Reporting**
- Real-time business metrics and KPIs
- Interactive charts using Recharts
- AI-powered insights and recommendations
- Custom report generation with PDF export
- Revenue tracking and performance analysis
- Customer segmentation and user retention analytics

### 👥 **User Management**
- User profile management and administration
- Role-based access control (RBAC)
- User activity monitoring
- Bulk user operations
- Authentication and authorization management

### ⚠️ **Risk Management**
- Real-time risk assessment and monitoring
- Risk level categorization (Low, Medium, High, Critical)
- Automated alert systems
- Risk mitigation tracking
- Compliance monitoring

### 🚨 **Violation Tracking**
- Incident reporting and tracking
- Investigation workflow management
- Violation categorization and severity levels
- Resolution tracking and documentation
- Compliance reporting

### 📝 **Exam & Assessment**
- Exam creation and management
- Question bank administration
- Assessment scheduling and tracking
- Results analysis and reporting
- Performance analytics

### 📋 **Task Management**
- Task assignment and distribution
- Workflow management
- Progress tracking
- Deadline monitoring
- Team collaboration tools

---

## 🏗️ Architecture

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                    ADMIN DASHBOARD                         │
├─────────────────────────────────────────────────────────────┤
│  📊 Analytics     │  👥 Users        │  ⚠️ Risk           │
│  - AI Insights    │  - Management    │  - Assessment      │
│  - Revenue Chart  │  - Profiles      │  - Monitoring      │
│  - Performance    │  - Roles         │  - Alerts          │
├─────────────────────────────────────────────────────────────┤
│  🚨 Violations    │  📝 Exams        │  📋 Tasks          │
│  - Tracking       │  - Management    │  - Assignment      │
│  - Investigation  │  - Scheduling    │  - Workflow        │
│  - Reporting      │  - Analytics     │  - Progress        │
├─────────────────────────────────────────────────────────────┤
│  🗄️ Database      │  ⚙️ Settings     │  📱 Overview       │
│  - Management     │  - Configuration │  - Dashboard       │
│  - Administration │  - Preferences   │  - Summary         │
└─────────────────────────────────────────────────────────────┘
```

</div>

---

## 📁 Project Structure

```
📦 admin/
├── 📄 package.json              # Dependencies & scripts
├── 📄 vite.config.js           # Vite configuration
├── 📄 eslint.config.js         # ESLint configuration
├── 📄 index.html               # Entry HTML file
├── 📄 README.md                # This documentation
├── 📁 public/                  # Static assets
│   ├── 🗂️ employee_skillset.csv
│   ├── 🗂️ employee_occupancy_status.csv
│   ├── 📄 ETC_6TH_IOT_U-I.pdf
│   ├── 🖼️ hr.jpg, task.jpg
│   └── 📁 report/              # Report files (p1.pdf, p2.pdf, p3.pdf)
├── 📁 src/                     # Source code
│   ├── 📄 App.jsx              # Main application component
│   ├── 📄 main.jsx             # Application entry point
│   ├── 🎨 App.css, index.css   # Global styles
│   ├── 📁 pages/               # Page components
│   │   ├── 📊 AnalyticsPage.jsx
│   │   ├── 👥 UsersPage.jsx
│   │   ├── ⚠️ RiskPage.jsx
│   │   ├── 🚨 ViolationPage.jsx
│   │   ├── 📝 ExamPage.jsx
│   │   ├── 📋 AssignTask.jsx
│   │   ├── 🗄️ Database.jsx
│   │   ├── ⚙️ settingsPage.jsx
│   │   ├── 📱 Overviewpage.jsx
│   │   ├── 📅 SchedulePage.jsx
│   │   └── 📋 ReprotTable.jsx
│   └── 📁 Components/          # Reusable components
│       ├── 🧭 Sidebar.jsx      # Navigation sidebar
│       ├── 📁 common/          # Shared components
│       │   ├── Header.jsx
│       │   └── StatCard.jsx
│       ├── 📁 analytics/       # Analytics components
│       │   ├── AIPoweredInsights.jsx
│       │   ├── RevenueChart.jsx
│       │   ├── ChannelPerformance.jsx
│       │   ├── CustomerSegmentation.jsx
│       │   ├── OverviewCards.jsx
│       │   ├── ProductPerformance.jsx
│       │   └── UserRetention.jsx
│       ├── 📁 Users/           # User management components
│       ├── 📁 Risks/           # Risk management components
│       ├── 📁 violation/       # Violation tracking components
│       ├── 📁 Exams/           # Exam management components
│       ├── 📁 overview/        # Overview components
│       └── 📁 settings/        # Settings components
└── 📁 node_modules/            # Dependencies (auto-generated)
```

---

## 🛠️ Technology Stack

### 🎨 **Frontend Framework & Libraries**
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

### 🎨 **Styling & Animation**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.0.14 | Utility-first CSS framework |
| **Framer Motion** | 12.5.0 | Animation and motion library |

### 📊 **Data Visualization & Charts**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Recharts** | 2.15.1 | Composable charting library |

### 🔧 **Utilities & Integration**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Axios** | 1.8.3 | HTTP client for API requests |
| **Lucide React** | 0.479.0 | Beautiful icon library |
| **jsPDF** | 3.0.1 | PDF generation for reports |
| **React Markdown** | 10.1.0 | Markdown rendering |
| **Spline React** | 4.0.0 | 3D graphics and animations |

---

## 🚀 Quick Start

### 📋 Prerequisites
- 📦 Node.js (v18 or higher)
- 📦 npm or yarn package manager
- 🌐 Modern web browser (Chrome, Firefox, Safari, Edge)

### ⚡ Installation

1. **📥 Navigate to Admin Directory**
   ```bash
   cd path/to/optic/Admin
   ```

2. **📦 Install Dependencies**
   ```bash
   npm install
   ```

3. **🚀 Start Development Server**
   ```bash
   npm run dev
   ```

4. **🌐 Access Application**
   ```
   Open browser and go to: http://localhost:5173
   ```

### 🏗️ Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Lint code for style issues
npm run lint

# Preview production build
npm run preview
```

---

## 📱 Pages & Components

### 🏠 **Main Pages**

#### 📊 **Analytics Page** (`AnalyticsPage.jsx`)
- **Features**: Real-time business analytics and insights
- **Components**: Revenue charts, performance metrics, AI insights
- **Data**: Sales data, user engagement, conversion rates

#### 👥 **Users Page** (`UsersPage.jsx`)
- **Features**: User management and administration
- **Components**: User tables, profile management, role assignment
- **Data**: User profiles, activity logs, permissions

#### ⚠️ **Risk Page** (`RiskPage.jsx`)
- **Features**: Risk assessment and monitoring
- **Components**: Risk level indicators, alert systems, mitigation tracking
- **Data**: Risk metrics, threat levels, compliance status

#### 🚨 **Violation Page** (`ViolationPage.jsx`)
- **Features**: Incident tracking and investigation management
- **Components**: Violation reports, investigation workflows, resolution tracking
- **Data**: 
  ```javascript
  violationReport = {
    totalViolations: "11",
    pendingInvestigations: "4",
    resolvedViolations: "5",
    highRiskCases: "3"
  }
  ```

#### 📝 **Exam Page** (`ExamPage.jsx`)
- **Features**: Assessment creation and management
- **Components**: Exam builder, question banks, results analysis
- **Data**: Exam schedules, results, performance analytics

#### 📋 **Task Assignment** (`AssignTask.jsx`)
- **Features**: Workflow management and task distribution
- **Components**: Task forms, assignment workflows, progress tracking
- **Data**: Task lists, assignments, deadlines

#### 🗄️ **Database** (`Database.jsx`)
- **Features**: Data management and administration
- **Components**: Data tables, import/export tools, backup systems
- **Data**: System data, user data, application settings

#### ⚙️ **Settings Page** (`settingsPage.jsx`)
- **Features**: System configuration and preferences
- **Components**: Configuration panels, user preferences, system settings
- **Data**: Application settings, user preferences, system configurations

---

## 🎨 UI Components

### 📊 **Common Components** (`src/Components/common/`)

#### 🔖 **StatCard Component**
```jsx
<StatCard 
  name='Total Violations' 
  icon={AlertTriangle} 
  value={violationReport.totalViolations} 
  color='#EF4444' 
/>
```
- **Props**: `name`, `icon`, `value`, `color`
- **Purpose**: Display key metrics and statistics
- **Styling**: Tailwind CSS with custom colors

#### 📋 **Header Component**
```jsx
<Header title={"Dashboard Title"} />
```
- **Props**: `title`
- **Purpose**: Page headers with consistent styling
- **Features**: Responsive design, consistent branding

### 🧭 **Navigation** (`Sidebar.jsx`)
- **Features**: 
  - Responsive sidebar navigation
  - Route-based active states
  - Icon-based menu items
  - Collapsible design

### 📊 **Analytics Components** (`src/Components/analytics/`)

| Component | Purpose | Features |
|-----------|---------|----------|
| `AIPoweredInsights.jsx` | AI-driven business insights | Machine learning analytics |
| `RevenueChart.jsx` | Revenue visualization | Time-series charts |
| `ChannelPerformance.jsx` | Marketing channel analysis | Multi-channel metrics |
| `CustomerSegmentation.jsx` | User segmentation analysis | Demographic breakdowns |
| `OverviewCards.jsx` | Summary metrics display | KPI cards |
| `ProductPerformance.jsx` | Product analytics | Performance tracking |
| `UserRetention.jsx` | Retention analysis | Cohort analysis |

---

## 📊 Analytics Features

### 🤖 **AI-Powered Insights**
- Machine learning-driven business recommendations
- Predictive analytics for trend forecasting
- Automated anomaly detection
- Performance optimization suggestions

### 📈 **Real-time Charts & Visualizations**
- Interactive revenue charts with time-series data
- Channel performance breakdown
- Customer segmentation analysis
- User retention and engagement metrics

### 📋 **Custom Reporting**
- PDF report generation using jsPDF
- Scheduled report delivery
- Custom report templates
- Data export capabilities

---

## 🔧 Configuration

### 🛠️ **Vite Configuration** (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})
```

### 📝 **ESLint Configuration** (`eslint.config.js`)
- React hooks linting
- React refresh support
- Modern JavaScript standards
- Custom rule configurations

### 🎨 **Tailwind CSS Configuration**
- Custom color schemes
- Responsive breakpoints
- Component-specific utilities
- Animation configurations

---

## 🧪 Development

### 🔧 **Development Workflow**

1. **🚀 Start Development Server**
   ```bash
   npm run dev
   ```

2. **🎨 Component Development**
   - Create components in appropriate directories
   - Follow React functional component patterns
   - Use Tailwind CSS for styling
   - Implement Framer Motion for animations

3. **📊 Data Integration**
   - Use Axios for API calls
   - Implement proper error handling
   - Add loading states
   - Cache frequently used data

4. **🧪 Testing**
   ```bash
   npm run lint  # Code quality checks
   ```

### 📝 **Coding Standards**

- **Components**: Use functional components with hooks
- **Styling**: Utility-first approach with Tailwind CSS
- **State Management**: React hooks (useState, useEffect, useContext)
- **API Calls**: Centralized with Axios
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth transitions

### 🎨 **Design Patterns**

- **Responsive Design**: Mobile-first approach
- **Component Composition**: Reusable and modular components
- **Props Validation**: PropTypes or TypeScript
- **Error Boundaries**: Graceful error handling
- **Performance**: Lazy loading and code splitting

---

## 📦 Building

### 🏗️ **Production Build**
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### 📁 **Build Output**
- **Location**: `dist/` directory
- **Assets**: Optimized JS, CSS, and static files
- **Features**: Code splitting, minification, compression

### 🚀 **Deployment**
```bash
# Build and deploy to your hosting service
npm run build

# Deploy dist/ folder to:
# - Vercel, Netlify, Firebase Hosting
# - AWS S3, Azure Static Web Apps
# - Any static hosting service
```

---

## 🤝 Contributing

### 📝 **Contribution Guidelines**

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/new-component
   ```
3. **💾 Make your changes**
   - Follow coding standards
   - Add proper documentation
   - Test your changes
4. **📤 Submit a pull request**

### 🏗️ **Development Setup**
```bash
# Clone and setup
git clone <repository-url>
cd Admin
npm install
npm run dev
```

### 📋 **Adding New Features**

1. **📱 New Pages**: Add to `src/pages/`
2. **🧩 Components**: Add to appropriate `src/Components/` subdirectory
3. **🎨 Styling**: Use Tailwind CSS utilities
4. **📊 Charts**: Use Recharts for data visualization
5. **🔗 Routing**: Update routing in `App.jsx`

---

## 📞 Support

### 🆘 **Getting Help**

- 📧 **Email**: admin-support@auraai.com
- 🐛 **Issues**: [Report bugs and issues](../../issues)
- 📚 **Documentation**: Check component documentation
- 💬 **Community**: Join our developer community

### 🔧 **Common Issues**

<details>
<summary>🚪 Port Already in Use</summary>

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3001
```
</details>

<details>
<summary>📦 Dependency Issues</summary>

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```
</details>

<details>
<summary>🎨 Styling Issues</summary>

```bash
# Ensure Tailwind CSS is properly configured
npm run build-css

# Check for conflicting styles
```
</details>

---

<div align="center">

# 🛡️ Admin Dashboard

**Part of the AURA AI OPTIC Platform**

*Built with ❤️ using React, Vite, and modern web technologies*

---

### 🌟 Star this repository if you found it helpful!

[![GitHub stars](https://img.shields.io/github/stars/yourusername/aura-ai-optic?style=social)](../../stargazers)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/aura-ai-optic)](../../issues)
[![GitHub license](https://img.shields.io/github/license/yourusername/aura-ai-optic)](../../blob/main/LICENSE)

</div>
