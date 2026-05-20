import { useState } from "react";
import ChangerTheme from "./ChangerTheme";
import { Braces, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); //  état du menu
  const location = useLocation(); //  pour détecter la route actuelle

  const liens = [
    { nom: "Accueil", id: "accueil" },
    { nom: "A Propos", id: "propos" },
    { nom: "Experiences", id: "experiences" },
    { nom: "Projets", id: "projets" },
    { nom: "CV", pdf: "/CV_Kabine.pdf" },
  ];
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center gap-2 text-xl font-bold">
        <Braces className="text-accent" />
        Kabine <span className="text-accent">Sangare</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        {liens.map((lien) => (
          <li key={lien.nom}>
            <a
              href={
                lien.pdf
                  ? lien.pdf
                  : location.pathname === "/"
                    ? `#${lien.id}`
                    : `/#${lien.id}`
              }
              target={lien.pdf ? "_blank" : ""}
              rel={lien.pdf ? "noopener noreferrer" : ""}
              className="hover:text-accent"
            >
              {lien.nom}
            </a>
          </li>
        ))}
        <li>
          <ChangerTheme />
        </li>
      </ul>

      {/* Bouton menu pour petit écran */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-square btn-ghost"
        >
          {/* Icône hamburger simple */}
          <Menu />
        </button>
      </div>

      {/* Menu déroulant sur petit écran */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-base-100 shadow-lg rounded-lg p-4 flex flex-col space-y-2 md:hidden transition-all duration-300">
          {liens.map((lien) => (
            <a
              key={lien.nom}
              href={
                lien.pdf
                  ? lien.pdf
                  : location.pathname === "/"
                    ? `#${lien.id}`
                    : `/#${lien.id}`
              }
              target={lien.pdf ? "_blank" : ""}
              rel={lien.pdf ? "noopener noreferrer" : ""}
              className="hover:text-accent"
            >
              {lien.nom}
            </a>
          ))}
          <ChangerTheme />
        </div>
      )}
    </div>
  );
};

export default Navbar;
