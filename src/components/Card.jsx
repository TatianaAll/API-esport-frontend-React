import CTA from "./CTA";

function Card({ photo, name, info, date, infoCTA, linkToCTA }) {
  return (
    <div className="rounded-xl overflow-hidden bg-frappe">
      <div className="max-w-full">
        <img src={`${photo}`} alt={`${name}`} className="mx-auto w-full" />
      </div>
      <article className = "p-4">
        <h4 className="font-[CreamCake] text-chocolate text-3xl text-center">{name}</h4>
        <h5 className="text-center text-chocolate text-md">{info}</h5>
        <p>{date}</p>
        <CTA text={`${infoCTA}`} linkTo={`${linkToCTA}`} />
      </article>
    </div>
  );
}

export default Card;
