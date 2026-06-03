import { useContext, useEffect, useState } from "react";
import { allGames, createGame } from "../services/GamesService";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import CurrentUserContext from "../context/CurrentUserContext";
import CTA from "../components/CTA";
import Modal from "../components/modal/Modal";
import InputTextForm from "../components/InputTextForm";
import SubmitButton from "../components/SubmitButton";

function Games() {
  const [dataGames, setDataGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // state for display message
  const [message, setMessage] = useState("");

  // One unique object {name, place_name, etc.} with the data for the forms
  const [dataNewGame, setDataNewGame] = useState({
    name: "",
    release_date: "",
    genre: [""],
    platform: "",
    publisher: "",
    max_player: 0,
    image: "",
  });
  const token = localStorage.getItem("cosy_games_token");

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

  const toggleModal = () => {
    setIsModalOpen(true);
  };

  // function to send to the backend
  let handleNewGame = async (event) => {
    event.preventDefault();

    // Try/catch to send the new data to save in the backend
    try {
      let newGame = await createGame(
        dataNewGame.name,
        dataNewGame.release_date,
        dataNewGame.genre,
        dataNewGame.platform,
        dataNewGame.publisher,
        dataNewGame.max_player,
        dataNewGame.image,
        token,
      );
      console.log(newGame);

      if (newGame.message == "Ajout du jeu enregistré !") {
        setMessage("New game added");
        setIsModalOpen(false);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log("Impossible to add a new game" + error.message);
    }
  };

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
        {message && (
          <div className="bg-matcha text-light p-2 rounded-xl mb-4 text-center w-[50%] mx-auto">
            {message}
          </div>
        )}

        <div className="my-5">
          {isLogged ? (
            <CTA
              text="Add a game to our list"
              buttonWidth="40%"
              onClick={toggleModal}
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

        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen} title="Add a game">
            {/* children */}
            <form className="flex flex-col gap-3" onSubmit={handleNewGame}>
              <InputTextForm
                nameInput="name"
                labelName="Game name"
                onChange={(event) => {
                  setDataNewGame({
                    ...dataNewGame,
                    name: event.target.value,
                  });
                }}
              />

              <InputTextForm
                inputName="publisher"
                labelName="Publisher"
                onChange={(event) => {
                  setDataNewGame({
                    ...dataNewGame,
                    publisher: event.target.value,
                  });
                }}
              />

              <InputTextForm
                inputName="genre"
                labelName="Genre"
                onChange={(event) => {
                  setDataNewGame({
                    ...dataNewGame,
                    genre: event.target.value,
                  });
                }}
              />

              <input
                type="number"
                placeholder="Number of player max"
                className="border p-2 rounded-lg"
                onChange={(event) => {
                  setDataNewGame({
                    ...dataNewGame,
                    max_player: event.target.value,
                  });
                }}
              />

              <SubmitButton />
            </form>
          </Modal>
        )}

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
