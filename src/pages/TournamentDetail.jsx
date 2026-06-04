import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { specificTournament } from "../services/TournamentsService";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import CTA from "../components/CTA";
import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

function TournamentDetail() {
  let params = useParams();

  const [dataTournament, setDataTournament] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useContext(CurrentUserContext);
  const isLogged = currentUser !== null;

  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const fetching = await specificTournament({
          tournament_id: params.tournament_id,
        });
        setDataTournament(fetching);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTournament();
  }, [params.tournament_id]);

  if (isLoading) return <Spinner />;

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/ac4_ss3_full.avif"
          alt="background"
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      <section className="relative z-10 py-10">
        <h1 className="font-[CreamCake] text-3xl text-chocolate text-center mb-8">
          Tournament : {dataTournament.name}
        </h1>

        <div className="bg-latte w-[90%] lg:w-[70%] mx-auto p-6 rounded-2xl border border-[#e5dcd3]">
          {/* GAME */}
          <div className="flex justify-center mb-6">
            <div className="w-70">
              <Card
                size="md"
                name={dataTournament.specialized_game?.name || "Game"}
                photo={
                  dataTournament.specialized_game?.image ||
                  "/images/stardew-valley.jpg"
                }
                info="Main game"
                showCTA={false}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-chocolate text-sm">
            <div>
              <p>
                <span className="font-semibold">Location :</span>{" "}
                {dataTournament.place_name}
              </p>

              <p className="mt-2">
                <span className="font-semibold">Capacity :</span>{" "}
                {dataTournament.capacity?.max || "N/A"}
              </p>

              <p className="mt-2">
                <span className="font-semibold">Equipment :</span>{" "}
                {dataTournament.equipment?.join(", ") || "None"}
              </p>
            </div>

            <div>
              <p>
                <span className="font-semibold">Start :</span>{" "}
                {new Date(dataTournament.start_date).toLocaleDateString(
                  "fr-FR",
                )}
              </p>

              <p className="mt-2">
                <span className="font-semibold">End :</span>{" "}
                {new Date(dataTournament.end_date).toLocaleDateString("fr-FR")}
              </p>

              <p className="mt-2">
                <span className="font-semibold">Status :</span>{" "}
                <span className="bg-[#e8ddd2] px-2 py-1 rounded-full text-xs">
                  {dataTournament.status}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Inscription */}
        <div className="mt-6 flex justify-center">
          {isLogged ? (
            <CTA
              text="Join tournament"
              buttonWidth="40%"
              onClick={() => {
                console.log("User wants to join");
              }}
            />
          ) : (
            <CTA text="Login to join" buttonWidth="40%" linkTo="/login" />
          )}
        </div>

        <section className="mt-10">
          <h2 className="text-2xl text-center text-chocolate font-Mitr mb-6">
            Participants
          </h2>

          <div className="bg-latte w-[90%] lg:w-[70%] mx-auto p-6 rounded-2xl border border-[#e5dcd3]">
            {dataTournament.participants?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {dataTournament.participants.map((p, index) => (
                  <div key={index} className="w-70">
                    <Card
                      size="sm"
                      name={p.user?.firstname || p.team?.name || "Participant"}
                      info={p.role}
                      photo="/images/stardew-valley.jpg"
                      showCTA={false}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-chocolate">No participants yet</p>
            )}
          </div>
        </section>
      </section>
    </div>
  );
}

export default TournamentDetail;
