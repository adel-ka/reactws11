import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Entete = () => {
  return (
    <div id='navbar'><Navbar expand="lg" className="bg-body-tertiary">
    <Container className='conatiner'>
      <Navbar.Brand href="#home">
        <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="" style={{width:"268px"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Nav >
          <Nav.Link href="#home">About us</Nav.Link>
          <Nav.Link href="#link">Career</Nav.Link>
          <NavDropdown title="Departments" id="basic-nav-dropdown" style={{marginRight:"50px"}}>
            <NavDropdown.Item href="#action/3.1">Marketing & PR</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Customer Success & Sales
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">IT, Product, Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Finance & Administration</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HR & more</NavDropdown.Item>
            
          </NavDropdown>
        </Nav>
      
    </Container>
  </Navbar></div>
  )
}

export default Entete