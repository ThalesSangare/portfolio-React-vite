import React, { useState } from "react";
import Swal from "sweetalert2";
// Permet de rediriger vers une autre page
import { useNavigate } from "react-router-dom";

// On crée notre composant
export default function ContactForm() {
  const [result, setResult] = useState("");
  // Hook de navigation React Router
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "87259c31-6100-48b7-bc89-07de9941de44");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if (data.success) {
      Swal.fire({
        title: "Message envoyé avec succès!",
        text: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
        icon: "success",
        confirmButtonText: "Fermer",
      }).then((result) => {
        // Quand l'utilisateur clique sur "Fermer"
        if (result.isConfirmed) {
          navigate("/"); // Redirige vers la page d'accueil
        }
      });
    }
    if (!data.success) {
      Swal.fire({
        title: "Erreur lors de l'envoi du message",
        text: "Une erreur est survenue. Veuillez réessayer plus tard.",
        icon: "error",
        confirmButtonText: "Fermer",
      }).then((result) => {
        // Quand l'utilisateur clique sur "Fermer"
        if (result.isConfirmed) {
          navigate("/"); // Redirige vers la page d'accueil
        }
      });
    }
  };

  return (
    // Conteneur principal centré verticalement et horizontalement
    <div className="min-h-screen flex items-center justify-center  p-4">
      {/* Formulaire */}
      <form
        onSubmit={onSubmit} // Appelle handleSubmit quand on clique sur envoyer
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
            // value={formData.nom}  Valeur contrôlée par React
            // onChange={handleChange}  Détecte les changements
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
          {" "}
          Envoyer
        </button>
      </form>
    </div>
  );
}
