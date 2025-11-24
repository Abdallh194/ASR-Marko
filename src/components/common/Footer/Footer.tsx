import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

import { footerLinks } from "../../../constants/constants";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer
        style={{ background: "#3b3b3b", color: "#fff", paddingTop: "40px" }}
      >
        <Container>
          {/* Top info boxes */}
          <Row className="text-center mb-5">
            <Col md={3} className="p-3">
              <div
                style={{
                  background: "#4a4a4a",
                  padding: "25px",
                  borderRadius: "10px",
                }}
              >
                <FaMapMarkerAlt size={40} color="#ff6a00" />
                <h5 className="mt-3">Address</h5>
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                  Royal Residence 1 - Dubai Sports City - Dubai
                </p>
              </div>
            </Col>

            <Col md={3} className="p-3">
              <div
                style={{
                  background: "#4a4a4a",
                  padding: "25px",
                  borderRadius: "10px",
                }}
              >
                <FaEnvelope size={40} color="#ff6a00" />
                <h5 className="mt-3">Mail Us</h5>
                <a
                  href="mailto:abdallhsabry194@gmail.com"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  className="nav-link fw-bold"
                >
                  info@asrmarko.com
                </a>
              </div>
            </Col>

            <Col md={3} className="p-3">
              <div
                style={{
                  background: "#4a4a4a",
                  padding: "25px",
                  borderRadius: "10px",
                }}
              >
                <FaPhone size={40} color="#ff6a00" />
                <h5 className="mt-3">Telephone</h5>
                <a
                  href="tel:+971562014403"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  className="nav-link fw-bold"
                >
                  (+971)562014403
                </a>
              </div>
            </Col>

            <Col md={3} className="p-3">
              <div
                style={{
                  background: "#4a4a4a",
                  padding: "25px",
                  borderRadius: "10px",
                }}
              >
                <FaGlobe size={40} color="#ff6a00" />
                <h5 className="mt-3">Website</h5>
                <a
                  href="https://www.seometta.com/"
                  target="_blank"
                  style={{ fontSize: "14px" }}
                  className="nav-link fw-bold"
                >
                  seometta.com
                </a>
              </div>
            </Col>
          </Row>

          {/* Bottom Columns */}
          <Row className="py-5">
            {/* Newsletter */}
            <Col md={3} className="mb-4">
              <h4>Newsletter</h4>
              <p style={{ color: "#d0d0d0" }}>
                Stay updated with our latest offers and product news. Subscribe
                now to never miss an update.
              </p>

              <div className="d-flex bg-white rounded overflow-hidden">
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  className="border-0"
                />
                <Button style={{ background: "#ff6a00", border: "none" }}>
                  SignUp
                </Button>
              </div>
            </Col>

            {/* Customer Service */}
            {footerLinks.map((section, index) => (
              <Col md={3} lg={3} key={index} className="mb-4">
                <h4>{section.title}</h4>
                <ul className="list-unstyled mt-3">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a href={item.link} className="nav-link">
                        <IoIosArrowForward /> {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </footer>
      <Container>
        <div className="copy">
          <div className="name">ASR Marko ,All right reserved.</div>
          <div className="pub-name">
            Designed By{" "}
            <a href="https://www.seometta.com/" target="_blank">
              seometta
            </a>{" "}
            Distributed By{" "}
            <a href="https://abdallh.vercel.app/" target="_blank">
              Abdallh
            </a>{" "}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
