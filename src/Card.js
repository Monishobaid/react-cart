import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Card.css';


export default function Card({title,price,stock}) {
    let prevStock = stock
    let[stockCount,newstockCount]=useState(stock);

    function decrementStock(){
        newstockCount(--stockCount);
        console.log(stock);
    }
    function resetStock(){
        newstockCount(prevStock);
    }
  return (
    <>
    <div className='Card'>
        <h1>{title}</h1>
        <p className='Price'>${price}</p>
        <p className='Price'>In Stock: {stockCount}</p>
        <p><button onClick={decrementStock}>Add to the Cart</button></p>
        <p><button onClick={resetStock}>Refill the Stock</button></p>
    </div>
    </>
  )
}
Card.propTypes={
    title: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,

}
Card.defaultProps={
    title:"Default Prop Example",

}
