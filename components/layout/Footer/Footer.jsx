import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";
function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer>
      <div className={styles.footerArea}>
        <Container>
          <Row>
            <Col>This is footer {getCurrentYear()}</Col>
          </Row>
        </Container>
      </div>
    </footer>

  );
}

export default Footer;
