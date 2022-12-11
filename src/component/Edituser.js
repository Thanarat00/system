import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { AiFillEdit} from "react-icons/ai";
import { PlusOutlined } from '@ant-design/icons';
import {
  Upload,
} from 'antd';


function Edituser() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [email,setEmail] = useState ('');
    const [fname,setFname] = useState ('');
    const [lname,setLname] = useState ('');
    const [sex,setSex] = useState ('');
    const [tel,setTel] = useState ('');
    const [address,setAddress] = useState ('');
    const [image,setImage] = useState ('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email,fname,lname,sex,tel,address,image });
        setEmail("");
        setFname("");
        setLname("");
        setSex("");
        setTel("");
        setAddress("");
        setImage("");
      };

  return (
    <div> <Button variant="success"  onClick={handleShow} >
    <AiFillEdit />
    </Button>
 

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title className='text-center'></Modal.Title>
    </Modal.Header>
    <Modal.Body>
  <Form onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>อีเมล</Form.Label>
      <Form.Control type="text"   onChange={(e) => setEmail(e.target.value)}  />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>เบอร์โทรศัพท์</Form.Label>
    <Form.Control type="Number" onChange={(e) => setTel(e.target.value)} />
  </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>ชื่อ</Form.Label>
      <Form.Control type="first-name"  onChange={(e) => setFname(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>นามสกุล</Form.Label>
      <Form.Control type="last-name"  onChange={(e) => setLname(e.target.value)} />
    </Form.Group>
  </Row>
   <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>เพศ</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3"  >
            <Form.Check
            inline
            label="ชาย"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            onChange={(e) => setSex(e.target.value)}
          />
          <Form.Check
            inline
            label="หญิง"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={(e) => setSex(e.target.value)}
          />
        </div>
      ))}
      </Form.Group>
      
      <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>ที่อยู่ </Form.Label>
      <Form.Control as="textarea" rows={3}  onChange={(e) => setAddress(e.target.value)}/>
        </Form.Group>
  
  </Row>

  <Upload action="/upload.do" listType="picture-card" >
        <div>
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            รูปภาพ
          </div>
        </div>
      </Upload>
 </Form>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="primary" onClick={handleSubmit}>
        Save
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default Edituser