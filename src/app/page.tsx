import Footer from "./components/Footer/Footer";
import Header from "./components/Header/";
import HomeSlider from "./components/HomeSlider/";
import LayoutSection from "./components/LayoutSection";

export default function Home() {
  return (
    <>
      <Header />
 
        <HomeSlider />

      <LayoutSection>
        <h1>TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste</h1>
        <h2>Teste</h2>
      </LayoutSection>
      <Footer />
    </>
  );
}
