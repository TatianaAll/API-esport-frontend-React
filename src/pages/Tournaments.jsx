import { useEffect, useState } from "react";
import CTA from "../components/CTA";
import Card from "../components/Card";
import { allTournaments } from "../services/TournamentsService";
import Spinner from "../components/Spinner";

function Tournaments() {
  // useState = void array at first, complete with the async call of the backend
  const [dataTournaments, setDataTournaments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        // Fetching all the tournaments
        const fetchingData = await allTournaments(); // fetch the data
        setDataTournaments(fetchingData); // save the data in the useState
        setLoading(true); // end of load
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTournaments();
  }, []);

  const lastTournament = dataTournaments
    // filter with the tournament with the status = ended
    .filter((filter) => filter.status === "ended")
    // sort by date and select only the first (the newest finished tournament)
    .sort((a, b) => new Date(b.start_date) - new Date(a.start_date))[0];

  const upcommingTournaments = dataTournaments
    .filter((upcomming) => upcomming.status == "Programmed")
    .sort((a, b) => new Date(b.start_date) - new Date(a.start_date))
    .slice(0, 2);

  const endedTournaments = dataTournaments
    // filter with the tournament with the status = ended
    .filter((filter) => filter.status === "ended")
    // sort by date and select only the first (the newest finished tournament)
    .sort((a, b) => new Date(b.start_date) - new Date(a.start_date));

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/pexels-karola-g-6634461.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <section className="pt-5 relative z-10">
        <div className="bg-latte w-[80%] lg:w-[40%] mx-auto p-8 rounded-2xl">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[7%] lg:w-[5%]">
              <img
                src="/images/hourglass.png"
                alt="logo start"
                className="w-full"
              />
            </div>
            <h3 className="font-Mitr text-center text-2xl text-chocolate mb-2">
              Last tournament
            </h3>
          </div>
          {loading ? (
            <div
              key={lastTournament._id}
              className="w-[80%] lg:w-[60%] mt-4 mx-auto"
            >
              <Card
                infoCTA="Voir plus"
                name={lastTournament.name}
                info={new Date(lastTournament.start_date).toLocaleDateString(
                  "FR-fr",
                )}
                photo={lastTournament.photo || "/images/stardew-valley.jpg"}
                linkToCTA="#"
              />
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </section>
      <section className="my-5 py-5 relative z-10">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[7%] lg:w-[3%]">
            <img
              src="/images/calendar.jpg"
              alt="logo start"
              className="w-full"
            />
          </div>
          <h3 className="font-Mitr text-center text-2xl text-chocolate mb-2">
            Upcoming
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-4 px-3">
          {loading ? (
            upcommingTournaments.map((tournament) => {
              return (
                <div
                  key={tournament._id}
                  className="w-[80%] lg:w-[60%] mt-4 mx-auto"
                >
                  <Card
                    infoCTA="Voir plus"
                    name={tournament.name}
                    info={new Date(tournament.start_date).toLocaleDateString(
                      "FR-fr",
                    )}
                    photo={tournament.photo || "/images/stardew-valley.jpg"}
                    linkToCTA="#"
                  />
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
        <CTA text="See all" buttonWidth="20%" linkTo="#" />
      </section>

      <section className="mt-5 py-5 relative z-10">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[7%] lg:w-[3%]">
            <img src="/images/crown.png" alt="logo start" className="w-full" />
          </div>
          <h3 className="font-Mitr text-center text-2xl text-chocolate mb-2">
            Passed
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center px-3">
          {loading ? (
            endedTournaments.map((tournament) => {
              return (
                <div
                  key={tournament._id}
                  className="w-[80%] lg:w-[60%] mt-4 mx-auto"
                >
                  <Card
                    infoCTA="Voir plus"
                    name={tournament.name}
                    info={new Date(tournament.start_date).toLocaleDateString(
                      "FR-fr",
                    )}
                    photo={tournament.photo || "/images/stardew-valley.jpg"}
                    linkToCTA="#"
                  />
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
        <CTA text="See all" buttonWidth="20%" linkTo="#" />
      </section>
    </div>
  );
}

export default Tournaments;
