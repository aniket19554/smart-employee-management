# Employee Management System (EMS)

The Employee Management System (EMS) is a React-based web application designed to manage tasks and users in an organization. It provides separate dashboards for administrators and employees, allowing them to perform their respective roles efficiently.

## Features

### 1. **Authentication**
   - **Login**: Users can log in using their email and password.
   - **Role-Based Access**: 
     - Admins have access to the Admin Dashboard.
     - Employees have access to the Employee Dashboard.

### 2. **Admin Dashboard**
   - **Create Tasks**: Admins can create tasks and assign them to employees.
   - **View All Tasks**: Admins can view a summary of all tasks assigned to employees, categorized as:
     - New Tasks
     - Active Tasks
     - Completed Tasks
     - Failed Tasks
   - **Logout**: Admins can log out of the system.

### 3. **Employee Dashboard**
   - **Task Overview**: Employees can view their tasks categorized as:
     - New Tasks
     - Active Tasks
     - Completed Tasks
     - Failed Tasks
   - **Task Actions**: Employees can:
     - Mark tasks as completed.
     - Mark tasks as failed.
   - **Logout**: Employees can log out of the system.

### 4. **Task Management**
   - Tasks are categorized into:
     - New Tasks: Tasks that are newly assigned.
     - Active Tasks: Tasks that are currently in progress.
     - Completed Tasks: Tasks that have been successfully completed.
     - Failed Tasks: Tasks that were not completed successfully.

### 5. **Persistent Data**
   - The app uses `localStorage` to store user and task data, ensuring data persistence across sessions.

---

## Folder Structure

### Key Directories:
- **`src/components/Auth`**: Contains the `Login` component for user authentication.
- **`src/components/Dashboard`**: Contains the `AdminDashboard` and `EmployeeDashboard` components.
- **`src/components/other`**: Contains shared components like `Header`, `CreateTask`, `AllTask`, and `TaskListNumbers`.
- **`src/TaskList`**: Contains components for displaying tasks (`AcceptTask`, `NewTask`, `CompleteTask`, `FailedTask`).
- **`src/context`**: Contains the `AuthProvider` for managing global authentication and user data.
- **`src/utils`**: Contains utility functions for managing `localStorage`.

---

## How to Use

### 1. **Admin Login**
   - Use the following credentials:
     - **Email**: `admin@example.com`
     - **Password**: `123`
   - After logging in, you will be redirected to the Admin Dashboard.

### 2. **Employee Login**
   - Use the following credentials (example):
     - **Email**: `employee1@example.com`
     - **Password**: `123`
   - After logging in, you will be redirected to the Employee Dashboard.

### 3. **Admin Actions**
   - Create tasks by filling out the form in the "Create Task" section.
   - View all tasks and their statuses in the "All Tasks" section.

### 4. **Employee Actions**
   - View tasks assigned to you in the dashboard.
   - Mark tasks as completed or failed.

---

## Technologies Used
- **Frontend**: React, TailwindCSS
- **Build Tool**: Vite
- **State Management**: React Context API
- **Storage**: `localStorage`

---

## How to Run the App

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ems
   