// On importe React et le hook useState
import React, { useState } from "react";

// On crée notre composant
export default function ContactForm() {
  // useState permet de stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: "", // Champ Nom & Prénom
    email: "", // Champ Email
    message: "", // Champ Message
  });

  // Fonction qui s'exécute à chaque modification d'un champ
  const handleChange = (e) => {
    setFormData({
      ...formData, // On garde les anciennes valeurs
      [e.target.name]: e.target.value, // On met à jour uniquement le champ modifié
    });
  };

  // Fonction appelée lors de l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    console.log(formData); // Affiche les données dans la console
    alert("Message envoyé !"); // Message de confirmation

    // Réinitialisation du formulaire après envoi
    setFormData({
      nom: "",
      email: "",
      message: "",
    });
  };

  return (
    // Conteneur principal centré verticalement et horizontalement
    <div className="min-h-screen flex items-center justify-center  p-4">
      {/* Formulaire */}
      <form
        onSubmit={handleSubmit} // Appelle handleSubmit quand on clique sur envoyer
        className=" p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        {/* Titre */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Formulaire de contact
        </h2>

        {/* Champ Nom & Prénom */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nom & Prénom</label>
          <input
            type="text"
            name="nom" // Doit correspondre à la clé dans formData
            value={formData.nom} // Valeur contrôlée par React
            onChange={handleChange} // Détecte les changements
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Hawa Sangare"
          />
        </div>

        {/* Champ Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="exemple@gmail.com"
          />
        </div>

        {/* Champ Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre message..."
          ></textarea>
        </div>

        {/* Bouton d'envoi */}
        <button
          type="submit" // Déclenche le submit du formulaire
          className="btn bg-blue-600 w-full text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
