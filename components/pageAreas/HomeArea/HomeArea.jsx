import { Col, Container, Row } from "react-bootstrap";

//import scss
import styles from "./HomeArea.module.scss";

function HomeArea() {
  return (
    <div className={styles.homeArea}>
      <Container className="mt-5">
        <Row>
          <Col>
            <div>I am a ninja.</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeArea;
