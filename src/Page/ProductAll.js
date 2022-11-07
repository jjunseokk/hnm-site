import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProducts = async () => {
    try {
      let searchQuery = query.get('q') || "";
      console.log(searchQuery);
      let url = `https://my-json-server.typicode.com/jjunseokk/hnm-site/products?q=${searchQuery}`;
      let respanse = await fetch(url);
      let data = await respanse.json();
      if (data.length < 1) {
        if (searchQuery !== "") {
          setError(`${searchQuery}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다");
        }
      }
      setProductList(data);
    } catch (err) {
      setError(err.message)
    }
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