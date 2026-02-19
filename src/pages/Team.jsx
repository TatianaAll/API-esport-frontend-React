import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Game from "../components/Game";

function Team() {
  let params = useParams();
  return (
    <section className="bg-[url('/images/stardewbackground.png')] bg-cover bg-center py-9">
      <h1 className="font-Mitr text-frappe text-3xl lg:text-5xl text-center my-3">
        Team {params.id}
      </h1>
      <div className="bg-chocolate w-[75%] lg:w-[80%] mx-auto p-3 rounded-2xl">
        <div className="mb-6">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[10%] lg:w-[5%]">
              <img src="/images/team.png" alt="logo team" className="w-full" />
            </div>
            <h2 className="font-Mitr text-frappe text-2xl lg:text-3xl text-center my-3">
              Players
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 justify-center items-center">
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

        <div className="my-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[10%] lg:w-[5%]">
              <img src="/images/okay.png" alt="" className="w-full" />
            </div>
            <h2 className="font-Mitr text-frappe text-2xl lg:text-3xl text-center my-3">
              Favourites games
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 justify-center items-center">
            <Game name="Gris" image="/images/gris.webp" size="sm" />
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[5%] text-light">
              <img src="/images/trophy.png" alt="" className="w-full" />
            </div>
            <h2 className="font-Mitr text-frappe text-3xl text-center my-3">
              Tournaments
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
