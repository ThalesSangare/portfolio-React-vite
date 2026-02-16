const Navbar = () => {
  const liens = [
    { nom: "Accueil", href: "#" },
    { nom: "A Propos", href: "#" },
    { nom: "Experiences", href: "#" },
    { nom: "Projets", href: "#" },
  ];
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="">
        {/*  logo */}
        Thales <span className="text-accent">Sangare</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        {liens.map((lien) => (
          <li key={lien.nom}>
            <a href={lien.href}>{lien.nom}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
