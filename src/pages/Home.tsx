import { Row, Col, Container, Button } from "react-bootstrap"
import Header from "../components/Navbar"

function Home() {
     return (
          <>
               <Header />
               <Container className='d-flex flex-column justify-content-center align-items-center text-center' fluid style={{
                    height: "70vh",
                    backgroundColor: "#fff034f",
               }}>
                    <Row>
                         <Col>
                              <h1 className='display-1'>EXPO<span className='fw-bold'>CAL</span></h1>
                              <p className='fs-3 fw-bold'>Conheça nossa associação e seus trabalhos</p>
                              <Button className='rounded-pill shadow'>
                                   Ver mais
                              </Button>
                         </Col>
                    </Row>
               </Container>
          </>
     )     
}

export default Home