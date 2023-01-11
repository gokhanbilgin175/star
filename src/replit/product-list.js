import React from 'react'
import ProductCard from './product-card'
import Data from "./data.json"
import "./product.scss"

const ProductList = () => {
  return (
    <div className='product-list'>
        {Data.map((item,index)=>   <ProductCard {...item}/>)}
      
    </div>
  )
}

export default ProductList