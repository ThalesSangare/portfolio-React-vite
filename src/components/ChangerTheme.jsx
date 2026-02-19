import { useEffect, useState } from "react";

function ChangerTheme() {
  // 1️⃣ On crée un état pour stocker le thème
  const [theme, setTheme] = useState("light");

  // 2️⃣ Quand le composant charge
  useEffect(() => {
    // On regarde si un thème est déjà sauvegardé
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // 3️⃣ Fonction pour changer le thème
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    // On sauvegarde dans le navigateur
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="md:flex bg-base-200 items-center justify-center">
      <button onClick={toggleTheme} className="btn btn-primary">
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}

export default ChangerTheme;
