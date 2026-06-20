const express = require("express");
const app = express();

app.use(express.json());

// Temporary database (in-memory)
let students = [
  { id: 1, name: "Rahul", branch: "ECE", cgpa: 8.5 },
  { id: 2, name: "Samanvitha", branch: "CSE", cgpa: 9.2 }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).send("Student not found");
  }

  res.json(student);
});

app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    ...req.body
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).send("Student not found");
  }

  students[index] = { id, ...req.body };

  res.json(students[index]);
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter((s) => s.id !== id);

  res.send("Student deleted successfully");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});