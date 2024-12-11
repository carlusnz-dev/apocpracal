import { Row, Col, Container } from "react-bootstrap"
import Header from "../components/Navbar"

function About() {
     return (
          <>
               <Header />
               <Container>
                    <Row>
                         <Col>
                              <h1>About</h1>
                         </Col>
                    </Row>
               </Container>
          </>
     )     
}

export default About