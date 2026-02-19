import { LetterText } from "lucide-react";
import img from "../assets/img.jpg";
import Title from "./Title";

const Propos = () => {
  return (
    <div id="propos" className="bg-base-200">
      {/* <h1 className="text-center mb-10">A propos</h1> */}
      <Title titreProps="A Propos" />
      <div className="flex justify-center items-center gap-10">
        <div className="hidden md:block">
          {/* mon image */}
          <img
            src={img}
            alt="thales-photo"
            className="w-96 object-cover rounded-xl"
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl mb-5">
            <div className="mb-2 md:mb-0">
              <LetterText />
            </div>
            <div className="md:ml-4 text-center md-text-left">
              <h2 className="text-xl font-bold mb-1">Développeur Front-End</h2>
              <p>Je suis un développeur frontend avec une bonne expérience.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl mb-5">
            <div className="mb-2 md:mb-0">
              <LetterText />
            </div>
            <div className="md:ml-4 text-center md-text-left">
              <h2 className="text-xl font-bold mb-1">Développeur Back-End</h2>
              <p>
                Développement de la logique serveur, gestion des bases de
                données et sécurisation des applications web..
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl mb-5">
            <div className="mb-2 md:mb-0">
              <LetterText />
            </div>
            <div className="md:ml-4 text-center md-text-left">
              <h2 className="text-xl font-bold mb-1">Développeur Full-Stack</h2>
              <p>
                Je suis un développeur full-stack avec une bonne expérience en
                développement d’applications web modernes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propos;
