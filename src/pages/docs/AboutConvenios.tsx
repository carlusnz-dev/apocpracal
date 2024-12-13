import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/About.css";

type ConveniosType = {
     [key: number]: {
          title: string;
          description: string[];
     };
};

const convenios: ConveniosType = {
     2020: {
          title: "Convênios Firmados de 2020",
          description: [
               "Associação Popular Campoalegrense em Prol da Adutora do Rio São Francisco Para Campo Alegre de Lourdes-BA/BRASIL, CNPJ: 16.812.797/0001-61",
               "Emenda n° 30910003 Autoria Deputado Federal Elmar Nascimento",
               "Valor total: R$ 300.000,00",
               "Termo de Fomento n° 901149 Órgão Concedente 22000 Ministério da Agricultura",
               "Data de Assinatura do Termo de Fomento 29/12/2020",
               "Apoio a realização da IV Exposição e Feira de Animais no Município de Campo Alegre de Lourdes-BA (IV EXPOCAL)",
               "Prestação de contas enviada para análise",
               "Data Antecipada para prestação de contas 03/01/22",
               "Data limite para prestação de contas 22/09/22",
               "Foi solicitado junto ao Ministério da Agricultura a prorrogação de prazo para prestação de contas, pois a entidade está aguardando o resgate do valor aplicado pela agência bancária",
               "A equipe de trabalho, bem como os integrantes da entidade trabalham de forma voluntária, desta forma nenhum membro da entidade e da equipe de trabalho recebe remuneração."
          ]
     },
     2021: {
          title: "Convênios Firmados de 2021",
          description: [
               "Associação Popular Campoalegrense Em Prol da Adutora do Rio São Francisco Para Campo Alegre de Lourdes-BA/BRASIL CNPJ: 16.812.797/0001-61",
               "Emenda n° 30910006 Autoria Deputado Federal Elmar Nascimento",
               "Valor total: R$ 300.000,00",
               "Termo de Fomento n° 909774 Órgão concedente 22000 Ministério da Agricultura",
               "Data de Assinatura do Termo de Fomento 24/11/21",
               "Apoio a realização da V Exposição e Feira de Animais no Município de Campo Alegre de Lourdes-BA (V EXPOCAL)",
               "Aguardando Prestação de contas",
               "Data limite para prestação de contas 21/03/24",
               "Foi solicitado junto ao Ministério da Agricultura a prorrogação de prazo para prestação de contas, pois a entidade está aguardando o resgate do valor aplicado pela agência bancária",
               "A equipe de trabalho, bem como os integrantes da entidade trabalham de forma voluntária, desta forma nenhum membro da entidade e da equipe de trabalho recebe remuneração."
          ]
     },
     2022: {
          title: "Convênios Firmados de 2022",
          description: [
               "Associação Popular Campoalegrense em Prol da Adutora do Rio São Francisco Para Campo Alegre de Lourdes-BA/BRASIL CNPJ: 16.812.797/0001-61",
               "Emenda n° 30910011 Autoria Deputado Federal Elmar Nascimento",
               "Valor total: R$ 400.000,00",
               "Termo de Fomento n° 927305- Órgão concedente 22000 Ministério da Agricultura",
               "Data de Assinatura do Termo de Fomento 26/06/22",
               "Apoio a realização da VI Exposição e Feira de Animais no Município de Campo Alegre de Lourdes-BA (VI EXPOCAL)",
               "Aguardando Prestação de contas 19/09/24",
               "Foi solicitado junto ao ministério prorrogação pois está aguardando o banco fazer o resgate do valor aplicado",
               "A equipe de trabalho, bem como os integrantes da entidade trabalham de forma voluntária, desta forma nenhum membro da entidade e da equipe de trabalho recebe remuneração."
          ]
     },
     2023: {
          title: "Convênios Firmados de 2023",
          description: [
               "Associação Popular Campoalegrense em Prol da Adutora do Rio São Francisco Para Campo Alegre de Lourdes-BA/BRASIL",
               "Emenda n° 30910004 – Autoria do Deputado Federal Elmar Nascimento",
               "Valor total: R$ 400.000,00",
               "Termo de Fomento n° 941365- Órgão concedente 22000 Ministério da Agricultura",
               "Data de Assinatura do Termo de Fomento 26/07/23",
               "Apoio a Realização da VII Exposição e Feira de Animais do Município de Campo Alegre de Lourdes-BA (VII EXPOCAL)",
               "Aguardando Prestação de Contas",
               "Foi solicitado junto ao ministério prorrogação pois está aguardando o banco fazer o resgate do valor aplicado",
               "A equipe de trabalho, bem como os integrantes trabalham de forma voluntária, desta forma nenhum membro da entidade e da equipe de trabalho recebe remuneração."
          ]
     },
     2024: {
          title: "Convênios Firmados de 2024",
          description: [
               "Associação Popular Campoalegrense em Prol da Adutora Do Rio São Francisco Para Campo Alegre de Lourdes-BA/BRASIL CNPJ: 16.812.797/0001-61",
               "Emenda n° 30910009- Autoria Deputado Federal Elmar Nascimento",
               "Valor Total: R$ 400.000,00 Valor liberado de R$ 382.000,00",
               "Termo de Fomento n° 956030 Órgão concedente 22000 Ministério da Agricultura",
               "Data de Assinatura do Termo de Fomento 19/06/24",
               "Apoio a Realização da VIII Exposição e Feira de Animais no Município de Campo Alegre de Lourdes-BA",
               "Prestação de contas em execução",
               "Data para a prestação de contas 20/03/25",
               "A equipe de trabalho, bem como os integrantes da entidade trabalham de forma voluntária, desta forma nenhum membro da entidade e da equipe de trabalho recebe remuneração."
          ]
     }
};

function AboutConvenios({ year }: { year: number }) {
     const { title, description } = convenios[year];
     return (
          <Container className="bg-light py-5 px-5 rounded-3 shadow" id="containerConvenio" style={{ marginTop: "8rem", marginBottom: "8rem" }}>
               <Row>
                    <Col>
                         <h1 className="display-5 fw-bold text-primary mb-4">{title}</h1>
                         {description.map((text, index) => (
                              <p key={index} className="lead">{text}</p>
                         ))}
                         <Button variant="primary" size="lg" onClick={() => window.history.back()}>
                              <i className="bi bi-arrow-left me-2"></i>
                              Voltar
                         </Button>
                         <Button
                              className="ms-0 mt-3 ms-md-3 mt-md-0"
                              variant="primary"
                              size="lg"
                              onClick={() => {
                                   const pdf = `/pdf/termo_de_formento${year}.pdf`;

                                   // Criar um link temporário para o download do PDF
                                   const link = document.createElement("a");
                                   link.href = pdf;
                                   link.download = `termo_de_formento${year}.pdf`; // Nome do arquivo a ser baixado
                                   document.body.appendChild(link);
                                   link.click(); // Simular o clique no link
                                   document.body.removeChild(link); // Remover o link após o clique
                              }}
                         >
                              <i className="bi bi-file-earmark-pdf-fill me-2"></i>
                              Baixar PDF (Termo de Fomento)
                         </Button>
                    </Col>
               </Row>
          </Container>
     );
}

export { AboutConvenios };
