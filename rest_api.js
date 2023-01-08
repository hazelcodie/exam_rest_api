const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/my-api', { useNewUrlParser: true });

// Create a new Express app
const app = express();

// Use body-parser to parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add a route to create a new user
app.post('/users', (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(user);
  });
});

// Add a route to get all users
app.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) return res.status(500).send(err);
    return res.send(users);
  });
});

// Add a route to get a single user
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send();
    return res.send(user);
  });
});

// Add a route to update a user
app.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send();
    return res.send(user);
  });
});

// Add a route to delete a user
app.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send();
    return res.send(user);
  });
});

// Create a new Todo
app.post('/todos', (req, res) => {
  const todo = new Todo(req.body);
  todo.save((err, todo) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(todo);
  });
});

// Get all Todos
app.get('/todos', (req, res) => {
  Todo.find((err, todos) =>
if (err) return res.status(500).send(err);
    return res.send(todos);
  });
});

// Get a single Todo
app.get('/todos/:id', (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    if (!todo) return res.status(404).send();
    return res.send(todo);
  });
});

// Update a Todo
app.put('/todos/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
    if (err) return res.status(500).send(err);
    if (!todo) return res.status(404).send();
    return res.send(todo);
  });
});

// Delete a Todo
app.delete('/todos/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    if (!todo) return res.status(404).send();
    return res.send(todo);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('API listening on port 3000');
});
