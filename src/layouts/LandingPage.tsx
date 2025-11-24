import SectionHr from "../components/common/SectionHr";
import ASRApp from "../components/sections/ASRApp";
import DiscountSec from "../components/sections/DiscountSec";
import Homepage from "../components/sections/Homepage";
import Services from "../components/sections/Services";
import Categories from "../pages/Categories";

const LandingPage = () => {
  return (
    <>
      <Homepage />
      <SectionHr title="Categories" desc="Browse By Categories" />
      <Categories />
      <DiscountSec />
      <SectionHr
        title="Services"
        desc="fast, secure, and convenient shopping"
      />
      <Services />
      <SectionHr
        title="ASR Marko App"
        desc="Upgrade Your Shopping Experience"
      />
      <ASRApp />{" "}
    </>
  );
};

export default LandingPage;
