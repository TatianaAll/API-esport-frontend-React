import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Team() {
  let params = useParams();
  return (
    <section className="bg-[url('/images/stardewbackground.png')] bg-cover bg-center h-[90vh] py-9">
      <h1 className="font-Mitr text-frappe text-2xl text-center my-3">
        Team {params.id}
      </h1>
      <div className="bg-chocolate w-[90%] mx-auto p-3 rounded-2xl">
        <div>
          <h2 className="font-Mitr text-frappe text-xl text-center">Players</h2>
          <div className="flex gap-3 justify-center items-center">
            <Card
              infoCTA="See profile"
              name="Player1"
              info="Team captain"
              photo="/images/Flowey_battle_winking.webp"
              linkToCTA="/profile/Player1"
              size="sm"
            />
            <Card
              infoCTA="See profile"
              name="Player2"
              info="Teammate"
              photo="/images/Undyne_overworld_epilogue.webp"
              linkToCTA="/profile/Player2"
              size="sm"
            />
            <Card
              infoCTA="See profile"
              name="Player3"
              info="Teammate"
              photo="/images/Flowey_battle_winking.webp"
              linkToCTA="/profile/Player3"
              size="sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
