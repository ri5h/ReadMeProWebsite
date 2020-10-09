import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Constant from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <FontAwesomeIcon icon={faAlignCenter} className="mr-3" />
        {Constant.APP_NAME}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <div className="col-md-12 col-sm-4">
            <a
              className="mr-3 btn btn-info"
              href="https://github.com/rishirajpurohit/ReadMePros#how-to-contribute"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Projects
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
