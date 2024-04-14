import BackToTop from "../components/BackToTop/BackToTop";
import BodyHome from "../components/BodyHome/BodyHome";
import FooterHome from "../components/FooterHome/FooterHome";
import HeaderHome from "../components/HeaderHome/HeaderHome";
import Banner from "../components/banner/Banner";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <BackToTop />
      <Banner />
      <BodyHome />
      <FooterHome />
    </>
  );
};

export default Home;
