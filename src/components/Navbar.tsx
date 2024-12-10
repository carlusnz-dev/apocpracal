import { Container, Nav, Navbar } from "react-bootstrap"

function Header() {
     return (
          <Navbar expand='lg' className='bg-body-tertiary shadow-sm mb-3'>
               <Container>
                    <Navbar.Brand href="#home">EXPOCAL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="me-auto">
                              <Nav.Item>
                                   <Nav.Link>Início</Nav.Link>
                                   <Nav.Link>Sobre</Nav.Link>
                                   <Nav.Link>Contato</Nav.Link>
                                   <Nav.Link>Blog</Nav.Link>
                              </Nav.Item>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     )
}

export default Header