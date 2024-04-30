import mysql from 'mysql'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Turin554!',
  database: 'samito',
});

db.connect((err) => {
  if (err) console.error('Error connecting to MySQL database:', err);
  else console.log('Connected to MySQL database');
});

export default db;

//mysql -u root -p
//start mysql from services or click "Run code" button on server.js


