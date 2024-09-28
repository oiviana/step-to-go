"use client"
import { useNavigationPage } from "../../utils/Providers";
import Contact from "./Contact";
import Hero from "../Hero";
import About from "./About";
import Projects from "./Projects";

export default function Sections() {

const {page} = useNavigationPage();

switch (page) {
    case 'about':
      return <About/>;
      case 'hero':
        return <Hero/>;
    case 'projects':
      return <Projects/>;
      case 'contact':
        return <Contact/>;
    default:
      return <Hero/>;
  }
}