import Footer from "./components/Footer/Footer";
import Header from "./components/Header/";
import HomeSlider from "./components/HomeSlider/";
import Hero from "./components/Hero/";
import TimeLine from "./components/TimeLine/";
import MyProjects from "./components/MyProjects";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <Hero />
      <TimeLine/>
      <MyProjects/>

    </>
  );
}
