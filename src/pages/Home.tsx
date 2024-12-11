import { Row, Col, Container, Button } from "react-bootstrap"
import Header from "../components/Navbar"
import { useMediaQuery } from "react-responsive"

function Home() {

     const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

     return (
          <>
               <Header />
               <Container className='d-flex flex-column justify-content-center align-items-center text-center' fluid style={{
                    height: "100vh",
                    backgroundColor: "#fff034f",
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
               <Container className="bg-body-tertiary" fluid style={{ margin: "12rem auto" }}>
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
                                        <img src="https://via.placeholder.com/1200x400" alt="About" className="img-fluid rounded-4" />
                                   )}
                              </Col>
                         </Row>
                    </Container>
               </Container >
          </>
     )
}

export default Home