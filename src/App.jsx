import "./App.css";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Propos from "./components/Propos";
import Home from "./components/Home";
import Projets from "./components/Projets";
import Btn from "./components/TypePopup";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Propos />
              <Experiences />
              <Projets />
            </>
          }
        />

        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
