import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  
const navigete = useNavigate();

const showDetail = () =>{
  navigete(`/product/${item.id}`);
}

  return (
    <div className='card-area' onClick={showDetail}>
        <img className='imgStyle' src={item?.img} alt=""/>
        <div className='choice-style'>{item?.choice? "Conscious choice" : <br/>}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true? "신제품" : " "}</div>
    </div>
  )
}

export default ProductCard;