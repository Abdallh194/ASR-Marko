import { Col, Container, Row } from "react-bootstrap";

const ASRApp = () => {
  return (
    <div className="ASRApp">
      <Container>
        <Row>
          <Col md={12} lg={4} className="img-card">
            <img src="/phone.png" className="img-fluid" />
          </Col>
          <Col md={12} lg={8} className="text-card">
            <div className="header">
              Download the Asr Marko App — Shop Faster, Smarter, and Easier
            </div>
            <div className="desc">
              Discover a new level of comfort and efficiency with the Asr Marko
              mobile app — your ultimate gateway to a seamless shopping
              experience. Access thousands of curated products instantly, enjoy
              exclusive discounts available only on the app, and stay updated
              with real-time order tracking from the moment you buy until your
              order arrives at your doorstep.
            </div>
            <div className="btns">
              <img src="/app-store.jpg" className="img-fluid" />
              <img src="/google-play.jpg" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ASRApp;
