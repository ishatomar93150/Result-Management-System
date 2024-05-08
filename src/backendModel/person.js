// MySQL connection setup
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'resultManagement'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// MySQL table creation
const createPersonTableQuery = `
  CREATE TABLE IF NOT EXISTS persons (
    rollno INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    score INT  NOT NULL
  )
`;

db.query(createPersonTableQuery, (err) => {
  if (err) {
    throw err;
  }
  console.log('Person table created');
});

// Person model  with MySQL
const personModel = {
  createPerson: (person, callback) => {
    const insertQuery = 'INSERT INTO persons SET ?';
    db.query(insertQuery, person, callback);
  },
  getPersonById: (rollno, callback) => {
    const selectQuery = 'SELECT * FROM persons WHERE rollno = ?';
    db.query(selectQuery, rollno, callback);
  }
  
};

module.exports = personModel;
