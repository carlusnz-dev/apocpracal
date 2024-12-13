import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

function Header() {
     return (
          <Navbar bg="light" expand="md" fixed="top">
               <Container>
                    <Navbar.Brand href="#">APOCPRA<span className="fw-bold">CAL</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                         id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel"
                         placement="end"
                    >
                         <Offcanvas.Header closeButton>
                              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                         </Offcanvas.Header>
                         <Offcanvas.Body>
                              <Nav className="justify-content-end flex-grow-1 pe-3">
                                   <Nav.Link>
                                        <Link to="/">Início</Link></Nav.Link>
                                   <Nav.Link>
                                        <Link to="/blog">Blog</Link></Nav.Link>
                                   <Nav.Link>
                                        <Link to="/about">Sobre</Link>
                                   </Nav.Link>
                                   <Nav.Link>
                                        <Link to="/contact">Contato</Link>
                                   </Nav.Link>
                              </Nav>
                         </Offcanvas.Body>
                    </Navbar.Offcanvas>
               </Container>
          </Navbar>
     )
}

export default Header