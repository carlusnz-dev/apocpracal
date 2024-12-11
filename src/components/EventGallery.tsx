import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'primereact/carousel';

const events = [
     {
          id: 1,
          title: "Reunião Geral",
          date: "10 de Dezembro, 2024",
          description: "Discussão sobre os novos projetos da associação.",
          image: "https://via.placeholder.com/300",
     },
     {
          id: 2,
          title: "Oficina de Arte",
          date: "5 de Dezembro, 2024",
          description: "Uma oficina criativa para os membros se expressarem.",
          image: "https://via.placeholder.com/300",
     },
     {
          id: 3,
          title: "Evento Social",
          date: "20 de Novembro, 2024",
          description: "Um momento de integração para todos os membros.",
          image: "https://via.placeholder.com/300",
     },
     {
          id: 4,
          title: "Festa de Encerramento",
          date: "31 de Dezembro, 2024",
          description: "Celebração do ano e agradecimento a todos os membros.",
          image: "https://via.placeholder.com/300",
     },
];

interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
}

const itemTemplate = (event: Event) => (
     <Card key={event.id} className="p-3 mx-1">
          <Card.Img variant="top" src={event.image} alt={event.title} />
          <Card.Body>
               <Card.Title>{event.title}</Card.Title>
               <Card.Text>{event.date}</Card.Text>
               <Card.Text>{event.description}</Card.Text>
               <Link to={`/event/${event.id}`} className="btn btn-primary rounded-pill shadow">
                    Ver mais
               </Link>
          </Card.Body>
     </Card>
);

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
