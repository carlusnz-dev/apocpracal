import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"

function Header() {
     return (
          <Navbar bg="light" expand="md">
               <Container>
                    <Navbar.Brand href="#">APOC<span className="fw-bold">CAL</span></Navbar.Brand>
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
                                   <Nav.Link href="/">Início</Nav.Link>
                                   <Nav.Link href="/blog">Blog</Nav.Link>
                                   <Nav.Link href="/about">Sobre</Nav.Link>
                                   <Nav.Link href="/contact">Contato</Nav.Link>
                              </Nav>
                         </Offcanvas.Body>
                    </Navbar.Offcanvas>
               </Container>
          </Navbar>
     )
}

export default Header