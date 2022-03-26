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
    let [cart, setCart] = useState([])

    const addToCart = (laptop) => {
        const newCart = [...cart, laptop]
        setCart(newCart)
    }

    const [choose, setChoose] = useState([])

    let chooseOne = () => {
        let choseItem = cart[Math.floor(Math.random() * cart.length)];
        cart = []
        setChoose(choseItem.name)
        setCart(cart)
    }
    let chooseAgain = () => {
        setChoose([])
        setCart([])
    }

    return (
        <div className='shop-container'>
            {/* <div className='row'> */}
            <div className="product">
                {
                    laptops.map(laptop => <Laptop laptop={laptop}
                        addToCart={addToCart} key={laptop.id}></Laptop>)
                }
            </div>
            <div className="cart ">
                {
                    cart.map(item => <h2 key={item.id}>{item.name}</h2>)
                }
                <div className='choosen'>
                    <h3>Chosen Item</h3>
                    <h1>{choose}</h1>
                </div>
                <div>
                    <button onClick={chooseOne} className="btn-group">Choose 1 for me</button>
                    <button onClick={chooseAgain} className="btn-group">Choose again</button>
                </div>
            </div>
            {/* </div> */}
        </div>

    );
};

export default Shop;