import { useContext, useEffect, useState } from "react";
import { allGames } from "../services/GamesService";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import CurrentUserContext from "../context/CurrentUserContext";
import CTA from "../components/CTA";

function Games() {
  const [dataGames, setDataGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useContext(CurrentUserContext);
  const isLogged = currentUser !== null;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchingGames = await allGames();
        setDataGames(fetchingGames);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/ac4_ss3_full.avif"
          alt="background"
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      <section className="relative z-10 py-10">
        <h2 className="font-Mitr text-center text-3xl text-chocolate mb-8">
          Games
        </h2>

        <div className="my-5">
          {isLogged ? (
            <CTA
              text="Add a game to our list"
              buttonWidth="20%"
              linkTo="/create/game"
            />
          ) : (
            <div className="my-5">
              <CTA
                text="Connexion needed to add a game"
                buttonWidth="40%"
                linkTo="/login"
              />
            </div>
          )}
        </div>

        <div className="bg-latte w-[90%] lg:w-[75%] mx-auto p-6 rounded-2xl border border-[#e5dcd3]">
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {isLoading ? (
              <Spinner />
            ) : dataGames.length > 0 ? (
              dataGames.map((game) => (
                <div key={game._id} className="w-50">
                  <Card
                    size="md"
                    infoCTA="See details"
                    name={game.name}
                    info={game.publisher}
                    photo={
                      game.image ? game.image : "/images/stardew-valley.jpg"
                    }
                    linkToCTA="#"
                  />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-chocolate">
                No games available
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Games;
