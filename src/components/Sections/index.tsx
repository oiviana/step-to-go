"use client"
import { useNavigationPage } from "../../utils/Providers";
import About from "./About";
import Projects from "./Projects";

export default function Sections() {

const {page} = useNavigationPage();

switch (page) {
    case 'about':
      return <About/>;
    case 'projects':
      return <Projects/>;
    default:
      return <div><h2>Home Page</h2><p>This is the home content.</p></div>;
  }
}