import StudentForm from "../components/StudentForm";
import { useState } from "react";
function Students() {
       const [students, setStudents] = useState([]);
       const [search, setSearch] = useState("");


       function addStudent(student) {
              setStudents([...students, student]);
       }
       function deleteStudent(index) {
              const updatedList = students.filter((_, i) =>
                     i !==index
              );

              setStudents(updatedList);
       }
       return (
              <div>
                     <h1>Students Page</h1>
                     <StudentForm addStudent={addStudent} />
                     <input
                            type="text"
                            placeholder="Search Student"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                     />
                      <h2>Students List</h2>
                     {
                            students
                            .filter((student) => {
                                 return  student.name
                                          .toLowerCase()
                                          .includes(search.toLowerCase())
                            }).map((student, index) => (
                                   <div key={index}>
                                          <p>
                                                 {student.name} | {student.branch} | {student.cgpa}
                                          </p>
                                          <button onClick={() => deleteStudent(index)}>Delete</button>
                                   </div>
                            ))
                     }
                    

              
                                 

                 


              </div>
       );
}



export default Students;