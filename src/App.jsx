import "./App.css";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Propos from "./components/Propos";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Propos />
      <Experiences />

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
