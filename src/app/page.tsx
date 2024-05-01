import Footer from "../components/Footer";
import Header from "../components/Header/";
import HomeSlider from "../components/HomeSlider/";
import Hero from "../components/Hero/";
import TimeLine from "../components/TimeLine/";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";
import { fetchProjects } from "@/contentful/myProjects";
export default async function Home() {
  const getProjects = await fetchProjects();
  return (
    <>
      <Header />
      <HomeSlider />
      <Hero />
      <TimeLine />
      <MyProjects myProjects={getProjects} />
      <Contact />
      <Footer />
    </>
  );
}
