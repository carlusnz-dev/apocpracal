import { Row, Col, Container } from "react-bootstrap"
import GalleryPhotos from "../components/GalleryPhotos"

function About() {
     return (
          <>
               <Container style={{ marginTop: "10rem" }}>
                    <Row style={{ height: "100vh" }}>
                         <Col className="d-flex flex-column">
                              <h1 className="display-1 fw-bold text-center">Sobre nós</h1>
                              <p className="lead text-center" style={{ letterSpacing: "6px" }}>Saiba como trabalhamos, como crescemos e onde queremos chegar</p>
                              <hr />
                              <img src="https://via.placeholder.com/1100x400" alt="Sobre nós" className="img-fluid rounded-3" />
                         </Col>
                    </Row>
               </Container>
               <Container className="bg-light py-3 px-5 my-5 rounded-3 shadow">
                    <Row className="mt-0 mt-md-3">
                         <Col className="align-self-center">
                              <h2 className="display-4 fw-bold">Nossa história</h2>
                              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus eget nunc luctus tincidunt. Cras et nunc sed</p>
                         </Col>
                         <Col>
                              <img height="300" src="https://via.placeholder.com/500" alt="Missão" className="img-fluid rounded-3" />
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col>
                              <img height="300" src="https://via.placeholder.com/500" alt="Missão" className="img-fluid rounded-3" />
                         </Col>
                         <Col className="align-self-center">
                              <h2 className="display-4 fw-bold">Missão</h2>
                              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus eget nunc luctus tincidunt. Cras et nunc sed</p>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col className="align-self-center">
                              <h2 className="display-4 fw-bold">Visão</h2>
                              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus eget nunc luctus tincidunt. Cras et nunc sed</p>
                         </Col>
                         <Col>
                              <img height="300" src="https://via.placeholder.com/500" alt="Missão" className="img-fluid rounded-3" />
                         </Col>
                    </Row>
                    {/* Galeria de fotos */}
                    <Row className="mt-5">
                         <Col>
                              <h2 className="display-4 fw-bold">Galeria de fotos</h2>
                              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus eget nunc luctus tincidunt. Cras et nunc sed</p>
                         </Col>
                         <Col sm={12}>
                              <GalleryPhotos />
                         </Col>
                    </Row>
               </Container>
          </>
     )     
}

export default About