import Title from "./Title";

import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";

const projets = [
  {
    id: 1,
    titre: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },

  {
    id: 2,
    titre: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 3,
    titre: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 4,
    titre: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 5,
    titre: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 6,
    titre: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
];

const Projets = () => {
  return (
    <div>
      <Title titreProps="Projets" />
      <div>
        {projets.map((projet) => (
          <div>
            <img src={projet.image} alt={projet.titre} />
            <div>
              <h1>{projet.titre}</h1>
              <p>{projet.description}</p>
            </div>
            <div>
              {projet.technologies.map((tech) => (
                <span>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
