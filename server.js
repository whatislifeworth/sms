const express = require('express');
const app = express();
const path = require('path');
const pool = require('../src/db/connect');
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const User = require('./model/User');

//require('./routes.js');

app.use(express.json());

mongoose.connect('mongodb+srv://bharath:sms123@sms.nlxyo8u.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// CREATE
app.post('/users', async (req, res) => {
  const user = new User(req.body);

  console.log("Inside");

  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// app.post('/insert-users', async (req, res) => {
//   try {
//     const { firstName, lastName, email } = req.body;
//     // Insert the new user into the database using the data from the request body
//     const result = await pool.query('INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *', [firstName, lastName, email]);
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal server error');
//   }
// });




app.get('/', (req, res) => {
  res.send("hi");
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
