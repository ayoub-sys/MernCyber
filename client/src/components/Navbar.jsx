import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './SearchBar';


function Naavbar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link  style={{ "margin-right":"20px" }}><Link to="/Home">Home</Link></Nav.Link>
            <Nav.Link href="#link" style={{ "margin-right":"20px" }} ><Link to="/Scan">Scan Website</Link></Nav.Link>
            <Nav.Link href="#link1" style={{ "margin-right":"400px" }}><Link to="/LatestNews">Latest News</Link></Nav.Link>
            <SearchBar/>
            <br/>
           

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br/> 
    
    
    
    </>   
    
    

  );
}

export default Naavbar;