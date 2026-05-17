import "bootstrap/dist/css/bootstrap.min.css"
import students from "./service/data.js";
import './App.css'

function App() {

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">List of students</h2>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Class Name</th>
            </tr>
          </thead>
          <tbody>
          {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index+1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.className}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
