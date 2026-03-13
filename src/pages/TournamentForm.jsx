import { useEffect, useState } from "react";
import InputTextForm from "../components/InputTextForm";
import SubmitButton from "../components/SubmitButton";
import { createTournament } from "../services/TournamentsService";
import { useNavigate } from "react-router-dom";
import { allGames } from "../services/GamesService";
import Spinner from "../components/Spinner";

function TournamentForm() {
  // One unique object {name, place_name, etc.} with the data for the forms
  const [dataTournament, setDataTournament] = useState({
    name: "",
    place_name: "",
    capacity: 0,
    start_date: "",
    end_date: "",
    status: "",
    specialized_game: "",
  });

  // state for display message
  const [message, setMessage] = useState("");

  const redirectWhenTournamentCreated = useNavigate();
  const [allGamesData, setallGamesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Calling all the games from the backend
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchingGames = await allGames();
        setallGamesData(fetchingGames);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchGames();
  }, []);

  const token = localStorage.getItem("cosy_games_token");

  // function to send to the backend
  let handleTournament = async (event) => {
    event.preventDefault();

    // Try/catch to send the new data to save in the backend
    try {
      let newTournament = await createTournament(
        dataTournament.name,
        dataTournament.place_name,
        dataTournament.capacity,
        dataTournament.start_date,
        dataTournament.end_date,
        dataTournament.status,
        dataTournament.specialized_game,
        token
      );
      console.log(newTournament);
      if (newTournament.message == "Ajout du tournoi enregistré !") {
        setMessage("New Tournament created");
        setTimeout(() => {
          redirectWhenTournamentCreated("/tournaments");
        }, 3000);
      }
    } catch (error) {
      console.log("Impossible to create the new tournament" + error.message);
    }
  };

  return (
    <section className="bg-[url('/images/tunicbg.jpg')] bg-cover bg-center py-9 min-h-[81vh]">
      {message && (
        <div className="bg-matcha text-light p-2 rounded-xl mb-4 text-center w-[50%] mx-auto">
          {message}
        </div>
      )}
      <div className="bg-frappe w-[85%] lg:w-[70%] mx-auto p-8 rounded-2xl">
        <h1 className="font-[CreamCake] text-center text-6xl text-chocolate mb-2 py-5">
          Tournament creation
        </h1>
        <form onSubmit={handleTournament}>
          <InputTextForm
            nameInput={"nameTournament"}
            labelName={"Tournament name"}
            onChange={(event) => {
              setDataTournament({
                ...dataTournament,
                name: event.target.value,
              });
            }}
          />

          <InputTextForm
            nameInput={"place_name"}
            labelName={"Tournament place"}
            onChange={(event) => {
              setDataTournament({
                ...dataTournament,
                place_name: event.target.value,
              });
            }}
          />

          <div className="flex flex-col py-1">
            <label
              htmlFor="capacity"
              className="text-chocolate text-xl"
            >
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              onChange={(event) => {
                setDataTournament({
                  ...dataTournament,
                  capacity: Number(event.target.value),
                });
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            />
          </div>

          <div className="flex flex-col py-1">
            <label htmlFor="start_date" className="text-chocolate text-xl">
              Start date
            </label>
            <input
              type="datetime-local"
              name="start_date"
              id="start_date"
              onChange={(event) => {
                setDataTournament({
                  ...dataTournament,
                  start_date: event.target.value,
                });
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            />
          </div>

          <div className="flex flex-col py-1">
            <label htmlFor="end_date" className="text-chocolate text-xl">
              End date
            </label>
            <input
              type="datetime-local"
              name="end_date"
              id="end_date"
              onChange={(event) => {
                setDataTournament({
                  ...dataTournament,
                  end_date: event.target.value,
                });
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            />
          </div>

          <div className="flex flex-col py-1">
            <label htmlFor="status" className="text-chocolate text-xl">
              Status
            </label>
            <select
              name="status"
              id="status"
              onChange={(event) => {
                setDataTournament({
                  ...dataTournament,
                  status: event.target.value,
                });
              }}
              value={dataTournament.status}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            >
              <option value="" selected disabled>
                ----Status----
              </option>
              <option value="negociate">In negociation</option>
              <option value="programmed">Programmed</option>
              <option value="in progress">In progress</option>
              <option value="ended">Ended</option>
            </select>
          </div>

          <div className="flex flex-col py-1">
            <label htmlFor="specialized_game" className="text-chocolate text-xl">
              Game
            </label>
            <select
              name="specialized_game"
              id="specialized_game"
              onChange={(event) => {
                setDataTournament({
                  ...dataTournament,
                  specialized_game: event.target.value,
                });
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            >
              <option value="" selected disabled>
                ----Chose the game----
              </option>
              {!isLoading ? (
                allGamesData.map((game) => {
                  return (
                    <option key={game._id} value={game._id}>
                      {game.name}
                    </option>
                  );
                })
              ) : (
                <option disabled>Loading games...</option>
              )}
            </select>
          </div>
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}

export default TournamentForm;
