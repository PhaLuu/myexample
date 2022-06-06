import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header>
      <div className={styles.headerArea}>
        <Container>
          <Row>
            <Col>This is header</Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
