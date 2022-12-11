import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AiFillDelete} from "react-icons/ai";
import { ImCross} from "react-icons/im";



function Deletesupplier() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
      <AiFillDelete/>
      </Button>
      <Modal show={show} onHide={handleClose}   size='sm' className="text-center">
        <Modal.Header   className='text-danger'>
          <Modal.Title >Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label  className='text-danger'><ImCross /></Form.Label>
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
      
        <Button variant="danger" onClick={handleClose}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Deletesupplier