const express = require("express");
const app = express();
const PORT = 3000;

const students = [
  { rollno: 1, name: "Krish", section: "Core-B" },
  { rollno: 2, name: "Ryan", section: "Core-B" },
  { rollno: 3, name: "Anuj", section: "Core-B" },
  { rollno: 4, name: "Kunal", section: "Core-B" },
  { rollno: 5, name: "Sukhwinder", section: "Core-B" }
];

// Read Operation
app.get("/students", (req, res) => {
  res.json(students);
});

// Read operation with Id
app.get("/students/:rollNo", (req, res) => {
  const id = req.params.rollNo;

  const student = students.find(
    (student) => student.rollNo === Number(id)
  );
  if(student === undefined){
    res.status(404).json({ message: "Student not found" });
    return;
  }

  

  res.json({success:true, student});
});
app.listen(PORT, () => console.log("server is running on port 3000"));