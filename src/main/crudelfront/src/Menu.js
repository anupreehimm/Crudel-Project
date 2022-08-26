import { Navbar,Nav,Container } from "react-bootstrap"

export const Menu=()=>{
    return(
        <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/view">My Stack</Navbar.Brand>
                <Navbar.Toggle aria-controls="my" />
                <Navbar.Collapse id="my">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#/view">Home</Nav.Link>
                        <Nav.Link href="/#/fresh">New</Nav.Link>
                        <Nav.Link href="/#/open">Read</Nav.Link>
                        <Nav.Link href="/#/modify">Update</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
    )
}