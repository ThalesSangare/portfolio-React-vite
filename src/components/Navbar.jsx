const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="">
        {/*  logo */}
        Thales <span className="text-accent">Sangare</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li>Accueil</li>
        <li>A Propos</li>
        <li>Experiences</li>
        <li>Projets</li>
      </ul>
    </div>
  );
};

export default Navbar;
