function StudentForm({name,setName,branch,setBranch,cgpa,setCgpa,addOrUpdateStudent,editIndex,}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Branch"
        value={branch}
        onChange={(e) =>
          setBranch(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter CGPA"
        value={cgpa}
        onChange={(e) =>
          setCgpa(e.target.value)
        }
      />
  
       <br />
      <br />
      <button
        onClick={addOrUpdateStudent}
      >
        {editIndex === null
          ? "Add Student"
          : "Update Student"}
      </button>

      <br />
      <br />
    
      <br />
      <br />
    </div>
  );
}

export default StudentForm;