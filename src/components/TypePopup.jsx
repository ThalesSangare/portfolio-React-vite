import { useState } from "react";
import { Heart, Mail, X } from "lucide-react";

export default function TypePopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="btn btn-accent w-fit mx-auto md:mx-0 flex items-center gap-2"
      >
        <Mail className="w-5 h-5" />
        Click sur moi
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              📩 A Mon Amour
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              T’inquiète, je ne tombe pas facilement… Mais avec toi, je dois
              avouer que c'est intéressant.😉 <br /> <br />
              Thales pense a toi ! <Heart />
            </p>

            {/* <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center font-medium">
              thales@email.com
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
