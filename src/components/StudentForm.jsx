import { useState } from "react";

function StudentForm({addStudent}) {
    const [name, setName] = useState("");
    const [branch, setBranch] = useState("");
    const [cgpa, setCgpa] = useState("");

    function handleSubmit()
    {
           const student={
            name,branch,cgpa
           };
           addStudent(student);

           setName("");
           setBranch("");
           setCgpa("");
    }

   
    return (<div>

        <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
            type="text"
            placeholder="Enter Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
        />
        <br />
        <br />
        <input
            type="number"
            placeholder="Enter CGPA"
            value={cgpa}
           onChange={(e) => setCgpa(e.target.value)}
        />
        <br />
        <p>Name: {name}</p>
        <p>Branch: {branch}</p>
        <p>CGPA: {cgpa}</p>
   

        <button onClick={handleSubmit}>Submit</button>
         <br/>
         <br/>
    </div>
    )
    
}
export default StudentForm;