import { Mail } from "lucide-react";
import img from "../assets/img.jpg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 gap-10">
      <div className="flex flex-col md:max-w-xl px-4 md:px-">
        {/* px => ajoute padding horizontal */}
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour , <br /> je suis <span className="text-accent">Thales</span>
        </h1>

        <p className="my-4 text-md text-center md:text-left">
          Généralement, on utilise un texte en faux latin (le texte ne veut rien
          dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin
          est que l'opérateur sait au premier coup d'œil que la page contenant
          ces lignes n'est pas valide et que l'attention du lecteur n'est pas
          dérangée par le contenu, lui permettant de demeurer concentré sur le
          seul aspect graphique...
        </p>

        <a href="#" className="btn btn-accent w-fit mx-auto md:mx-0">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>

      <div className="flex justify-center">
        <img
          src={img}
          alt="Thales_photo"
          className="w-48 md:w-64 lg:w-80 object-cover border-8 border-accent shadow-xl rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
