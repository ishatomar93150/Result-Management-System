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
CREATE TABLE IF NOT EXISTS results(
    rollno INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    score INT NOT NULL
)`;

db.query(createResultTableQuery, (err)=>{
    if(err){
        throw err;
    }
    console.log('Result table created');
});

// Result model

const resultModel = {
    createResult:(result, callback)=> {
        const insertQuery='INSERT INTO result SET ?';
        db.query(insertQuery, result, callback);
    },
    getResultById: (rollno, callback) => {
        const selectQuery = 'SELECT * FROM results WHERE rollno= ?';
        db.query(insertQuery, rollno, callback);
    }
};

module.exports = resultModel;