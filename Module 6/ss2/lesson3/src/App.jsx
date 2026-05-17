
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="text-center mb-4">
                  Sign In
                </h3>
                <form>
                  <div className="mb-3 text-start">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="mb-3 text-start">
                      <label className="form-label">Password</label>
                      <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      id="remember"
                    />
                    <label className="form-check-label " htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
