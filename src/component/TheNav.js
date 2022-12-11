import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function TheNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >เจ้าของกิจการ</Nav.Link>
            <Nav.Link as={Link} to="/staff" >เจ้าหน้าที่</Nav.Link>
            <Nav.Link as={Link} to="/supplier" >ผู้ผลิตสินค้า</Nav.Link>
            <Nav.Link as={Link} to="/user" >สมาชิก</Nav.Link>
            <Nav.Link as={Link} to="/admin" >ผู้ดูแลระบบ</Nav.Link>
          </Nav>

          <NavDropdown title={
             <span className='me-auto'> Thanarat Sanrum {''}</span>
            } id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.4">
            ออกจากระบบ
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default TheNav;