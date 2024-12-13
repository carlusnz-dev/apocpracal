import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GalleryPhotos from "../components/GalleryPhotos";
import "../styles/About.css";

function About() {
     const navigate = useNavigate();

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
                              <img src="/fotos/foto_1.jpg" alt="Sobre nós" className="img-fluid rounded-3 d-none d-md-block" style={{
                                   objectFit: "cover",
                                   height: "500px"
                              }} />
                              <img src="/fotos/foto_1.jpg" alt="Sobre nós" className="img-fluid rounded-3 d-block d-md-none" style={{
                                   objectFit: "cover",
                                   height: "300px"
                              }} />
                         </Col>
                    </Row>
               </Container>
               <Container className="bg-light py-3 px-5 my-5 rounded-3 shadow">
                    <Row className="mt-0 mt-md-3">
                         <Col>
                              <h2 className="display-4 fw-bold">Nossa História</h2>
                              <p className="lead">A <strong>APOCPRACAL</strong> foi fundada em 10/04/2012 com o objetivo principal de lutar pela construção da adutora do Rio São Francisco para Campo Alegre de Lourdes, Bahia. Em 2012, Campo Alegre de Lourdes era uma cidade com mais de 50 anos de emancipação política e não possuía água potável para a sua população.</p>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col>
                              <h2 className="display-4 fw-bold">Nossas Atividades</h2>
                              <ul className="lead">
                                   <li>Representar os moradores da cidade em suas reivindicações na construção da Adutora do Rio São Francisco.</li>
                                   <li>Elaborar e executar projetos ambientais e sociais.</li>
                                   <li>Celebrar convênios e parcerias com diversas entidades públicas e privadas.</li>
                                   <li>Promover eventos culturais, econômicos e sociais para o desenvolvimento do município.</li>
                                   <li>Colaborar com órgãos públicos para resolver problemas comunitários.</li>
                              </ul>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col>
                              <h2 className="display-4 fw-bold">Principais Parcerias</h2>
                              <ul className="lead">
                                   <li>CODEVASF - Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba</li>
                                   <li>MAPA - Ministério da Agricultura, Pecuária e Abastecimento</li>
                                   <li>CERB - Companhia de Engenharia Hídrica e de Saneamento da Bahia</li>
                                   <li>CAR - Companhia de Desenvolvimento e Ação Regional</li>
                                   <li>CONAB - Companhia Nacional de Abastecimento</li>
                                   <li>Prefeitura Municipal de Campo Alegre de Lourdes</li>
                              </ul>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col>
                              <h2 className="display-4 fw-bold">Conquistas</h2>
                              <ul className="lead">
                                   <li>Adutora do Rio São Francisco, beneficiando moradores da sede e de quase 60 comunidades do interior.</li>
                                   <li>Aquisição de mais de 15 poços artesianos (parceria com CODEVASF/CERB).</li>
                                   <li>Aquisição de 3 tratores agrícolas (2 pela CODEVASF e 1 pela CAR).</li>
                                   <li>Construção de 5 mini barragens (CODEVASF).</li>
                                   <li>Aquisição de 30 barracas para feirantes (parceria CAR).</li>
                                   <li>Realização de oito exposições e feiras de animais (parceria MAPA).</li>
                                   <li>Distribuição de mais de 10 mil sacas de milho subsidiadas pelo Governo Federal em 2013, durante um longo período de estiagem (parceria CONAB).</li>
                              </ul>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col>
                              <h2 className="display-4 fw-bold">Convênios Firmados</h2>
                              <p className="lead">Explore os detalhes de cada convênio firmado pela APOCPRACAL:</p>
                              <div className="d-flex flex-column gap-3">
                                   <Button variant="primary" size="lg" onClick={() => navigate("/docs/convenio_2020")}>Convênio 2020</Button>
                                   <Button variant="primary" size="lg" onClick={() => navigate("/docs/convenio_2021")}>Convênio 2021</Button>
                                   <Button variant="primary" size="lg" onClick={() => navigate("/docs/convenio_2022")}>Convênio 2022</Button>
                                   <Button variant="primary" size="lg" onClick={() => navigate("/docs/convenio_2023")}>Convênio 2023</Button>
                                   <Button variant="primary" size="lg" onClick={() => navigate("/docs/convenio_2024")}>Convênio 2024</Button>
                              </div>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         <Col>
                              <h2 className="display-4 fw-bold">Galeria de Fotos</h2>
                              <p className="lead">Confira os momentos mais marcantes da APOCPRACAL.</p>
                         </Col>
                         <Col sm={12}>
                              <GalleryPhotos photos={Array.from({ length: 44 }, (_, i) => `/fotos/foto_${i + 1}.jpg`)} />
                         </Col>
                    </Row>
               </Container>
          </>
     );
}

export default About;
