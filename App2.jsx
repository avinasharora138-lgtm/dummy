
import {useState} from 'react'
function App(){
  const [students, setStudents] = useState ([
    {
      id: 1,
      name: "KAJAL",
      course: "MERN"
    },
    {
      id: 2,
      name: "Avi",
      course: "PHP"
    }
  ]);
  const [name, setName] = useState ("");
  const [course, setCourse] = useState("");
  const [editId, setEditId] = useState (null);
  
  const addStudent = (e) => {
    e.preventDefault();
    if(name === "" || course ===""){
      alert("Please fill all fields");
      return;
    }
    const newStudent = {
      id: Date.now(),
      name: name,
      course: course
    };
    setStudents ([...students, newStudent]);
    setName("");
    setCourse("");
  };
  const deleteStudent = (id) => {
    setStudents (
      students.filter((student)=>student.id !== id)
    );
  };
  const editStudent = (student)=>{
    setEditId (student.id);
    setName (student.name);
    setCourse (student.course);
  };
  const updateStudent = (e)=>{
    e.preventDefault ();
    setStudents(
    students.map((student)=>{
      if (student.id === editId){
        return{
          ...student,
          name: name,
          course: course
        };
      }
      return student;
    })
  );
    setEditId (null);
    setName ("");
    setCourse ("");
  };
  const cancelEdit = () => {
    setEditId(null);
    setName ("");
    setCourse ("");
  };
  return(
    <div style={{padding: "30px"}}>
      <h1>Student Management</h1>
      {}
      <form onSubmit={editId === null? addStudent : updateStudent}>
        <input 
        type="text"
        placeholder='Enter Student Name'
        value={name}
        onChange={(e)=> setName (e.target.value)} 
        />
        <input 
        type="text"
        placeholder='Enter Course'
        value={course}
        onChange={(e)=> setCourse (e.target.value)} 
        />
        <button type='submit'>
          {editId === null? "Add Student" : "Update Student"}
        </button>
        {editId !== null && (
          <button type='button' onClick={cancelEdit}>Cancel</button>
        )}
      </form>
      <hr />
      <h2>Students</h2>
      {students.map((student)=>(
        <div key={student.id}
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px"
        }}>
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
          <button onClick={()=> editStudent(student)}>
            Edit
          </button>
          <button onClick={()=> deleteStudent(student.id)}>
            Delete
            </button>
        </div>
      ))}
    </div>
  );
}
export default App
