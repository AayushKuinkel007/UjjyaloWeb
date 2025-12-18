import React, { useState } from "react";
import FAQs from "../PageComponents/FAQs";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <footer>
        <div className="flex justify-center">
          <button
            className="p-3 bg-[#f48c25] rounded-xl text-black"
            onClick={handleOpen}
          >
            FAQ's
          </button>
        </div>
      </footer>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-[60vw] max-h-[90vh] px-8 py-6 rounded-xl bg-[#0c2342] backdrop-blur-xl overflow-y-auto scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: "thin", // Firefox
              scrollbarColor: "#0c2342 transparent", // Firefox
            }}
          >
            <FAQs />
          </div>
        </div>
      )}

      {/* Minimal scrollbar without arrows */}
      <style jsx>{`
        /* WebKit browsers */
        div::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background-color: rgba(218, 165, 32, 0.5);
          border-radius: 9999px;
          border: none;
        }
        div::-webkit-scrollbar-thumb:hover {
          background-color: rgba(218, 165, 32, 0.7);
        }

        /* Hide arrows in IE/Edge */
        div::-ms-scrollbar-button {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Footer;
