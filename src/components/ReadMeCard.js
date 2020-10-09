import React from "react";
import { Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch";
import Constants from "./../Constants";

const screenshotPath = (name) => `${Constants.README_DIR}/${name}/${name}.png`;

const styles = {
  cardImgContainer: {
    height: "300px",
  },
  cardImg: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
};

function ReadMeCard({ readme }) {
  return (
    <Col xs={12} md={4} className="mb-4">
      <Card className="shadow">
        <div style={styles.cardImgContainer}>
          <Card.Img
            variant="top"
            src={screenshotPath(readme.dir)}
            style={styles.cardImg}
          />
        </div>
        <Card.Body style={{ borderTop: "1px solid gray" }}>
          <Card.Title>{readme.author}</Card.Title>
          <Card.Text>{readme.description}</Card.Text>
          <a
            href={`https://github.com/${readme.github_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-secondary fa-pull-right"
          >
            <FontAwesomeIcon icon={faCodeBranch} className="mr-1" /> GitHub
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ReadMeCard;
