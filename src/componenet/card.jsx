import React from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react'
// import SingalProductCard from './singalProductCard';


function card(props) {
    // const [singalProductt , setSingalProduct] = useState({});
    const { item, index  } = props;
    // const signalProduct = async (ProductIndex)=>{
    // // console.log("response", apiResponse[ProductIndex]);
    // const data = apiResponse[ProductIndex];
    // setSingalProduct({...data});
    //}
    function findItemByIndex(index, data) {
    const filteredData = data.filter((item) => {
      // console.log("item", item.id);
      return item.id === index + 1;
    });
    // console.log(filteredData) 
    props.SearchProduct(filteredData);
  }
   
  return (
    <>  
       <div className="card" key={index} onClick={()=> findItemByIndex(index, props.apiResponse)}>
            <img src={item.image} alt="" />
            <h2 className='title'>{item.title}</h2>
            <p className='description'>
              {item.description}
            </p>
            <p className='price'>
              $:{item.price}
            </p>
          </div>
    </>
  )
}
export default card

// Object.keys(singalProduct).length > 0 
//{ Object.keys(signalProd).length > 0 ? }

{/* <div className="card" key={index} onClick={()=> signalProduct(index)}>
            <img src={item.image} alt="" />
            <h2 className='title'>{item.title}</h2>
            <p className='description'>
              {item.description}
            </p>
            <p className='price'>
              $:{item.price}
            </p>
          </div> */}