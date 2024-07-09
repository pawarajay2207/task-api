# Task API

This is a simple RESTful API built with Node.js and Express.js for managing a collection of tasks (to-do items). The API supports basic CRUD (Create, Read, Update, Delete) operations on tasks.

## Endpoints

1. GET /tasks : Retrieve a list of all tasks.
2. GET /tasks/:id : Retrieve a specific task by ID.
3. POST /tasks : Create a new task.
4. PUT /tasks/:id : Update an existing task by ID.
5. DELETE /tasks/:id : Delete a task by ID.

## Requirements

- Node.js (version 18.15.0) & npm 9.5.0
- Express.js

## Installation

1. Clone the repository:
  
   git clone https://github.com/pawarajay2207/task-api.git
   cd task-api


2. Install dependencies:

   npm install


3. Start the server:

   node index.js


4. The API will be running on "http://localhost:3000".

## Usage

### Example Requests

- GET /tasks

  GET :  http://localhost:3000/tasks


- POST /tasks
  
  POST : http://localhost:3000/tasks
  Content-Type: application/json

  {
    "title": "Backend Assessment",
    "description": "This is a Backend Assessment task"
  }

- GET /tasks/:id

  GET :  http://localhost:3000/tasks/1


- PUT /tasks/:id

  PUT  : http://localhost:3000/tasks/1
  Content-Type: application/json

  {
    "title": "Frontend Assessment",
    "description": "This task has been updated with backend to frontend"
  }


- DELETE /tasks/:id

  DELETE :  http://localhost:3000/tasks/1


### Error Handling

The API includes basic error handling for cases such as missing fields in the request body, tasks not found, etc.

### Deployment

This API is designed for development purposes. For production deployment, consider additional security measures and optimizations.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.
