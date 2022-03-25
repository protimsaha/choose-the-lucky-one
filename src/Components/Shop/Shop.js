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

    // const [laptopName, setLaptopName] = useState('')
    const addToCart = (name) => {
        console.log(name)
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
                <h1>galo</h1>
            </div>
        </div>
    );
};

export default Shop;