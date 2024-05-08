import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeSlider from "../../components/HomeSlider";
import Hero from "../../components/Hero";
import TimeLine from "../../components/TimeLine";
import MyProjects from "../../components/MyProjects";
import Contact from "../../components/Contact";
import { fetchProjects } from "@/contentful/myProjects";
import { useLocale } from "next-intl";

export default async function Home() {
  const locale = useLocale();
  const getProjects = await fetchProjects({ locale: locale });
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
