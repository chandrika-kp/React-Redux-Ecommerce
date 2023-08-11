import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
            {/* <div className="col-md-3">
                <Skeleton height={350}/>
            </div> */}
           
                Loading...
            </>
        )
    }

    const filterProduct = (textName) =>{
        const updatedProductList = data.filter((key)=> key.category === textName);
        setFilter(updatedProductList);
    }

    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-light me-2 px-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-light me-2" onClick={() => filterProduct("men's clothing")}>Men's clothing</button>
                    <button className="btn btn-outline-light me-2" onClick={() => filterProduct("women's clothing")}>Women's clothing</button>
                    <button className="btn btn-outline-light me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-light me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4 my-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" height="250px" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title}</h5>
                                        <p className="card-text fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <div className="container text-bg-dark my-5 py-5 ">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}

export default Products;
