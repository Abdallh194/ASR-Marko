import { Col, Nav, Navbar } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const TopNav = () => {
  return (
    <Navbar className="TopNav">
      <Col as={Link} to="/" md={6} lg={3}>
        <img src="/logo.png" alt="asr marko logo" className="mg-fluid logo" />
      </Col>
      <SearchForm />
      <Col as={Nav} md={6} lg={3}>
        <Nav.Link
          href="tel:+971562014403"
          target="_blank"
          className="d-none-mobile"
        >
          <div>For Support</div>
          <h5 className="fw-bold">+971562014403</h5>
        </Nav.Link>
        <Link to="/cart" className="icon center-ver-ali">
          <MdOutlineShoppingCart />
        </Link>
        <Link to="/wishlist" className="icon center-ver-ali">
          <FaRegHeart />
        </Link>
        <Link to="/profile" className="icon center-ver-ali">
          <IoPersonOutline />
        </Link>
      </Col>
    </Navbar>
  );
};

export default TopNav;
