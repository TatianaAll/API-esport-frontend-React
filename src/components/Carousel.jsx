import { useState } from "react";
import Card from "./Card";

function Carousel({ items = [], detail }) {
  const [index, setIndex] = useState(0);

  const visibleItems = items.slice(index, index + 5);

  const next = () => {
    if (index + 5 < items.length) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full max-w-300 mx-auto bg-latte rounded-2xl shadow-md p-6 relative">

      {/* Bouton gauche */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
        bg-chocolate text-white hover:scale-110
        w-9 h-9 rounded-full flex items-center justify-center
        transition duration-200 shadow-md">
        ◀
      </button>

      {/* Carousel */}
      <div className="flex gap-5 justify-center overflow-hidden">
        {visibleItems.map((item) => (
          <div
            key={item._id}
            className="w-45 shrink-0 transition duration-300 hover:scale-105"
          >
            <Card
              infoCTA="See more"
              name={item.name}
              info={new Date(item.start_date).toLocaleDateString("fr-FR")}
              photo={item.photo || "/images/stardew-valley.jpg"}
              linkToCTA={`/${detail}/${item.id}`}
            />
          </div>
        ))}
      </div>

      {/* Bouton droit */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
        bg-chocolate text-white hover:scale-110
        w-9 h-9 rounded-full flex items-center justify-center
        transition duration-200 shadow-md">
        ▶
      </button>
    </div>
  );
}

export default Carousel;