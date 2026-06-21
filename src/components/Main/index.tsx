import Footer from "../Footer";
import Header from "../Header";
import Sections from "../Sections";

export default function Main() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-v-dark-test">
      <div aria-hidden className="main-grid-pattern pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="main-grid-glow pointer-events-none absolute inset-x-0 top-0 -z-10" />
      <Header />
      <main className="flex-1">
        <Sections />
      </main>
      <Footer />
    </div>
  );
}
