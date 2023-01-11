import React from 'react'
import { AiOutlineStar,AiFillStar } from "react-icons/ai";
import "./product.scss"

const ProductCard = (props) => {
    
        
   const {id,title,price,image,discount,rate} = props;

   

    
  return (
    <div className='product-card'>
        <div>
        <img width="250px" src={require(`../replit/imageeee/${image}`)} alt="" />
        </div>
        { discount == 0 ? "" :   <span>
            -{discount}
            </span>}

        <p>
            {
                [...new Array(5)].map( (item, index)=> index < rate ? <AiFillStar/> : <AiOutlineStar/>)
            
            }
        </p>
        
        
    
       
        <h3>{title}</h3>
        {
            
            discount == 0 ? <h5>{price}</h5> : <h5><del>{price}</del><b>{Math.floor(price*((100-discount)/100))}</b></h5>
        }
        
           
            
    </div>
  )
}

export default ProductCard