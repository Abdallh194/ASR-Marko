import { Container } from "react-bootstrap";
import TopNav from "./TopNav";
import BtmNav from "./BtmNav";

function Header() {
  return (
    <Container>
      <TopNav />
      <BtmNav />
    </Container>
  );
}

export default Header;
