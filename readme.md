# MERN Stack Project
## Tree Structure
 ├── backend
│   ├── app.js
│   ├── config.env
│   ├── db
│   ├── middleware
│   ├── model
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   └── router
├── frontend
│   ├── index.html
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   ├── README.md
│   ├── src
│   ├── tailwind.config.js
│   └── vite.config.js
├── node_modules
│   └── js-cookie
├── package.json
├── package-lock.json
└── readme.md


## Overview

This MERN (MongoDB, Express.js, React, Node.js) stack project is a full-stack web application that provides secure user authentication, utilizes cookies for session management, implements JWT tokens for secure communication, and enhances the user interface with Animate.css animations.

## Features

- **User Authentication:**
  - Secure user registration and login functionality.
  - Password hashing and storage for enhanced security.
  - Account management, including password reset and profile updates.


- **Cookies for Session Management:**
  - Implementation of HTTP cookies for seamless user sessions.
  - Secure and HTTP-only cookie settings to enhance security.
  - Persistent login sessions for a consistent user experience.

- **JWT Tokens:**
  - Generation and validation of JWT tokens for secure communication.
  - Token-based authentication for protected API endpoints.
  - Token expiration and refresh mechanisms for added security.



## Tech Stack

- **Frontend (React):**
  - React components and hooks for dynamic UI.
  - State management using Redux or Context API.
  - React Router for navigation.

- **Backend (Node.js & Express):**
  - Express.js for building the backend API.
  - MongoDB for data storage.
  - Mongoose for ODM.

**Database (MongoDB):**
  -MongoDB for storing and managing data.
  -Integration with Mongoose for efficient interaction with the database.

- **Security Measures:**
  - HTTPS for data encryption during transmission.
  - CSRF protection to prevent malicious attacks.
  - Input validation and sanitization.

## Installation

1. Clone the repository: `git clone <https://github.com/ArifRahaman/MERNSTACK.git>`
2. Install dependencies:
 # Backend(Port:3000):
 ```
 cd backend
 nodemon app.js

```


 # Frontend(Port:5173):
 ```
 cd frontend
 npm run dev
```

