import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary BtmNav">
      <div className="d-block-mobile">
        <SearchForm />
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Fashion</Nav.Link>
          <Nav.Link href="#pricing">Electronics</Nav.Link>
          <Nav.Link href="#pricing">Home & Lifestyle</Nav.Link>
          <Nav.Link href="#pricing">Medicine</Nav.Link>
          <Nav.Link href="#pricing">Groceries & Pets</Nav.Link>
          <Nav.Link href="#pricing">Cars</Nav.Link>
          <Nav.Link href="#pricing">Sports & Outdoor</Nav.Link>
          <Nav.Link href="#pricing">Baby's & Toys</Nav.Link>
        </Nav>
        <Nav className="">
          <Link className="nav-link" to="/about">
            About us
          </Link>
          <Link className="nav-link" to="/shop">
            Shopping
          </Link>
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
