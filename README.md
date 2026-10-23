🚀 Employee Management System (EMS)
<p align="center">
  A role-based task management application built with React, Tailwind CSS, and Vite.
  <br />
  Manage tasks, assign work to employees, and track progress through dedicated dashboards.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-React-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-Vite-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-Tailwind-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
</p>

📌 Overview
The Employee Management System (EMS) is a React-based web application for managing employee tasks within an organization. Administrators can create and assign tasks, view all tasks, and monitor progress. Employees can view their assigned tasks and update their task status.

The application uses React Context API for shared state management and browser localStorage for client-side data persistence.
✨ Features
🔐 Authentication
- Login using email and password.
- Separate Admin and Employee dashboards.
- Role-based dashboard rendering.
- Logout functionality.
👨‍💼 Admin Dashboard
- Create tasks and assign them to employees.
- View all tasks across the organization.
- Track task counts by status.
- Monitor New, Active, Completed, and Failed tasks.
👨‍💻 Employee Dashboard
- View tasks assigned to the logged-in employee.
- Start assigned tasks.
- Mark tasks as completed or failed.
- View task status summaries.
📋 Task Management
- Organize tasks by status: New, Active, Completed, and Failed.
- Update task progress through employee actions.
- Persist user and task data in browser localStorage.
🖥️ Screenshots
Add screenshots of your running application to a screenshots/ folder, then uncomment or update the image paths below.
Login Page
<!-- Save your screenshot as screenshots/login.png -->
<!-- ![EMS Login Page](./screenshots/login.png) -->

Admin Dashboard
<!-- Save your screenshot as screenshots/admin-dashboard.png -->
<!-- ![EMS Admin Dashboard](./screenshots/admin-dashboard.png) -->

Employee Dashboard
<!-- Save your screenshot as screenshots/employee-dashboard.png -->
<!-- ![EMS Employee Dashboard](./screenshots/employee-dashboard.png) -->

🛠️ Tech Stack
Technology	Purpose
React	Building the user interface
JavaScript (ES6+)	Application logic
Tailwind CSS	Styling and responsive layouts
Vite	Development server and build tool
React Context API	Shared authentication and application state
localStorage	Client-side data persistence


📁 Project Structure
ems/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   └── other/
│   │       ├── Header.jsx
│   │       ├── CreateTask.jsx
│   │       ├── AllTask.jsx
│   │       └── TaskListNumbers.jsx
│   ├── TaskList/
│   │   ├── AcceptTask.jsx
│   │   ├── NewTask.jsx
│   │   ├── CompleteTask.jsx
│   │   └── FailedTask.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
This is an example structure. Update it to match the actual files in your repository.
⚙️ Getting Started
Prerequisites
- Node.js (LTS recommended)
- npm (included with Node.js)
- Git
Installation
1. Clone the repository
   git clone <your-repository-url>
2. Move into the project folder
   cd ems
3. Install dependencies
   npm install
4. Start the development server
   npm run dev
5. Open the local URL shown in the terminal. Vite commonly uses:
   http://localhost:5173
Production Build
npm run build
npm run preview
🔑 Demo Credentials
Use these example credentials if they match the users configured in your local application.
Role	Email	Password
Admin	admin@example.com	123
Employee	employee1@example.com	123


Security note: These are demo credentials only. Browser localStorage and client-side checks are not secure authentication for production. Never use these credentials for real accounts.

🔄 Task Workflow
New Task
   |
   v
Active Task
   |
   +------------+
   |            |
   v            v
Completed      Failed
- New: Assigned but not yet started.
- Active: Work is in progress.
- Completed: Work was completed successfully.
- Failed: Work could not be completed successfully.
💾 Data Persistence
The application stores data in browser localStorage, so data can remain available after reloads in the same browser. This is suitable for a learning project or frontend demo, but data is browser-specific, can be edited by the user, and is not automatically synchronized across devices.

For production use, consider adding a backend API, a database, secure authentication, and server-side authorization.
🌐 Live Demo
- Live application: Add your deployed application URL here.
- GitHub repository: Add your repository URL here.
The links above are intentionally left as placeholders until your project is published.
Deployment
You can deploy a Vite application using Vercel or Netlify.

Typical build settings:
- Build command: npm run build
- Output directory: dist
If the application uses client-side routing, configure a single-page application fallback on your hosting provider.
🗺️ Future Improvements
- [ ] Backend API using Node.js and Express.
- [ ] Database integration using MongoDB or PostgreSQL.
- [ ] Secure authentication and server-side role authorization.
- [ ] Employee creation, editing, and deletion.
- [ ] Task priorities and deadline notifications.
- [ ] Task search, filtering, and sorting.
- [ ] Task history and audit logs.
- [ ] Automated tests.
- [ ] Accessibility and responsive UI improvements.
🤝 Contributing
Contributions and suggestions are welcome.
1. Fork the repository.
2. Create a feature branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m "Describe your change"
4. Push the branch to your fork.
5. Open a pull request.
📄 License
Add a LICENSE file if you want to publish this project under a specific open-source license. Do not claim a license until you have selected and added it.
<p align="center">
  Built with ❤️ using React, Tailwind CSS, and Vite.
</p>