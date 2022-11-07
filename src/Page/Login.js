import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login = ({setAuthenticate}) => {
  const navigete = useNavigate();
  
  const loginUser = (event) =>{
    event.preventDefault();
    console.log("login");
    setAuthenticate(true);
    navigete("/");
  };
  
  return (
    <Container onSubmit={(event)=>loginUser(event)}>
      <Form className='form-style'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login