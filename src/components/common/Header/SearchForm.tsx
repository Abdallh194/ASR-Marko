import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Form, FloatingLabel, Col } from "react-bootstrap";

export default function SearchBox() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const [emptyfield, setemptyfeild] = useState(false);
  const handleSearch = () => {
    const value = inputRef.current?.value || "";
    if (!value.trim()) {
      setemptyfeild(true);
    } else {
      navigate(`/search?query=${encodeURIComponent(value)}`);
    }
  };

  return (
    <>
      <Col as={Form} className="me-auto search-form" md={12} lg={6}>
        <FloatingLabel
          controlId="floatingInput"
          label="What are you looking for ?"
        >
          <Form.Control
            className={emptyfield ? "error" : "true"}
            type="text"
            placeholder="What are you looking for ?"
            ref={inputRef}
          />
        </FloatingLabel>

        <div className="search-btn" onClick={handleSearch}>
          <FaSearch />
        </div>
      </Col>
    </>
  );
}
