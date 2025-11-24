import { Link } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <img
        src="/notfound.png"
        className="img-fluid"
        style={{ display: "block", margin: "40px auto" }}
      />
      <h4 style={{ color: "red", textAlign: "center" }}> Page not founds</h4>
      <h5 style={{ color: "red", textAlign: "center" }}>
        It appears you've reached an invalid or redirected link
        <Link to="/" replace>
          Home
        </Link>
      </h5>
      <Footer />
    </>
  );
};

export default NotFound;
