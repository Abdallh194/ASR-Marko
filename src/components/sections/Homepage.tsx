import { Col, Container, Row } from "react-bootstrap";
import Swipper from "./Swipper";
import { extraItems } from "../../constants/constants";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="overlay">
        <Container>
          <Row>
            <Col md={12} lg={7} className="bg-color">
              <Swipper />
            </Col>
            <Col md={12} lg={5} className="sm-color">
              {extraItems.map((extraItems, idx) => (
                <Row key={idx} className={extraItems.className}>
                  <Col md={12} lg={6}>
                    <div className="extraItems-discount">20% off</div>
                    <div className="sale">SALE</div>
                    <div className="extraItems-head">{extraItems.title}</div>
                    <Link to="/shop" className="Shop-btn">
                      shop now
                    </Link>
                  </Col>
                  <Col md={12} lg={6}>
                    <img
                      src={extraItems.image}
                      alt={extraItems.title}
                      className="img-fluid"
                    />
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
