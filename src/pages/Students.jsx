import StudentForm from "../components/StudentForm";
import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");

  function addOrUpdateStudent() {
    const student = {
      name,
      branch,
      cgpa,
    };

    if (editIndex === null) {
      setStudents([...students, student]);
    } else {
      const updatedStudents = [...students];

      updatedStudents[editIndex] = student;

      setStudents(updatedStudents);

      setEditIndex(null);
    }

    setName("");
    setBranch("");
    setCgpa("");
  }

  function deleteStudent(index) {
    const updatedList = students.filter(
      (_, i) => i !== index
    );

    setStudents(updatedList);
  }

  function editStudent(index) {
    const student = students[index];

    setName(student.name);
    setBranch(student.branch);
    setCgpa(student.cgpa);

    setEditIndex(index);
  }

  return (
    <div>
      <h1>Students Page</h1>

      <StudentForm
        name={name}
        setName={setName}
        branch={branch}
        setBranch={setBranch}
        cgpa={cgpa}
        setCgpa={setCgpa}
        addOrUpdateStudent={addOrUpdateStudent}
        editIndex={editIndex}
      />

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Students List</h2>

      {students
        .filter((student) =>
          student.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((student, index) => (
          <div key={index}>
            <p>
              {student.name} | {student.branch} |{" "}
              {student.cgpa}
            </p>

            <button
              onClick={() => editStudent(index)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteStudent(index)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default Students;