# MERN Stack Project
# Screenshots
![Screenshot from 2024-01-23 02-30-02](https://github.com/ArifRahaman/MERNSTACK/assets/115584161/6f0cfc4f-6443-483e-bc4f-1022084dcc67)
![Screenshot from 2024-01-23 02-30-15](https://github.com/ArifRahaman/MERNSTACK/assets/115584161/a2cc3372-f84f-447a-ab4f-d7198823527b)
![Screenshot from 2024-01-23 03-18-41](https://github.com/ArifRahaman/MERNSTACK/assets/115584161/89f9ee1b-5db5-4a36-b24e-e65970b9591b)



## Tree Structure
```
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

```


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

