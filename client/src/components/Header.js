import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../logo.svg";
import {Link} from "react-router-dom";

function Header(props) {
   return (
       <>
          <Navbar fixed={"top"} expand={"lg"} bg={"dark"} variant={"dark"} collapseOnSelect>
             <Container>
                <Link to={"/"} className={"navbar-brand"}>
                   <img
                       alt={"Logo"}
                       src={logo}
                       width={"50"}
                       height={"30"}
                       className={"d-inline-block align-top"}
                   />
                   Todo List App
                </Link>
                <Navbar.Toggle aria-controls={"navbar_items"}/>
                <Navbar.Collapse id={"navbar_items"}>
                   <Nav >
                      <Link to={"/todos"} className={"nav-link"}>Todos</Link>
                      <Link to={"/addTodo"} className={"nav-link"}>Create Todo</Link>
                   </Nav>
                </Navbar.Collapse>
             </Container>
          </Navbar>
          <div style={{paddingBottom: "100px"}}></div>
       </>
   );
}

export default Header;