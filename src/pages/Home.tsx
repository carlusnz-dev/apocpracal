import { Row, Col, Container, Button } from "react-bootstrap"
import { useMediaQuery } from "react-responsive"
import EventGallery from "../components/EventGallery"

function Home() {

     const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

     return (
          <>
               <Container className='d-flex flex-column justify-content-center align-items-center text-center' fluid style={{
                    height: "100vh",
                    backgroundColor: "#fff034f"
               }}>
                    <Row>
                         <Col>
                              <h1 className='display-1'>APOC<span className='fw-bold'>CAL</span></h1>
                              <p className='fs-3 fw-bold'>Conheça nossa associação e seus trabalhos</p>
                              <Button className='rounded-pill shadow'>
                                   Ver mais
                              </Button>
                         </Col>
                    </Row>
               </Container>

               {/* Search */}
               <Container style={{ margin: "7rem auto" }}>
                    <Row>
                         <h3 className='text-center'>Pesquise mais sobre</h3>
                         <Col md={{ span: 6, offset: 3 }}>
                              <form>
                                   <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Digite sua pesquisa..." />
                                   </div>
                                   <Button type="submit" className="rounded-pill shadow w-100">Pesquisar</Button>
                              </form>
                         </Col>
                    </Row>
               </Container>

               {/* About */}
               <Container className="bg-body-tertiary" fluid style={{ margin: "12rem auto 70px 0" }}>
                    <Container className="py-5">
                         <Row>
                              <Col>
                                   <h1 className="text-center fw-bold">Sobre</h1>
                                   <p className="text-center">Conheça mais sobre a associação</p>
                                   <hr />
                                   <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus mi. Sed nec metus in nisi sollicitudin hendrerit. Nullam auctor, justo eget tinc</p>
                                   {isMobile ? (
                                        <img src="https://via.placeholder.com/300" alt="About" className="img-fluid" />
                                   ) : (
                                        <div className="d-flex justify-content-center">
                                             <img src="https://via.placeholder.com/1200x500" alt="About" className="img-fluid" />
                                        </div>
                                   )}
                              </Col>
                         </Row>
                    </Container>

                    {/* Eventos */}
                    <Container className="py-5">
                         <Row>
                              <Col>
                                   <h1 className="text-center fw-bold">Eventos</h1>
                                   <p className="text-center">Confira nossos eventos</p>
                                   <hr />
                                   <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus mi. Sed nec metus in nisi sollicitudin hendrerit. Nullam auctor, justo eget tinc</p>
                              </Col>
                         </Row>
                         <Row>
                              <EventGallery />
                         </Row>
                    </Container>

               </Container >

               {/* Fundadores */}
               <Container className="py-5 mb-5">
                    <Row>
                         <Col className="align-self-end mb-5">
                              <h1 className="text-end fw-bold display-3">Fundadores</h1>
                              <p className="text-end fs-5">Conheça nossos fundadores</p>
                         </Col>
                         <Col>
                              <img src="https://via.placeholder.com/400" alt="Fundadores" className="img-fluid" />
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col className="d-flex justify-content-center">
                              <img src="https://via.placeholder.com/1200x500" alt="Fundadores" className="img-fluid rounded-4" />
                         </Col>
                    </Row>
                    {/* Redes Sociais*/}
                    <Row className="bg-body-tertiary p-5 shadow rounded-3 w-75 mx-auto" style={{ marginTop: "7rem" }}>
                         <Col xs={12} className="d-flex justify-content-center">
                              <h1 className="fw-bold">Redes Sociais</h1>
                         </Col>
                         <Col className="d-flex justify-content-center mt-5">
                              <Button className="rounded-pill shadow me-3">
                                   <i className="bi bi-facebook me-2"></i>
                                   Facebook
                              </Button>
                              <Button className="rounded-pill shadow me-3">
                                   <i className="bi bi-instagram me-2"></i>
                                   Instagram
                              </Button>
                              <Button className="rounded-pill shadow">
                                   <i className="bi bi-twitter me-2"></i>
                                   Twitter
                              </Button>
                         </Col>
                    </Row>
               </Container>
          </>
     )
}

export default Home