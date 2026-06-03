import { Link } from "react-router-dom";

function CTA({ text, buttonWidth, linkTo, onClick }) {
  // If a onclick => open a modal
  if (onClick) {
    return (
      <div className="flex w-full items-center text-center mt-4">
        <button
          onClick={onClick}
          className="text-light bg-matcha mx-auto rounded-2xl p-3 border border-[#e5dcd3]"
          style={{ width: buttonWidth }}>
          {text}
        </button>
      </div>
    );
  }

  // Else open with a Link
  return (
    <div className="flex w-full items-center text-center mt-4">
      <Link
        to={linkTo}
        className="text-light bg-matcha mx-auto rounded-2xl p-3 border border-[#e5dcd3]"
        style={{ width: buttonWidth }}>
        {text}
      </Link>
    </div>
  );
}

export default CTA;
