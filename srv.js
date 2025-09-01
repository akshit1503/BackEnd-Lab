const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
    { id: 1, name: 'Learn Node.js', description: 'Complete the Node.js tutorial', completed: false },
    { id: 2, name: 'Build a REST API', description: 'Create a simple API using Express.js', completed: true },
];
let nextId = 3;

const findItemById = (id) => items.find(item => item.id === parseInt(id));


app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    const item = findItemById(req.params.id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
});

app.post('/items', (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    const newItem = {
        id: nextId++,
        name,
        description: description || '',
        completed: false,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
    const item = findItemById(req.params.id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    const { name, description, completed } = req.body;
    item.name = name || item.name;
    item.description = description !== undefined ? description : item.description;
    item.completed = completed !== undefined ? completed : item.completed;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const initialLength = items.length;
    items = items.filter(item => item.id !== parseInt(req.params.id));
    if (items.length === initialLength) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
