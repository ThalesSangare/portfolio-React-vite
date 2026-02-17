import "./App.css";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Propos from "./components/Propos";
import Home from "./components/Home";
import Projets from "./components/Projets";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Propos />
      <Experiences />
      <Projets />

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
