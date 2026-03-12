import { useEffect, useState } from "react";
import { allGames } from "../services/GamesService";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

function Games() {
  const [dataGames, setDataGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchingGames = await allGames();
        setDataGames(fetchingGames);
        setIsLoading(false); // end loading
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="/images/ac4_ss3_full.avif"
          alt="background"
          className="object-cover w-full h-full"
        />
      </div>
      <section className="py-5 relative z-10">
        <h2 className="font-Mitr text-center text-2xl text-chocolate mb-2">Games</h2>
        {!isLoading ? (
          dataGames.map((game) => {
            return (
              <div key={game._id} className="w-[80%] lg:w-[60%] mt-4 mx-auto">
                <Card
                  infoCTA="See details"
                  name={game.name}
                  info={game.publisher}
                  photo="/images/stardew-valley.jpg"
                  linkToCTA="#"
                />
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </section>
    </div>
  );
}

export default Games;
