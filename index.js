const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

// Helper function to find task by ID
const findTaskById = (id) => tasks.find(task => task.id === id);

// GET /tasks - Retrieve all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// GET /tasks/:id - Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
    const task = findTaskById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
});

// POST /tasks - Create a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT /tasks/:id - Update an existing task by ID
app.put('/tasks/:id', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const task = findTaskById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.title = title;
    task.description = description;

    res.status(200).json(task);
});

// DELETE /tasks/:id - Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ message: 'Task not found' });

    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Task API is running on http://localhost:${port}`);
});
