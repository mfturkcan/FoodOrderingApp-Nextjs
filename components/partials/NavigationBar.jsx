import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = props => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{color: "white"}}>Home</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link href="#" style={{color: "white"}}>Login</Nav.Link>
                    <Nav.Link href="#" style={{color: "white"}}>Register</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;