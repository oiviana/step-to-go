"use client"
import { useNavigationPage } from "../../utils/Providers";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Sections() {

const {page} = useNavigationPage();

switch (page) {
    case 'hero':
      return <Hero/>;
    case 'projects':
      return <Projects/>;
    default:
      return <Hero/>;
  }
}
