import Title from "./Title";

import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/img_todolist_React.png";
import img4 from "../assets/projects/img_searchFilm_js.png";
import img5 from "../assets/projects/img_infoPays_js.png";
import img6 from "../assets/projects/log.jpg";
import { Github, Video } from "lucide-react";

const projets = [
  {
    id: 1,
    titre: "Plateforme E-commerce (En Cours)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Tailwind css", "Node.js"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },

  {
    id: 2,
    titre: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Tailwind css"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 3,
    titre: "Plateforme de Todo-List",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "JavaScript", "CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img3,
  },
  {
    id: 4,
    titre: "Plateforme de Recherche de films",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "JavaScript", "CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img4,
  },
  {
    id: 5,
    titre: "Informations des pays",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "JavaScript", "CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img5,
  },
  {
    id: 6,
    titre: "Plateforme de Gestion d'un centre de formation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Java", "JavaFx", "MySql"],
    demoLink: "#",
    repoLink: "#",
    image: img6,
  },
];

const Projets = () => {
  return (
    <div id="projets" className="mt-10">
      <Title titreProps="Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projets.map((projet) => (
          <div key={projet.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img
              src={projet.image}
              alt={projet.titre}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold">{projet.titre}</h1>
              <p className="text-sm">{projet.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {projet.technologies.map((tech,index) => (
                <span key={index} className="badge badge-accent badge-sm">{tech}</span>
              ))}
            </div>
            <div className="flex">
              <a className="btn btn-accent w-2/3" href={projet.demoLink}>
                Demo <Video className="w-4" />
              </a>

              <a className="btn btn-neutral w-1/3 ml-2" href={projet.repoLink}>
                <Github className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
