import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product , handlerAddToCart}) => {

    const {name, img, ratings, price, seller} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-details">
            <h2>{name}</h2>
            <p>Price : {price} TK</p>
            <p>Manufacturer : {seller}</p>
            <b>Rating : {ratings} stars</b>
            </div>
            <button onClick={() => handlerAddToCart(product)} className='button-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;