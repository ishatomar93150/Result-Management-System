const express = require("express");
const router = express.Router();
const connection = require("../backendModel/result"); 

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM results";
    connection.query(query, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    res.send("Error Caught! " + error);
  }
});

router.get("/:rollno", async (req, res) => {
  try {
    const query = "SELECT * FROM results WHERE rollno = ?";
    connection.query(query, [req.params.rollno], (error, results) => {
      if (error) throw error;
      if (results.length === 0) {
        res.send("No Result found!");
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    res.send("No Result found!" + error);
  }
});

router.post("/", async (req, res) => {
  const result = {
    rollno: req.body.rollno,
    name: req.body.name,
    dob: req.body.dob,
    score: req.body.score,
  };

  try {
    const query = "INSERT INTO results SET ?";
    connection.query(query, result, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  } catch (error) {
    res.send("Error!" + error);
  }
});

router.put("/:rollno", async (req, res) => {
  try {
    const result = {
      name: String(req.body.name),
      dob: String(req.body.dob),
      score: String(req.body.score),
    };

    const updateQuery = "UPDATE results SET ? WHERE rollno = ?";
    connection.query(updateQuery, [result, req.params.id], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  } catch (error) {
    res.send("Unable to Update the Result!");
  }
});

router.patch("/:rollno", async (req, res) => {
  try {
    const result = {
      name: String(req.body.name),
      dob: String(req.body.dob),
      score: String(req.body.score),
    };

    const updateQuery = "UPDATE results SET ? WHERE rollno = ?";
    connection.query(updateQuery, [result, req.params.rollno], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  } catch (error) {
    res.send("Cannot Update! Result");
  }
});

router.delete("/:rollno", async (req, res) => {
  try {
    const query = "DELETE FROM results WHERE rollno = ?";
    connection.query(query, [req.params.rollno], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  } catch (error) {
    res.send("Cannot Delete the Result!");
  }
});

module. Exports = router;