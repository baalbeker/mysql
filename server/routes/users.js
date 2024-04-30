import express from 'express';
import db from '../database.js';

const userRoutes = express.Router();

userRoutes.post('/', (req, res) => {
  const {
    username,
    password,
    phone,
    age,
    name,
    town,
    address
  } = req.body;

  const values = [username, password, phone, age, name, town, address];
  const query = 'INSERT INTO users (username, password, phone, age, name, town, address) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(query, values, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error inserting user data into the database');
    } else {
      res.json({ username });
    }
  });
});

// to do:  add more routes for users here, such as GET, PUT, DELETE, etc.

export default userRoutes;
