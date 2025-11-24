import { Container } from "react-bootstrap";

const SectionHr = ({ title, desc }: SerionHrType) => {
  return (
    <Container className="SectionHr">
      <div className="title">{title}</div>
      <div className="title-desc">{desc}</div>
    </Container>
  );
};

export default SectionHr;
