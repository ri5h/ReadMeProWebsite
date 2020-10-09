import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AppHeader() {
  return (
    <Jumbotron fluid>
      <Container>
        <div className="text-center">
          <h1>Readme pros</h1>
          <p>
            A collection of awesome readme files created for github profiles by
            creative developers sourced from all over the internet.
          </p>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6">
              <a
                className="mr-3 btn btn-primary"
                href="https://github.com/rishirajpurohit/ReadMePros#how-to-contribute"
                target="_blank"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                Add Your Own
              </a>
              <a
                className="mr-3 btn btn-secondary"
                href="https://github.com/rishirajpurohit/ReadMeProsWebsite/"
                target="_blank"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default AppHeader;
