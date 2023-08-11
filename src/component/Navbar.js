import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">KC's STORE</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-NavLink active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to="/contact">contact</NavLink>
                            </li>

                        </ul>
                        <div className='buttons'>
                            <NavLink to="/login" className="btn btn-dark">
                                <i className="fa fa-sign-in me-1"></i> <Login/></NavLink>
                            <NavLink to="/register" className="btn btn-dark mx-2">
                                <i className="fa fa-user-plus me-2"></i> <Signup/></NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark">
                                <i className="fa fa-shopping-cart me-2 fs-4 p-2 "></i> cart <sup>({state.length})</sup></NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar;
