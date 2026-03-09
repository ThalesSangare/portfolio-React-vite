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
      "Application web e-commerce en cours de développement. Fonctionnalités prévues / en cours : - Gestion des produits - Système d’authentification utilisateur - Gestion du panier - Système de commandes - Interface administrateur. Projet complet visant à maîtriser la logique métier et l’intégration back-end.",
    technologies: ["React", "Tailwind css", "Node.js"],
    demoLink: "https://ecommerce-prototype.pages.dev/",
    repoLink: "https://github.com/ThalesSangare/Projet_Ecommerce",
    image: img1,
  },

  {
    id: 2,
    titre: "Portfolio",
    description:
      "Portfolio développé avec React et TailwindCSS. Objectifs : - Présentation de mes compétences et projets - Navigation dynamique avec React Router -Design responsive et moderne - Mise en pratique des bonnes pratiques en développement front-end. Projet vitrine reflétant mes compétences en développement front-end.",
    technologies: ["React", "Tailwind css"],
    demoLink: "#",
    repoLink: "https://github.com/ThalesSangare/portfolio-React-vite",
    image: img2,
  },
  {
    id: 3,
    titre: "Plateforme de Todo-List",
    description:
      "Application web interactive développée en JavaScript. Fonctionnalités : - Ajout de tâches avec niveaux de priorité (Urgente, Moyenne, Faible) - Suppression de tâches - Marquage des tâches comme terminées - Filtrage des tâches selon leur priorité . Projet mettant en pratique la gestion d’état et la logique conditionnelle côté front-end.",
    technologies: ["React", "Tailwind css"],
    demoLink: "#",
    repoLink: "https://github.com/ThalesSangare/todoList-en-React/",
    image: img3,
  },
  {
    id: 4,
    titre: "Plateforme de Recherche de films",
    description:
      "Application web développée en JavaScript avec intégration d’API. Fonctionnalités : - Recherche dynamique de films par titre - Affichage des résultats en temps réel - Présentation des informations détaillées des films . Projet axé sur l’utilisation d’API et la manipulation du DOM.",
    technologies: ["HTML", "JavaScript", "CSS"],
    demoLink: "#",
    repoLink: "https://github.com/ThalesSangare/RechercheFilm-api-js",
    image: img4,
  },
  {
    id: 5,
    titre: "Informations des pays",
    description:
      "Application web développée en JavaScript utilisant une API externe. Permet à l’utilisateur : De rechercher un pays par son nom - D’afficher ses informations principales (capitale, population, drapeau, etc.) Projet réalisé pour maîtriser la consommation d’API REST et le traitement des données JSON.",
    technologies: ["HTML", "JavaScript", "CSS"],
    demoLink: "#",
    repoLink: "https://github.com/ThalesSangare/rest-api-country-search/",
    image: img5,
  },
  {
    id: 6,
    titre: "Plateforme de Gestion d'un centre de formation",
    description:
      "Application desktop développée en Java avec JavaFX, permettant la gestion complète d’un centre de formation.Fonctionnalités principales : Gestion des inscriptions des apprenants - Gestion des cours et des formateurs - Suivi des paiements - Gestion des notes et évaluations .",
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
          <div
            key={projet.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg hover:border border-accent"
          >
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
              {projet.technologies.map((tech, index) => (
                <span key={index} className="badge badge-accent badge-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <a
                className="btn btn-accent w-2/3"
                href={projet.demoLink}
                target="_blank"
              >
                Demo <Video className="w-4" />
              </a>

              <a
                target="_blank"
                className="btn btn-neutral w-1/3 ml-2"
                href={projet.repoLink}
              >
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
