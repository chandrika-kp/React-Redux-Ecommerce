import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import handleCart from '../../redux/reducer/handleCart';
import { removeFromCart } from '../../redux/actions/actions';
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch();

  const handledelItems = (item) => {
    dispatch(removeFromCart(item))
  }

  const cartItems = (cartItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button onClick={() => handledelItems(cartItem)} className='btn-close float-end' aria-label="Close"></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img src={cartItem.img} alt={cartItem.title} height="150px" width="150px" />
              </div>
              <div className="col-md-4">
                <h3>{cartItem.title}</h3>
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
      <div className="px-4 my-5 bg-light rounded-3 py-5" >
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>

    )

  }

  const checkOut = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mx-3 mb-5 w-25">Proceed To checkOut</NavLink>
          <NavLink to="/products" className="btn btn-outline-primary mb-5 w-25">Continue shopping</NavLink>
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