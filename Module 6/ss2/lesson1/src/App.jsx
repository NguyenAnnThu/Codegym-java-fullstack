import 'bootstrap/dist/css/bootstrap.min.css'
import cities from "./service/data.js";
import './App.css'

function App() {
  return (
    <>
      <div className="container mt-5">
          <h1>
              List of centrally governed cities
          </h1>
          <table className="table table-bordered table-striped">
              <thead className="table-dark">
              <tr>
                  <th> STT</th>
                  <th> Id</th>
                  <th> Name</th>
              </tr>
              </thead>
              <tbody>
              {cities.map((cities,i) => (
                  <tr key={cities.id}>
                      <td>{i+1}</td>
                      <td>{cities.id}</td>
                      <td>{cities.name}</td>
                  </tr>
              ))}
              </tbody>
          </table>

      </div>
    </>
  )
}

export default App
