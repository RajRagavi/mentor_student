// this is for your reference
//I used below links in postman all are worked
//http://localhost:3000/mentors
//http://localhost:3000/students/
//http://localhost:3000/assign-student --Select one mentor and Add multiple Student
//http://localhost:3000/students/:mentorId -- A student who has a mentor should not be shown in List 
//http://localhost:3000/students/6558c672a6287f84f67f6149 -- Write API to show all students for a particular mentor
//http://localhost:3000/change-mentor/ -- API to Assign or Change Mentor for particular Student
//http://localhost:3000/previous-mentor/6558cba780895ea9399ee6d4 -- Write an API to show the previously assigned mentor for a particular student 

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT =  3000;

app.use(bodyParser.json());
app.use('/', routes);
app.get('/', (req, res) => {

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
