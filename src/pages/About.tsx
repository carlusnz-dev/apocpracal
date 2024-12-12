import { Row, Col, Container } from "react-bootstrap";
import GalleryPhotos from "../components/GalleryPhotos";
import "../styles/About.css";

function About() {
     return (
          <>
               <Container style={{
                    marginTop: "10rem",
                    height: "100vh",
                    padding: "2rem 1.2em"
               }}>
                    <Row>
                         <Col className="d-flex flex-column">
                              <h1 className="display-1 fw-bolder text-center text-primary">Sobre nós</h1>
                              <p className="lead text-center text-uppercase" style={{ letterSpacing: "6px" }}>Saiba como trabalhamos, como crescemos e onde queremos chegar</p>
                              <hr />
                              <img src="/fotos/foto_1.jpg" alt="Sobre nós" className="img-fluid rounded-3 d-none d-md-block" />
                              <img src="/fotos/foto_1.jpg" alt="Sobre nós" className="img-fluid rounded-3 d-block d-md-none" style={{
                                   objectFit: "cover",
                                   height: "300px"
                              }} />
                         </Col>
                    </Row>
               </Container>
               <Container className="bg-light py-3 px-5 my-5 rounded-3 shadow">
                    <Row className="mt-0 mt-md-3">
                         <Col className="align-self-center" sm={12} md="auto">
                              <h2 className="display-4 fw-bold">Nossa história</h2>
                              <p className="lead">Fundada em 10 de abril de 2012, a APOCPRACAL (Associação de Promoção e Organização Comunitária de Campo Alegre de Lourdes) surgiu com o objetivo de transformar a realidade de Campo Alegre de Lourdes, Bahia. A cidade, com mais de 50 anos de emancipação política na época, enfrentava a dura realidade de não possuir água potável para a sua população.</p>
                         </Col>
                         <Col>
                              <img src="/fotos/foto_23.jpg" alt="Nossa história" className="img-fluid rounded-3" style={{
                                   minHeight: "400px",
                                   objectFit: "cover"
                              }} />
                         </Col>
                         <Col sm={12} className="mt-5">
                              <p className="lead">A luta foi árdua, mas com muita perseverança e determinação, a APOCPRACAL conseguiu sensibilizar o governo do estado da Bahia e o governo federal, e em 2017 a adutora do Rio São Francisco foi inaugurada, levando água potável para toda a população de Campo Alegre de Lourdes.</p>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col sm={12} md="auto" className="mb-3 mb-md-0">
                              <img height="300" src="/fotos/foto_7.jpg" alt="Missão" className="img-fluid rounded-3" />
                         </Col>
                         <Col className="align-self-center">
                              <h2 className="display-4 fw-bold">Missão</h2>
                              <p className="lead">Promover o desenvolvimento humano, social e econômico, além de contribuir para a melhoria da qualidade de vida da população de Campo Alegre de Lourdes, por meio de projetos e ações concretas.</p>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col className="align-self-center">
                              <h2 className="display-4 fw-bold">Visão</h2>
                              <p className="lead">Ser referência em organização comunitária, atuando de forma sustentável para transformar a realidade do município e contribuir para o bem-estar de todas as comunidades atendidas.</p>
                         </Col>
                         <Col sm={12} md="auto">
                              <img height="300" src="/fotos/foto_40.jpg" alt="Visão" className="img-fluid rounded-3" />
                         </Col>
                    </Row>
                    {/* Galeria de fotos */}
                    <Row className="mt-5">
                         <Col>
                              <h2 className="display-4 fw-bold">Galeria de fotos</h2>
                              <p className="lead">Confira alguns dos momentos mais marcantes de nossa trajetória.</p>
                         </Col>
                         <Col sm={12}>
                              <GalleryPhotos photos={Array.from({ length: 14 }, (_, i) => `/fotos/foto_${i + 1}.jpg`)} />
                         </Col>
                    </Row>
               </Container>
          </>
     );
}

export default About;
