import React from 'react'

const Signup = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#signupModal">
        Register
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">SignUp</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className='btn btn-primary w-100 mb-2'>
                <span className='fa fa-google me-4'></span>Sign in with google
              </button>
              <button className='btn btn-primary w-100 mb-2'>
                <span className='fa fa-facebook me-4'></span>Sign in with google
              </button>

              <form >
                <div>
                  <label for="validationCustom01" className="form-label">First name</label>
                  <input type="text" className="form-control" id="validationCustom01" required />

                </div>
                <div>
                  <label for="validationCustom02" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="validationCustom02" required />

                </div>
                <div>
                  <label for="validationCustomUsername" className="form-label">Username</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

                  </div>
                </div>
                <div>
                  <label for="validationCustom03" className="form-label">City</label>
                  <input type="text" className="form-control" id="validationCustom03" required />

                </div>
                <div>
                  <label for="validationCustom04" className="form-label">State</label>
                  <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Andhra Pradesh</option>
                    <option>TamilNadu</option>
                    <option>Puducherry</option>
                  </select>

                </div>
                <div>
                  <label for="validationCustom05" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="validationCustom05" required />

                </div>
                <div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                    <label className="form-check-label" for="invalidCheck">
                      Agree to terms and conditions
                    </label>

                  </div>
                </div>
                <div>
                  <button className="btn btn-primary w-100" type="submit">Register</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signup