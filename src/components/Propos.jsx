import { LetterText } from "lucide-react";
import img from "../assets/img.jpg";

const Propos = () => {
  return (
    <div>
      <h1 className="text-center">A propos</h1>
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
              <h2 className="text-xl font-bold mb-1">Developpeur Front-End</h2>
              <p>Je suis un développeur frontend avec une bonne expérience.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl mb-5">
            <div className="mb-2 md:mb-0">
              <LetterText />
            </div>
            <div className="md:ml-4 text-center md-text-left">
              <h2 className="text-xl font-bold mb-1">Developpeur Front-End</h2>
              <p>Je suis un développeur frontend avec une bonne expérience.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl mb-5">
            <div className="mb-2 md:mb-0">
              <LetterText />
            </div>
            <div className="md:ml-4 text-center md-text-left">
              <h2 className="text-xl font-bold mb-1">Developpeur Front-End</h2>
              <p>Je suis un développeur frontend avec une bonne expérience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propos;
