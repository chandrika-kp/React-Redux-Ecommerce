import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/bg.png'

const About = () => {
  return (
    <>
    <div className="container py-5 my-5">
        <div className="row">
            <div className="col-md-6">
                <h1>About Us</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium error at praesentium, eligendi, quam tempore, ex incidunt id eum non consequatur tempora! Iste placeat harum quod vel, maxime repellendus maiores totam aut enim voluptas neque? Recusandae aspernatur voluptates architecto labore totam laborum numquam iure. Voluptatibus blanditiis nulla ab. Vero sed eligendi qui tempore cupiditate voluptas? Deleniti voluptatem doloremque, fugit maxime velit perferendis ipsum explicabo porro commodi fugiat aliquid quam ipsa voluptatum laboriosam ad voluptates corporis vero soluta. Earum reiciendis laborum, iste a exercitationem, facere quae sint placeat officia, voluptate et itaque tenetur fugiat. Dolorum a perferendis laboriosam asperiores soluta!
                </p>
                <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
            </div>
            <div className="col-md-6">
              <img src={img1} alt="About Us" />

            </div>
        </div>
    </div>

    </>
  )
}

export default About