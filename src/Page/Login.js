import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import '../App.css'
function Login() {
    const [email,setEmail] = React.useState ('')
    const [password,setPassword] = React.useState('')
  return (
    <Form className='continer'>
     <Image src='https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg'  className='logo'/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="จำรหัสผ่าน" />
      </Form.Group>
      <Button variant="primary" type="submit">
       เข้าสู่ระบบ
      </Button>
    </Form>
  );
}

export default Login;