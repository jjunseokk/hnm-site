import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  
  const [productList, setProductList] = useState([]);
  const [query, setQuery] =useSearchParams();

  const getProducts= async() => {
    let searchQuery =query.get('q')|| "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/jjunseokk/hnm-site/products?q=${searchQuery}`;
    let respanse = await fetch(url);
    let data = await respanse.json();
    setProductList(data);
    }


  useEffect(()=>{
    getProducts();
  },[query]); 
  // []이 비어있으면 최로 한번 실행될 때 호출이 된다. 하지만 []에 값을 입력하면
  // query 값이 바뀔 때 마다 호출된다.

  return (
    <div>
      <Container>
          <Row>
            {productList.map((menu) => (
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
      </Container>
    </div>
  )
}

export default ProductAll