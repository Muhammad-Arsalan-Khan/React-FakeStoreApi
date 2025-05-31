import React, { useEffect, useState } from 'react'
import "./singalProduct.css"


function SingalProductCard({data}) {
 console.log(data)
  return (
    <>
      <div className="singalProductContainer">
        <div className="SingalProduct" key={data[0].id}>
        <img src={data[0].image} alt="" />
            <h2 className='SingalProducttitle'>{data[0].title}</h2>
            <p className='SingalProductdescription'>
              <strong>Description:</strong>
              {data[0].description}
            </p>
            <div className='SingalProductprice'>$:{data[0].price}</div>
      </div>
      </div>
    </>
  )
}

export default SingalProductCard