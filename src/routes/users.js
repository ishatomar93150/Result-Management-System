const express = require("express");
const router = express.Router();
const connection = require("../models/user"); // Assuming you have a MySQL connection configured

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    connection.query(query, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    res.send("Error Caught! " + error);
  }
});

router.get("/:username", async (req, res) => {
  try {
    const query = "SELECT * FROM users WHERE username = ?";
    connection.query(query, [req.params.username], (error, results) => {
      if (error) throw error;
      if (results.length === 0) {
        res.send("No User found!");
      } else {
        res.json(results[0]);
      }
    });
  } catch (error) {
    res.send("No User found!" + error);
  }
});

router.post("/", async (req, res) => {
  const user = {
   
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const query = "INSERT INTO users SET ?";
    connection.query(query, user, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    res.send("Cannot Add User!" + error);
  }
});

router.patch("/:rollno", async (req, res) => {
  try {
    const user = {
      username: String(req.body.username),
      password: String(req.body.password),
      
    };

    const updateQuery = "UPDATE users SET ? WHERE rollno = ?";
    connection.query(updateQuery, [user, req.params.rollno], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  } catch (error) {
    res.send("Cannot Update! User");
  }
});

router.delete("/:rollno", async (req, res) => {
  try {
    const query = "DELETE FROM users WHERE rollno = ?";
    connection.query(query, [req.params.rollno], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  } catch (error) {
    res.send("Cannot Delete the User!");
  }
});

module.exports = router;