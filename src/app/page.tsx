import Footer from "./components/Footer/Footer";
import Header from "./components/Header/";
import HomeSlider from "./components/HomeSlider/";
import Hero from "./components/Hero/";
import TimeLineCard from "./components/TimeLine/TimeLineCard";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <Hero />
      <TimeLineCard/>

    </>
  );
}
