import Footer from "../Footer";
import Header from "../Header";
import Sections from "../Sections";

export default function Main() {
  return (
    <div className="flex flex-col overflow-y-hidden">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}
