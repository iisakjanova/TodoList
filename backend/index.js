const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

let tasks = {
    1: {
        id: 1,
        name: 'Buy milk',
        active: true
    },
    2: {
        id: 2,
        name: 'Do homework',
        active: true
    }
};

app.get('/', (req, res) => {
    res.send(tasks);
});

app.post('/', (req, res) => {
    const id = nanoid();

    if (!req.body.name) {
        return res.status(400).send({message: 'Invalid data!'});
    }

    const newTask = {
        id,
        name: req.body.name,
        active: req.body.active || true,
    };

    tasks = {
        ...tasks,
        [id]: newTask
    };

    res.send(newTask);
});

app.put('/:id', (req, res) => {
    if (!tasks[req.params.id]) {
        return res.status(404).send({message: 'Task is not found!'});
    }

    const {id, ...update} = req.body;

    tasks = {
        ...tasks,
        [req.params.id]: {
            ...tasks[req.params.id],
            ...update
        }
    };

    res.send(tasks[id]);
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;

    if (!tasks[id]) {
        return res.status(404).send({message: 'Task is not found!'});
    }

    const {[id]: _, ...rest } = tasks;

    tasks = rest;

    res.send(`Task removed!`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});