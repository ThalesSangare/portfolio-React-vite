import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgDaisyui from "../assets/techno/daisyui.png";
import imgGithub from "../assets/techno/github.svg";
import imgSql from "../assets/techno/sql.webp";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";
import Title from "./Title";

// Mes competence en Tableau d'object
const skills = [
  { id: 1, nom: "HTML", image: imgHTML },
  { id: 2, nom: "CSS", image: imgCSS },
  { id: 3, nom: "JavaScript", image: imgJS },
  { id: 4, nom: "React", image: imgREACT },
  { id: 5, nom: "Node.js", image: imgNODE },
  { id: 6, nom: "Tailwind CSS", image: imgTAILWIND },
  { id: 7, nom: "Daisyui", image: imgDaisyui },
  { id: 8, nom: "Github", image: imgGithub },
  { id: 9, nom: "Sql", image: imgSql },
];

// Mes experiences aussi pareil
const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Google",
    period: "Sep 2022 - Présent",
    description: [
      "Développement de nouvelles fonctionnalités pour Google Maps.",
      "Optimisation des performances de l'application.",
    ],
    image: google,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Meta",
    period: "Jan 2021 - Août 2022",
    description: [
      "Création d'une plateforme interne de collaboration pour les équipes.",
      "Mise en place d'une architecture scalable et optimisée.",
    ],
    image: meta,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Amazon",
    period: "Mai 2019 - Déc 2020",
    description: [
      "Développement d'une interface utilisateur pour Amazon Web Services.",
      "Implémentation des tests unitaires et E2E.",
    ],
    image: amazon,
  },
];

const Experiences = () => {
  return (
    <div id="experiences">
      <Title titreProps="Experiences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center items-center flex-col"
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.nom}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.nom}</span>
            </div>
          ))}
        </div>

        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="object-cover h-10 w-10"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-bold">
                    {experience.role},{experience.company}
                  </h1>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2">
                {experience.description.map((desc, index) => (
                  <div key={index}>{desc}</div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experiences;
