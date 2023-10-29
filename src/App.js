import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import "./App.css";

export default function App() {

  let product = [
    {id:101,title:"Pen",price:20,stock:25},
    {id:102,title:"shoes",price:30,stock:30},
    {id:103,title:"books",price:40,stock:50}
  ]
  product.map(item=>{
    return console.log(item.id)
  })
  return (
    <>
    <Header/>
    {
      product.map((item)=>(
        <Card title={item.title} price={item.price} stock={item.stock}/>
      ))
    }
    <Footer/>
    </>
  )
}
