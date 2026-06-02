import { useState } from "react";
import Card from "./Card";

function Carousel({ items = [] }) {
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
    <div className="relative w-full">
      {/* Boutons */}
      <button onClick={prev} className="absolute left-0 z-10">
        ◀
      </button>

      <div className="flex gap-4 overflow-hidden justify-center">
        {visibleItems.map((item) => (
          <div key={item._id} className="w-[18%]">
            <Card
              infoCTA="Voir plus"
              name={item.name}
              info={new Date(item.start_date).toLocaleDateString("fr-FR")}
              photo={item.photo || "/images/stardew-valley.jpg"}
              linkToCTA="#"
            />
          </div>
        ))}
      </div>

      <button onClick={next} className="absolute right-0 z-10">
        ▶
      </button>
    </div>
  );
}

export default Carousel;