import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ReservationForm from "./components/reservation/ResvationsForm";
import OurMenu from "./components/menu/OurMenu";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <OurMenu />
      <ReservationForm />
      <Footer />
    </>
  );
}

export default App;
