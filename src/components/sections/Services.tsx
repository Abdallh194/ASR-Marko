import { Col, Container, Row } from "react-bootstrap";
import { services } from "../../constants/constants";

const Services = () => {
  return (
    <div className="Services">
      <div className="overlay"> </div>
      <Container>
        <Row>
          <Col md={12} lg={6} className="">
            <div className="header">Our Services at Asr Marko</div>
            <div className="desc">
              At Asr Marko, we provide a fast, secure, and convenient online
              shopping experience. We offer a wide range of carefully selected
              products to meet your daily needs — all at competitive prices with
              exceptional customer service.
            </div>
            <img
              src="/services.png"
              alt=" serives asr marko"
              className="img-fluid"
            />
          </Col>
          <Col md={12} lg={6} className="services-container">
            <Row>
              {services.map((e, idx) => (
                <Col sm={12} md={6} className="services-card" key={idx}>
                  <div className="icon">{e.icon}</div>
                  <div className="card-title">{e.title}</div>
                  <div className="card-desc">{e.description}</div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
