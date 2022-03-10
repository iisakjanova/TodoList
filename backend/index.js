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

    const newTask = {
        id,
        name: req.body.name,
        active: req.body.active,
    };

    tasks = {
        ...tasks,
        [id]: newTask
    };

    res.send(newTask);
});

app.put('/', (req, res) => {
    const {id, ...update} = req.body;

    tasks = {
        ...tasks,
        [id]: {
            ...tasks[id],
            ...update
        }
    };

    res.send(tasks[id]);
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const {[id]: _, ...rest } = tasks;

    tasks = rest;

    res.send(`Task removed!`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});