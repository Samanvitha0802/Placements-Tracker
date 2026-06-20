import StudentForm from "../components/StudentForm";
import { useState, useEffect } from "react";
import axios from 'axios';


function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");


  //GET CALL
  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);


  // POST CALL
  async function addStudent(student) {
    try {
      const response = await axios.post("http://localhost:5000/students", student);
      setStudents([...students, response.data]);
    }
    catch (error) {
      console.log(error);
    }
  }

  // DELETE CALL
  async function deleteStudent(id) {
    try {
      await axios.delete(
        `http://localhost:5000/students/${id}`
      );

      const updatedStudents =
        students.filter((student) => student.id !== id);

      setStudents(updatedStudents);

    } catch (error) {
      console.log(error);
    }
  }


  //PUT CALL
  
  async function updateStudent(student) {
  try {
    const response = await axios.put(
      `http://localhost:5000/students/${editIndex}`,
      student
    );

    const updatedStudents =
      students.map((s) =>
        s.id === editIndex
          ? response.data
          : s
      );

    setStudents(updatedStudents);

  } catch (error) {
    console.log(error);
  }
}
function startEdit(student) {
  setName(student.name);
  setBranch(student.branch);
  setCgpa(student.cgpa);

  setEditIndex(student.id);
}
  async function addOrUpdateStudent() {
    const student = {
      name,
      branch,
      cgpa
    };

    if (editIndex === null) {
      await addStudent(student);
    } else {
      await updateStudent(student);
    }

    setName("");
    setBranch("");
    setCgpa("");
    setEditIndex(null);
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
              onClick={() => startEdit(student)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default Students;