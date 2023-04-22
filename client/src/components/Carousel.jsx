import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import "./carousel.css"

function Main() {
  return (

    <Carousel style={{ "margin-left":"10px"}} className="carousel-inner">
      <Carousel.Item>
        <img
          
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1303567646/fr/photo/syst%C3%A8mes-num%C3%A9riques-de-s%C3%A9curit%C3%A9-des-arri%C3%A8re-plan-et-protection-des-donn%C3%A9es.jpg?b=1&s=170667a&w=0&k=20&c=6U-S227IIeTugEhynGhutbfg-KiD-peOzvXzHadJDbY="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Welcome to HackTricks Website</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1614064548237-096f735f344f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Scan IP Address</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://media.istockphoto.com/id/153806168/photo/market-analyze-on-lcd-screen.jpg?s=612x612&w=0&k=20&c=Fz3sR9ifPgCccGm4tQvpoazFkpDMjH0qPnW0ZiS4B7k="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Latest CYbersecurity News
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;