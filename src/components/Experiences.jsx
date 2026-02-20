import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgDaisyui from "../assets/techno/daisyui.png";
import imgGithub from "../assets/techno/github.svg";
import imgSql from "../assets/techno/sql.webp";

import ist from "../assets/companies/ist.jpg";
import code from "../assets/companies/code.png";
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
    role: "Développeur d'Application Desktop (Projet de fin d’études)",
    period: "Juillet 2023 - Juillet 2024",
    description: [
      "Institut Supérieur de Technologie de Mamou (IST/M) Guinée",
      "Développement d’une application de gestion de clinique en équipe de 4 personnes.",
      "Conception de la base de données avec MySQL pour stocker les informations.",
      "Responsabilités :",

      " - Conception et modélisation de la base de données",
      " - Développement des fonctionnalités principales de l’application en utilisant Java et JavaFX.",
      " - Collaboration en équipe avec répartition des tâches",
      " - Participation aux réunions techniques pour assurer la cohérence du projet",
    ],
    image: code,
  },
  {
    id: 2,
    role: "Développeur Web – Projets personnels",
    period: "2024 – Présent",
    description: [
      "Développement d’applications web dans le cadre de ma formation et de projets personnels.",
      "Création de sites web interactifs en utilisant HTML, CSS, JavaScript et React.",
      "Mise en œuvre de fonctionnalités avancées telles que l’authentification, la gestion d’état et l’intégration d’API.",
      "Conception d’interfaces web modernes avec React et TailwindCSS :",
      "- Création de composants réutilisables.",
      "- Mise en place d’un système de navigation dynamique.",
      "- Optimisation responsive pour mobile et desktop.",
    ],
    image: code,
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
                  className="object-cover rounded-full h-10 w-10"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-bold">
                    {experience.role}
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
