import Icons from "../Icons";
import MainHeading from "../MainSection/Heading";
import MainData from "../MainSection/MainData";
import MainPoints from "../MainSection/MainPoints";
import Slider2 from "../Slider/Slider2";
import Navbar from "../Navbar";
import Footer from "../Footer";
export default function MainRenderer() {
  return (
    <>
      <div className="main">
        <div className="data">
          <Navbar />
          <Slider2 />
          <MainHeading />
          <Icons />
          <MainPoints />
          <MainData />
        </div>
      </div>
      <Footer />
    </>
  );
}
