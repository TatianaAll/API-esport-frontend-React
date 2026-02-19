import CTA from "./CTA";

function Card({ photo, name, info, date, size, infoCTA, linkToCTA }) {
  const sizes = {
    sm: "h-32",
    md: "h-48",
    lg: "h-64",
  };
  return (
    <div className="rounded-xl overflow-hidden bg-frappe">
      <div className={`max-w-full ${sizes[size]} overflow-hidden`}>
        <img
          src={`${photo}`}
          alt={`${name}`}
          className="mx-auto h-full w-full object-cover"
        />
      </div>
      <article className="p-3 lg:p-4">
        <h4 className="font-[CreamCake] text-chocolate text-3xl text-center">
          {name}
        </h4>
        <h5 className="text-center text-chocolate text-md">{info}</h5>
        <p>{date}</p>
        <CTA text={`${infoCTA}`} linkTo={`${linkToCTA}`} />
      </article>
    </div>
  );
}

export default Card;
