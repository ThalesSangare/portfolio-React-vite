import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  // Liens sociaux
  const socialLinks = [
    { icon: <Facebook size={24} />, url: "https://www.facebook.com/tonprofil" },
    {
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/tonprofil",
    },
    { icon: <Github size={24} />, url: "https://github.com/tonprofil" },
    {
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/tonprofil",
    },
  ];

  // Liens navigation rapide
  const navLinks = [
    { nom: "À propos", href: "#about" },
    { nom: "Projets", href: "#projects" },
    { nom: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-base-200 text-base-content py-10 px-4 md:px-20">
      {/* Première ligne : Logo/Nom + Réseaux sociaux */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        {/* Nom ou logo */}
        <div className="text-2xl font-bold">Thales</div>

        {/* Icônes sociales */}
        <ul className="flex gap-6">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-accent transition-colors"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Deuxième ligne : Navigation rapide */}
      <div className="flex justify-center gap-8 mb-8 flex-wrap">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-accent transition-colors font-medium"
          >
            {link.nom}
          </a>
        ))}
      </div>

      {/* Troisième ligne : Copyright */}
      <div className="border-t border-base-300 pt-4 text-center">
        <p className="text-sm">&copy; 2026 Thales. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
