const express = require("express");
const router = express.Router();
const connection = require("../backendModel/person"); 

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM persons";
    connection.query(query, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    res.send("Error Caught!" + error);
  }
});

router.get("/:rollno", async (req, res) => {
  try {
    const query = "SELECT * FROM persons WHERE rollno = ?";
    connection.query(query, [req.params.rollno], (error, results) => {
      if (error) throw error;
      if (results.length === 0) {
        res.send("No person found!");
      } else {
        res.json(results[0]);
      }
    });
  } catch (error) {
    res.send("No person found!" + error);
  }
});

router.post("/", async (req, res) => {
  const person = {
    rollno: req.body.rollno,
    name: req.body.name,
    gender: req.body.gender,
    dob: req.body.dob,
    score: req.body,
  };

  try {
    const query = "INSERT INTO persons SET ?";
    connection.query(query, person, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    res.send("Error!" + error);
  }
});

router.patch("/:rollno", async (req, res) => {
  try {
    const query = "SELECT * FROM persons WHERE rollno = ?";
    connection.query(query, [req.params.rollno], (error, results) => {
      if (error) throw error;
      if (results.length === 0) {
        res.send("No Person");
      } else {
        const updatedPerson = {
          ...results[0],
          name: String(req.body.name),
        };
        const updateQuery = "UPDATE persons SET ? WHERE rollno = ?";
        connection.query(updateQuery, [updatedPerson, req.params.rollno], (error, results) => {
          if (error) throw error;
          res.send(updatedPerson);
        });
      }
    });
  } catch (error) {
    res.send("Cannot Update!");
  }
});

router.delete("/:rollno", async (req, res) => {
  try {
    const query = "DELETE FROM persons WHERE id = ?";
    connection.query(query, [req.params.rollno], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  } catch (error) {
    res.send("Cannot Delete the Person!");
  }
});

module.exports = router;