import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {

  let { id } = useParams()
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/jjunseokk/hnm-site/products/${id}`
    let respanse = await fetch(url)
    let data = await respanse.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  };
  const [dropbox, setDropbox] = useState("");
  let size = document.getElementById("dropdown-basic");
  const showDrop = (e) =>{
    setDropbox(e);
    size.innerHTML = e;
  }

  useEffect(() => {
    getProductDetail()
  }, []);
  if(loading || product == null) return <h1>Loading</h1>
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩ {product?.price}</div>
          <div>{product?.choice ? "Conscious choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item  onClick={()=>showDrop("S")}>S</Dropdown.Item>
              <Dropdown.Item  onClick={()=>showDrop("M")}>M</Dropdown.Item>
              <Dropdown.Item  onClick={()=>showDrop("L")}>L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className='product-button'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
