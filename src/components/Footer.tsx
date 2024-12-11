import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
     return (
          <footer className="container-fluid bg-body-tertiary p-5">
               <Container>
                    <Row>
                         <Col className="text-center py-3">
                              <h3>ApocCal</h3>
                              <p>&copy; 2024 ApocCal. Todos os direitos reservados.</p>
                         </Col>
                         <Col className="text-center">
                              <h5>Links</h5>
                              <ul className="list-unstyled text-small">
                                   <li><Link to="/" className="link-secondary text-decoration-none">Início</Link></li>
                                   <li><Link to="/blog" className="link-secondary text-decoration-none">Blog</Link></li>
                                   <li><Link to="/about" className="link-secondary text-decoration-none">Sobre</Link></li>
                                   <li><Link to="/contact" className="link-secondary text-decoration-none">Contato</Link></li>
                              </ul>
                         </Col>
                         <Col>
                              <h5>Contato</h5>
                              <ul className="list-unstyled text-small">
                                   <li><a href="mailto:apoppracal@hotmail.com" className="link-secondary text-decoration-none">apoppracal@hotmail.com</a></li>
                                   <li><a href="tel:+5511999999999" className="link-secondary text-decoration-none">+55 11 99999-9999</a></li>
                                   <li><a href="https://goo.gl/maps/1" className="link-secondary text-decoration-none">Rua da ApocCal, 123</a></li>
                              </ul>
                         </Col>
                    </Row>
               </Container>
          </footer>
     )
}

export default Footer