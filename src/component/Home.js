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
            <Products />
        </>
    )
}
