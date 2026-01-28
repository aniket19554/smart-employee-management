
const employees = [ 
  {
    "id": 1,
    "firstName": "Rohit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Monthly Report",
        "description": "Compile and analyze sales data for the month.",
        "category": "Reporting",
        "date": "2025-10-10",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss project requirements with new client.",
        "category": "Meetings",
        "date": "2025-10-12",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Add latest customer interactions into CRM.",
        "category": "Data Entry",
        "date": "2025-10-08",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Verify warehouse stock levels and update records.",
        "category": "Operations",
        "date": "2025-10-09",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Product Testing",
        "description": "Test new hardware units for performance and durability.",
        "category": "Quality Control",
        "date": "2025-10-13",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Safety Audit",
        "description": "Conduct an internal safety audit of all equipment.",
        "category": "Compliance",
        "date": "2025-10-14",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Supplier Feedback",
        "description": "Collect and evaluate feedback from suppliers.",
        "category": "Communication",
        "date": "2025-10-11",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Arjun",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Backup",
        "description": "Backup all company databases to secure storage.",
        "category": "IT",
        "date": "2025-10-07",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Deploy Update",
        "description": "Push latest patch to production servers.",
        "category": "Development",
        "date": "2025-10-13",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review code submitted by junior developers.",
        "category": "Development",
        "date": "2025-10-10",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "System Testing",
        "description": "Run automated tests to validate software stability.",
        "category": "QA",
        "date": "2025-10-15",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Social Media Update",
        "description": "Post new campaign updates on all platforms.",
        "category": "Marketing",
        "date": "2025-10-11",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Content Writing",
        "description": "Draft new blog post on company achievements.",
        "category": "Content",
        "date": "2025-10-09",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Ad Performance Review",
        "description": "Analyze ad campaign metrics for Q4.",
        "category": "Analytics",
        "date": "2025-10-14",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Amit",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Support",
        "description": "Respond to high-priority customer issues.",
        "category": "Support",
        "date": "2025-10-10",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Ticket Analysis",
        "description": "Analyze support tickets for recurring problems.",
        "category": "Support",
        "date": "2025-10-12",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Training",
        "description": "Conduct skill upgrade session for new hires.",
        "category": "Training",
        "date": "2025-10-13",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Knowledge Base Update",
        "description": "Add new troubleshooting articles to the help center.",
        "category": "Documentation",
        "date": "2025-10-15",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};


  
  

  