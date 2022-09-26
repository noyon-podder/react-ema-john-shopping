import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data)
        )
    }, []);
   const handlerAddToCart = (product) => {
    console.log(product);
    const newProductItem = [...cart, product];
    setCart(newProductItem);
   }
  
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product = {product}
                        handlerAddToCart = {handlerAddToCart}
                        ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <h2>This cart container</h2>
               <p>Total cart Item : {cart.length}</p>
               <p>product Price = {}</p>
            </div>
        </div>
       
    );
};

export default Shop;