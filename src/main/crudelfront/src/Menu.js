import { Navbar,Nav,Container } from "react-bootstrap"
import { onSubmitLogout } from "./Boad"

export const Menu=()=>{
    return(
        <>
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/#/view" className="text-primary">My Stack</Navbar.Brand>
                <Navbar.Toggle aria-controls="my" />
                <Navbar.Collapse id="my">
                    <Nav className="ms-auto">
                        <a className="btn btn-outline-info rounded-5 ms-2" href="/#/view">Home</a>
                        <a className="btn btn-outline-info rounded-5 ms-2" href="/#/fresh">New</a> 
                        <a className="btn btn-outline-info rounded-5 ms-2" href="/#/remove">Remove</a> 
                        <a className="btn btn-outline-info rounded-5 ms-2" href="/#/alert">Alter</a>                        
                        <a className="btn btn-outline-info rounded-5 ms-2" href="/#/filter">ShortList</a>   
                        <button className="btn btn-outline-light rounded-5 ms-2" onClick={async()=>{
                                await onSubmitLogout()
                                window.location.assign("/")
                            }}>
                                <i class="bi bi-door-closed-fill"></i>
                            </button>                   

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
    )
}