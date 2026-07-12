# MERN Blog Website

## Overview

A full-stack Blog Management System developed using the MERN stack. The application implements complete CRUD (Create, Read, Update, Delete) functionality through RESTful APIs and provides a React-based client interface for blog management.

The project follows a client-server architecture where the frontend communicates with the backend using HTTP requests, while MongoDB serves as the persistent data store.

---

## Architecture

```
React (Frontend)
        │
        │ Axios HTTP Requests
        ▼
Express.js REST API
        │
        ▼
Node.js Server
        │
        ▼
MongoDB Atlas
```

---

## Technology Stack

### Frontend

- React.js
- Vite
- Axios
- JavaScript (ES6+)
- CSS / Tailwind CSS

### Backend

- Node.js
- Express.js
- Mongoose
- dotenv
- CORS

### Database

- MongoDB Atlas

---

## Features

- RESTful API implementation
- CRUD operations
- MongoDB Atlas integration
- Mongoose schema validation
- Express middleware
- Client-server communication using Axios
- JSON data exchange
- Responsive frontend architecture

---

## Project Structure

```
blog-website
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   ├── components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## REST API Endpoints

| Method | Endpoint | Description |
|----------|----------------|----------------------|
| GET | /api/blogs | Retrieve all blogs |
| POST | /api/blogs | Create a blog |
| PUT | /api/blogs/:id | Update a blog |
| DELETE | /api/blogs/:id | Delete a blog |

---

## Database Schema

```javascript
Blog
{
    title: String,
    author: String,
    content: String,
    createdAt: Date,
    updatedAt: Date
}
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/<username>/blog-website.git
```

### Backend

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5050

MONGO_URI=<MongoDB Connection String>
```

Run Backend

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## API Testing

The REST APIs were tested using Thunder Client.

---

## Functional Workflow

1. Client sends HTTP request.
2. Express Router forwards request.
3. Controller processes request.
4. Mongoose performs database operation.
5. MongoDB returns data.
6. JSON response is sent to the client.
7. React updates the UI dynamically.

---

## Future Enhancements

- JWT Authentication
- User Authorization
- Rich Text Editor
- Image Upload
- Search & Filtering
- Pagination
- Comments Module
- Categories & Tags
- Deployment using Vercel & Render

---

## Concepts Demonstrated

- REST API Development
- MVC Architecture
- CRUD Operations
- MongoDB Atlas Integration
- React Hooks (useState, useEffect)
- Axios API Integration
- Express Middleware
- Mongoose ODM
- Environment Variable Management
- Client-Server Communication
- Asynchronous Programming (async/await)
- JSON-based Data Exchange
