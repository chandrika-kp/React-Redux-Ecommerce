import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/actions/actions';
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch();

  const handleItems = (item) => {
    dispatch(removeFromCart(item))
  }

  const cartItems = (cartItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button onClick={() => handleItems(cartItem)} className='btn-close float-end' aria-label="Close"></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img src={cartItem.image} alt={cartItem.title} height="100px" width="100px" />
                <p>{cartItem.category}</p>
              </div>
              <div className="col-md-2">
                <p className='fs-6'>{(cartItem.description).substring(0, 100)}</p>
              </div>
              <div className="col-md-4">
                <h3 className='fs-4'>{cartItem.title}</h3>
              </div> <div className="col-md-2">
                <p className="lead fw-bold">${cartItem.price}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5" >
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>

        </div>
        <div className="row">
          <marquee className="fs-2 py-3">!!------Deal of the day || Flat <span className='fs-3' style={{ color: "red" }}> 10% </span> discount on all Products-------------------!!</marquee>
          <NavLink to="/products" className="btn btn-dark mb-5 w-25">click here to shop with us</NavLink>
        </div>
      </>

    )

  }

  const checkOut = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-dark mx-3 mb-5 w-25">Proceed To checkOut</NavLink>
          <NavLink to="/products" className="btn btn-outline-dark mb-5 w-25">Continue shopping</NavLink>
        </div>

      </div>
    )
  }
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && checkOut()}

    </>
  )
}

export default CartBtn