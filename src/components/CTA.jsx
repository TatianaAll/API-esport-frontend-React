import { Link } from "react-router-dom";

function CTA({ text, buttonWidth, linkTo }) {
  return (
    <div className="flex w-full items-center text-center mt-4">
      <Link to={`${linkTo}`} className="text-light bg-matcha mx-auto rounded-2xl p-2 shadow-md" 
      style={{width: `${buttonWidth}`}}>
        {text}
      </Link>
    </div>
  );
}

export default CTA;
