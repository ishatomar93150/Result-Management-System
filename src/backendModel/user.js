const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'resultManagement'
});

db.connect((err)=> {
    if(err){
        throw err;
    }
    console.log('connected to mysql database');
});

// MySQL table creation
const createResultTableQuery = `
CREATE TABLE IF NOT EXISTS users(
    rollno INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)`;

db.query(createResultTableQuery, (err)=>{
    if(err){
        throw err;
    }
    console.log('Users table created');
});

// User model

const userModel = {
    createUser:(user, callback)=> {
        const insertQuery='INSERT INTO users SET ?';
        db.query(insertQuery, user, callback);
    },
    getUserById: (rollno, callback) => {
        const selectQuery = 'SELECT * FROM results WHERE rollno= ?';
        db.query(insertQuery, rollno, callback);
    }
};

module.exports = userModel;