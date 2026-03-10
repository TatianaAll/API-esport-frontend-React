import InputTextForm from "../components/InputTextForm";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { createGame } from "../services/GamesService";
import CurrentUserContext from "../context/CurrentUserContext";
import { useState } from "react";

function GameForm() {
  // need the token
  const token = localStorage.getItem("cosy_games_token");

  // One unique object {name, placeName, etc.} with the data for the forms
  const [dataGame, setDataGame] = useState({
    name: "",
    release_date: "",
    genre: [],
    platform: [],
    publisher: "",
    max_player: null,
  });

  // state for display message
  const [message, setMessage] = useState("");

  const redirectWhenTournamentCreated = useNavigate();

  // function to send to the backend
  let handleNewGame = async (event) => {
    event.preventDefault();

    // Try/catch to send the new data to save in the backend
    try {
      let newGame = await createGame(
        dataGame.name,
        dataGame.release_date,
        dataGame.genre,
        dataGame.platform,
        dataGame.publisher,
        dataGame.max_player,
        token
      );
      console.log(newGame);
      if (newGame.message == "Ajout du jeu enregistré !") {
        setMessage("New game added");
        setTimeout(() => {
          redirectWhenTournamentCreated("/");
        }, 3000);
      }
    } catch (error) {
      console.log("Impossible to add a new game" + error.message);
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
          Adding a game
        </h1>
        <form onSubmit={handleNewGame}>
          <InputTextForm
            nameInput={"name"}
            labelName={"Game name"}
            onChange={(event) => {
              setDataGame({...dataGame, name:(event.target.value)});
            }}
          />

          <InputTextForm
            nameInput={"publisher"}
            labelName={"Game's publisher"}
            onChange={(event) => {
              setDataGame({...dataGame, publisher:(event.target.value)});
            }}
          />

          <InputTextForm
            nameInput={"genre"}
            labelName={"Genre"}
            onChange={(event) => {
              setDataGame({...dataGame, genre:(event.target.value.split(","))});
            }}
          />

          <InputTextForm
            nameInput={"platform"}
            labelName={"Available on platforms :"}
            onChange={(event) => {
              setDataGame({...dataGame, platform:(event.target.value.split(","))});
            }}
          />

          <div className="flex flex-col py-1">
            <label htmlFor="startDate" className="text-chocolate text-xl">
              Release date
            </label>
            <input
              type="datetime-local"
              name="release_date"
              id="release_date"
              onChange={(event) => {
                setDataGame({...dataGame, release_date:(event.target.value)});
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            />
          </div>

          <div className="flex flex-col py-1">
            <label
              htmlFor="max_player"
              className="text-chocolate text-xl">
              Number max of players
            </label>
            <input
              type="number"
              name="max_player"
              id="max_player"
              onChange={(event) => {
                setDataGame({...dataGame, max_player: Number(event.target.value)});
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}

export default GameForm;
