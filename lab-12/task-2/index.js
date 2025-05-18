import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let students = [
  { name: "Harry Potter", rollNo: "CS101-001", present: true },
  { name: "Hermione Granger", rollNo: "CS101-002", present: true },
  { name: "Ron Weasley", rollNo: "CS101-003", present: false },
];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, rollNo, present } = req.body;

  if (!name || !rollNo)
    return res.status(400).json({ error: "Name and Roll Number are required" });

  if (students.some((student) => student.rollNo === rollNo)) {
    return res
      .status(409)
      .json({ error: "Student with this Roll Number already exists" });
  }

  const newStudent = {
    name,
    rollNo,
    present: present !== undefined ? Boolean(present) : false,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.patch("/students/:rollNo", (req, res) => {
  const { rollNo } = req.params;
  const { present } = req.body;

  if (present === undefined)
    return res.status(400).json({ error: "Present status is required" });

  const studentIndex = students.findIndex(
    (student) => student.rollNo === rollNo
  );

  if (studentIndex === -1)
    return res.status(404).json({ error: "Student not found" });

  students[studentIndex].present = Boolean(present);

  res.json(students[studentIndex]);
});

app.get("/students/present", (req, res) => {
  const presentStudents = students.filter(
    (student) => student.present === true
  );
  res.json(presentStudents);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
