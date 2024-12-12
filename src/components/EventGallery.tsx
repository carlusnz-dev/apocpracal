import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'primereact/carousel';

const isMobile = window.matchMedia("(max-width: 672px)").matches;

const events = [
     {
          id: 1,
          title: "Reunião Geral",
          date: "10 de Dezembro, 2024",
          description: "Discussão sobre os novos projetos da associação.",
          image: "/fotos/WhatsApp Image 2024-12-11 at 14.50.42.jpeg",
     },
     {
          id: 2,
          title: "Festa de Natal",
          date: "25 de Dezembro, 2024",
          description: "Venha comemorar o Natal com a gente.",
          image: "/fotos/WhatsApp Image 2024-12-11 at 14.50.48 (3).jpeg",
     },
     {
          id: 3,
          title: "Reunião Geral",
          date: "10 de Dezembro, 2024",
          description: "Discussão sobre os novos projetos da associação.",
          image: "/fotos/WhatsApp Image 2024-12-11 at 14.50.43.jpeg",
     },
     {
          id: 4,
          title: "Festa de Natal",
          date: "25 de Dezembro, 2024",
          description: "Venha comemorar o Natal com a gente.",
          image: "/fotos/WhatsApp Image 2024-12-11 at 14.50.49.jpeg",
     }
];

interface Event {
     id: number;
     title: string;
     date: string;
     description: string;
     image: string;
}

const itemTemplate = (event: Event) => (
     isMobile ? (
          <Card key={event.id} className="p-3 mx-1" style={{
               minHeight: "400px",
          }}>
               <Card.Img variant="top" src={event.image} alt={event.title} style={{
                    height: "200px",
                    objectFit: "cover",
               }} />
               <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.date}</Card.Text>
                    <Card.Text>{event.description}</Card.Text>
                    <Link to={`/event/${event.id}`} className="btn btn-primary rounded-pill shadow">
                         Ver mais
                    </Link>
               </Card.Body>
          </Card>
     ) : (
          <Card key={event.id} className="p-3 mx-1" style={{
               minHeight: "450px",
          }}>
               <Card.Img variant="top" src={event.image} alt={event.title} style={{
                    height: "200px",
                    objectFit: "cover",
               }} />
               <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.date}</Card.Text>
                    <Card.Text>{event.description}</Card.Text>
               </Card.Body>
               <Card.Footer>
                    <Link to={`/event/${event.id}`} className="btn btn-primary rounded-pill shadow">
                         Ver mais
                    </Link>
               </Card.Footer>
          </Card>
     )
)

const EventGallery = () => {
     return (
          <Container className="py-5">
               <h3 className="text-center">Eventos</h3>
               <Carousel
                    value={events}
                    numVisible={3}
                    numScroll={1}
                    responsiveOptions={[
                         { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
                         { breakpoint: "768px", numVisible: 1, numScroll: 1 },
                    ]}
                    itemTemplate={itemTemplate}
               />
          </Container>
     );
};

export default EventGallery;
