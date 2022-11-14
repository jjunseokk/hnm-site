import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';


const ProductAll = () => {

  const productList = useSelector((state)=>state.product.productList)
  const [query, setQuery] = useSearchParams();
  const dispatch =useDispatch();
  const getProducts = () => {
      let searchQuery = query.get('q') || "";
      console.log(searchQuery);
      dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  // []이 비어있으면 최로 한번 실행될 때 호출이 된다. 하지만 []에 값을 입력하면
  // query 값이 바뀔 때 마다 호출된다.

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col md={3} lg={3} sm={12}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll