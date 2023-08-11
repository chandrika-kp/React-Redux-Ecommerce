import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Have some Questions</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="chandu"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-outline-dark">Send Message</button>

        </div>
      </div>
    </>
  )
}

export default Contact;
