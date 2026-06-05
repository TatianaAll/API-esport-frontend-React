import { useEffect, useState } from "react";
import Card from "../components/Card";
import ResearchBar from "../components/ResearchBar";
import { allTeams, createTeam } from "../services/TeamsService";
import { allGames } from "../services/GamesService";
import Spinner from "../components/Spinner";
import CTA from "../components/CTA";
import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import Modal from "../components/modal/Modal";
import SubmitButton from "../components/SubmitButton";
import InputTextForm from "../components/InputTextForm";

function Teams() {
  const [dataTeams, setDataTeams] = useState([]);
  // isLoading starting at true => the page is loading
  const [isLoading, setIsLoading] = useState(true);

  // User to send token + verify login
  const { currentUser } = useContext(CurrentUserContext);
  const isLogged = currentUser !== null;
  const token = localStorage.getItem("cosy_games_token");

  // use state for modal and message
  const [message, setMessage] = useState("");
  // state for the modla
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const fetchingData = await allTeams();
        setDataTeams(fetchingData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeams();
  }, []);

  const last3TeamsRegistered = dataTeams
    .sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
    .slice(0, 2);

  const toggleModal = () => {
    setIsModalOpen(true);
  };

  const [allGamesData, setallGamesData] = useState([]);
  // Calling all the games from the backend
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchingGames = await allGames();
        setallGamesData(fetchingGames);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGames();
  }, []);

  // useState for the data to send to the API for registration
  // One unique object {name, place_name, etc.} with the data for the forms
  const [dataRegister, setDataRegister] = useState({
    name: "",
    nationality: "",
    favorite_game: "",
  });

  let handleNewTeam = async (event) => {
    event.preventDefault();

    // Try/catch to send the new data to save in the backend
    try {
      let newTeam = await createTeam(
        dataRegister.name,
        dataRegister.favorite_game,
        dataRegister.nationality,
        token,
      );

      if (newTeam.message == "Nouvelle équipe enregistrée !") {
        setMessage("Registration ok !");
        setIsModalOpen(false);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log("Impossible to register " + error.message);
    }
  };

  return (
    <div className="relative min-h-[90vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/pexels-karola-g-6634461.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <section className="relative z-10 py-5">
        {message && (
          <div className="bg-matcha text-light p-2 rounded-xl mb-4 text-center w-[50%] mx-auto">
            {message}
          </div>
        )}

        <ResearchBar />

        {isLogged ? (
          <CTA
            text="Create a new team"
            buttonWidth="40%"
            onClick={toggleModal}
          />
        ) : (
          <CTA text="Login to join" buttonWidth="40%" linkTo="/login" />
        )}
      </section>

      <section className="relative z-10 py-5">
        <div className="bg-latte w-[75%] mx-auto p-8 rounded-2xl mt-5">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[10%] lg:w-[5%]">
              <img
                src="/images/start-up.png"
                alt="logo start"
                className="w-full"
              />
            </div>
            <h3 className="font-Mitr text-center text-xl lg:text-2xl text-chocolate mb-2">
              Last created team
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            {!isLoading ? (
              last3TeamsRegistered.map((team) => {
                return (
                  <Card
                    infoCTA="See all"
                    name={team.name}
                    info={new Date(team.creation_date).toLocaleDateString(
                      "FR-fr",
                    )}
                    photo="/images/stardew-valley.jpg"
                    showCTA={true}
                    linkToCTA={`/team/${team._id}`}
                  />
                );
              })
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} title="Create a team">
          {/* children */}
          <form className="flex flex-col gap-3" onSubmit={handleNewTeam}>
            <InputTextForm
              nameInput={"name"}
              labelName={"Team's name"}
              onChange={(event) => {
                setDataRegister({
                  ...dataRegister,
                  name: event.target.value,
                });
              }}
            />

            <InputTextForm
              nameInput={"nationality"}
              labelName={"Team's nationality"}
              onChange={(event) => {
                setDataRegister({
                  ...dataRegister,
                  nationality: event.target.value,
                });
              }}
            />

            <div className="flex flex-col py-1">
              <label htmlFor="favorite_game" className="text-chocolate text-xl">
                Favorite game (optionnal)
              </label>
              <select
                name="specialized_game"
                id="specialized_game"
                onChange={(event) => {
                  setDataRegister({
                    ...dataRegister,
                    favorite_game: event.target.value,
                  });
                }}
                className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
              >
                <option value="" disabled>
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
        </Modal>
      )}
    </div>
  );
}

export default Teams;
