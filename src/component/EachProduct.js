import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart} from '../redux/actions/actions';


const EachProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartBtn ,setCartBtn] = useState("Add to cart");

    const dispatch = useDispatch();
    const addProduct = (product) => {
        if(cartBtn === "Add to cart"){
            dispatch(addToCart(product));
            setCartBtn("Remove from cart")
        }
        else{
            dispatch(removeFromCart(product));
            setCartBtn("Add to cart")
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            console.log(product)
            setLoading(false);
        }
        getProduct();

    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>

                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />

                </div>
                <div className="col-md-6 p-5" style={{ border: "2px solid black" }}>
                    <h4 className="text-uppercase text-block-50">{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                    <p>{product.description}</p>
                    <button className='btn btn-outline-dark p-2 m-2' onClick={()=>addProduct(product)}>{cartBtn}</button>
                    <NavLink to="/cart" className="btn btn-outline-dark p-2" >Go to Cart</NavLink>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <div className="container py-5">
                    <div className="row">
                        {loading ? <Loading /> : <ShowProduct />}

                    </div>
                </div>

            </div>
        </>
    )
}

export default EachProduct