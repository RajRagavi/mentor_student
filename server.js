const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT =  3000;

app.use(bodyParser.json());
app.use('/', routes);
app.get('/', (req, res) => {
    // Example local variable
    const message = '<h1>Hello, World!</h1>';

    // Send the message as a response
    res.send(message);
});

mongoose.connect('mongodb://localhost:27017/mentorStudentDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
