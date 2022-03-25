import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import './Shop.css'

const Shop = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    // set laptop on cart
    const [cart, setCart] = useState([])

    const addToCart = (laptop) => {
        const newCart = [...cart, laptop]
        setCart(newCart)
    }

    let chooseOne = () => {
        let choseItem = cart[Math.floor(Math.random() * cart.length)];
        console.log(choseItem)
    }

    if (cart.length <= 4) {
        // let choseItem = cart[Math.floor(Math.random() * cart.length)];
    }

    return (
        <div className='shop-container'>
            <div className="product">
                {
                    laptops.map(laptop => <Laptop laptop={laptop}
                        addToCart={addToCart} key={laptop.id}></Laptop>)
                }
            </div>
            <div className="cart">
                {
                    cart.map(item => <h2 key={item.id}>{item.name}</h2>)
                }
                <div>
                    <button onClick={chooseOne} className="btn-group">Choose 1 for me</button>
                    <button className="btn-group">Choose again</button>
                </div>
            </div>
        </div>

    );
};

export default Shop;