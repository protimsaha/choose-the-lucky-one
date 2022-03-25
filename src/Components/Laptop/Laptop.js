import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import './Laptop.css'

const Laptop = ({ laptop, addToCart }) => {
    const { name, price, photo } = laptop
    return (
        <div className='laptop'>
            <img src={photo} alt="" />
            <h2>Name: {name}</h2>
            <h2>Price:{price}</h2>
            <div onClick={() => addToCart(name)} className='button'>
                <p>Add To Cart</p>
                <FontAwesomeIcon className='icon' icon={faLaptop}></FontAwesomeIcon>
            </div>
        </div >
    );
};

export default Laptop;