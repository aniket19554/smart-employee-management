# 🚀 Employee Management System (EMS)

<p align="center">
  A role-based task management application built with React, Tailwind CSS, and Vite.
  <br />
  Manage tasks, assign work to employees, and track progress through dedicated dashboards.
</p>

## 📌 Overview

The Employee Management System (EMS) is a React-based web application for managing employee tasks within an organization. Administrators can create and assign tasks, view all tasks, and monitor progress. Employees can view assigned tasks and update task status.

The application uses React Context API for shared state management and browser `localStorage` for client-side data persistence.

## ✨ Features

### 🔐 Authentication
- Login using email and password.
- Separate Admin and Employee dashboards.
- Role-based dashboard rendering.
- Logout functionality.

### 👨‍💼 Admin Dashboard
- Create tasks and assign them to employees.
- View all tasks.
- Track task counts by status.
- Monitor New, Active, Completed, and Failed tasks.

### 👨‍💻 Employee Dashboard
- View assigned tasks.
- Start assigned tasks.
- Mark tasks as completed or failed.
- View task status summaries.

### 📋 Task Management
- Organize tasks by status.
- Update task progress.
- Persist task and user data in browser `localStorage`.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling |
| Vite | Development server and build tool |
| React Context API | Shared application state |
| localStorage | Client-side persistence |

## ⚙️ Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm
- Git

### Installation

```bash
git clone https://github.com/aniket19554/smart-employee-management.git
cd smart-employee-management
npm install
npm run dev
```

Open the local URL shown in your terminal. Vite commonly uses `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

## 🔑 Demo Credentials

Use these only if they match the users configured in your application.

| Role | Email | Password |
|---|---|---|
| Admin | admin@example.com | 123 |
| Employee | employee1@example.com | 123 |

**Security note:** These are demo credentials. Client-side authentication and localStorage are not secure for production use.

## 🔄 Task Workflow

- **New:** Task is assigned but not started.
- **Active:** Work is in progress.
- **Completed:** Work has been completed successfully.
- **Failed:** Work could not be completed successfully.

## 💾 Data Persistence

The application stores data in browser `localStorage`. Data can remain available after reloads in the same browser, but it is browser-specific and is not automatically synchronized across devices.

For production use, consider adding a backend API, database, secure authentication, and server-side authorization.

## 🖥️ Screenshots

Add screenshots of your application in a `screenshots/` folder and link them here.

## 🌐 Deployment

You can deploy a Vite application using Vercel or Netlify.

- Build command: `npm run build`
- Output directory: `dist`

Configure a single-page application fallback if your application uses client-side routing.

## 🗺️ Future Improvements

- [ ] Backend API using Node.js and Express
- [ ] Database integration using MongoDB or PostgreSQL
- [ ] Secure authentication and server-side authorization
- [ ] Task priorities and deadline notifications
- [ ] Task search, filtering, and sorting
- [ ] Automated tests
- [ ] Accessibility and responsive UI improvements

## 🤝 Contributing

Contributions and suggestions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request.

## 📄 License

Add a `LICENSE` file if you want to publish this project under a specific open-source license.
