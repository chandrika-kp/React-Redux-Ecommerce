import React from 'react';
import img from '../assets/bg1.png'
import Products from './Products';
// import '../assets/bg.png';

export default function Home() {
    return (
        <>
            <div className="card text-bg-dark">
                <img src={img} className="card-img border-0" alt="background" height="600px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center ">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
                    <p className="card-text lead">CHECK OUT ALL THE TRENDS</p>
                </div>
            </div>
            <div className="row">
            <marquee className="fs-4 py-3">!!------Deal of the day || Flat <span className='fs-3' style={{color:"red"}}> 10% </span> discount on all Products-------------------!!</marquee>
            <marquee direction="right" className="fs-4">!!------Deal of the day || Flat <span className='fs-3' style={{color:"red"}}> 10% </span> discount on all Products-------------------!!</marquee>

            </div>
            <Products />
        </>
    )
}
