import { Col, Container, Row } from "react-bootstrap";
import { categories } from "../constants/constants";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Container>
      <Row className="Categories">
        {categories.map((cat, idx) => (
          <Col
            as={Link}
            to={`/categories/${cat.prefix}`}
            className="categories-card"
            lg={2}
            key={idx}
          >
            <div className="icon">{cat.icon}</div>
            <div className="title">{cat.title}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
