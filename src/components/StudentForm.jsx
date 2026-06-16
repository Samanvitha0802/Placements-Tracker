import { useState } from "react";

function StudentForm() {
    const [name, setName] = useState("");
    const [branch, setBranch] = useState("");
    const [cgpa, setCgpa] = useState("");
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
            type="text"
            placeholder="Enter CGPA"
            value={cgpa}
            onChange={(e) => setCgpa(Number(e.target.value))}
        />
        <br />
        <p>Name: {name}</p>
        <p>Branch: {branch}</p>
        <p>CGPA: {cgpa}</p>
    </div>
    );

}
export default StudentForm;