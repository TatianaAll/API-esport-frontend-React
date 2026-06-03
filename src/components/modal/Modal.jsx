import { useEffect } from "react";

function Modal({ setIsModalOpen, title }) {
  // block the scroll behind the modal
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={() => setIsModalOpen(false)} >
      <div
        className="bg-latte p-6 rounded-2xl border border-[#e5dcd3] w-80 relative"
        onClick={(e) => e.stopPropagation()} >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-3 right-3 text-chocolate text-lg">
          X
        </button>

        <h2 className="text-chocolate text-xl text-center mb-4 font-Mitr">
          {title}
        </h2>

        <p className="text-sm text-center text-chocolate">Coucou</p>
      </div>
    </div>
  );
}

export default Modal;
