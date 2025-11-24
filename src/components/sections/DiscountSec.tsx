import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DiscountSec = () => {
  return (
    <div className="DiscountSec">
      <Container>
        <Row>
          <Col md={12} lg={6} className="discount-card red-card">
            <div className="content">
              <div className="discount">Upto 25% Off</div>
              <div className="title">Luxa Dark Chocolate</div>
              <div className="info">
                Very tasty & creamy vanilla flavour creamy muffins.
              </div>
              <Link to="/shop" className="shop-btn">
                shop now
              </Link>
            </div>
            <img
              src="/ad-image-3.png"
              alt="ad-image Luxa Dark Chocolate"
              className="img-fluid"
            />
          </Col>
          <Col md={12} lg={6} className="discount-card blue-card">
            <div className="content">
              <div className="discount">Upto 25% Off</div>
              <div className="title">Creamy Muffins</div>
              <div className="info">
                Very tasty & creamy vanilla flavour creamy muffins.
              </div>
              <Link to="/shop" className="shop-btn">
                shop now
              </Link>
            </div>
            <img
              src="/ad-image-4.png"
              alt="ad-image Luxa Dark Chocolate"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiscountSec;
