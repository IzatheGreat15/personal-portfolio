import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from './logo.png';
function Navigation() {
    return (
      <>
        <Navbar bg="white" expand="lg" sticky='top'>
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              
              <Nav
                className="justify-content-end me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
               </Nav>
          
              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item className="text">
                  <Nav.Link href="#home" style={{color:"#116889"}}>Home</Nav.Link>
                </Nav.Item>

                <Nav.Item className="text">
                  <Nav.Link href="#about" style={{color:"#116889"}}>About</Nav.Link>
                </Nav.Item>

                <Nav.Item className="text">
                  <Nav.Link href="#skills" style={{color:"#116889"}}>Skills</Nav.Link>
                </Nav.Item>

                <Nav.Item className="text">
                  <Nav.Link href="#projects" style={{color:"#116889"}}>Projects</Nav.Link>
                </Nav.Item>

                <Nav.Item className="text">
                  <Nav.Link href="#contacts" style={{color:"#116889"}}>Contacts</Nav.Link>
                </Nav.Item>
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Navigation;