import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const themeColors = ["#f92a82", "#ed7b84", "#f5cdbd", "#d6d5d3", "#7eb77f"]

const Navigation = (props) => (
  <>
    <Navbar style={{ height: "4,5rem", backgroundColor: "", borderBottom: "2px dashed whitesmoke", borderTop: "2px dashed whitesmoke" }} expand="lg">
      <Navbar.Brand href="#home" style={{color: "white", fontSize: "2rem"}}>[ Λ-zine]</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <a href="#home" style={{padding: ".5rem 4rem", fontSize: "0.8rem", color: "white"}}>Home</a>
      <a href="#links" style={{padding: ".5rem 4rem", fontSize: "0.8rem", color: "white"}}>Links</a>
      <a href="#home" style={{padding: ".5rem 4rem", fontSize: "0.8rem", color: "white"}}>Home</a>
      <a href="#links" style={{padding: ".5rem 4rem", fontSize: "0.8rem", color: "white"}}>Links</a>
    </div>
  </>
)

export default Navigation