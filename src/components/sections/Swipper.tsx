import { Swiper, SwiperSlide } from "swiper/react";

// Swiper 12 unified css
import "swiper/swiper-bundle.css";

// modules
import { Pagination } from "swiper/modules";
import { Col, Row } from "react-bootstrap";
import { featuredItems } from "../../constants/constants";
import { Link } from "react-router-dom";

const Swipper = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
      speed={1000}
    >
      <Row>
        {featuredItems.map((e, idx) => (
          <SwiperSlide
            className="d-flex align-items-center slider-card"
            key={idx}
          >
            <Col md={12} lg={7} className="">
              <p className="swiper-discount">20% off</p>
              <div className="swiper-header">{e.title}</div>
              <div className="swiper-desc">{e.description}</div>
              <Link to="/shop" className="Shop-btn">
                shop now
              </Link>
            </Col>
            <Col md={12} lg={5}>
              <img src={e.image} alt={e.title} className="img-fluid" />
            </Col>
          </SwiperSlide>
        ))}
      </Row>
    </Swiper>
  );
};

export default Swipper;
