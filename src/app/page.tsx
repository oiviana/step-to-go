import Footer from "../components/Footer";
import Header from "../components/Header/";
import HomeSlider from "../components/HomeSlider/";
import Hero from "../components/Hero/";
import TimeLine from "../components/TimeLine/";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <Hero />
      <TimeLine/>
      <MyProjects/>
      <Contact/>
      <Footer/>

    </>
  );
}
