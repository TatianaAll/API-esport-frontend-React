import { useState } from "react";
import InputTextForm from "../components/InputTextForm";
import SubmitButton from "../components/SubmitButton";
import { createTournament } from "../services/TournamentsService";
import { useNavigate } from "react-router-dom";

function TournamentForm() {
  // One unique object {name, placeName, etc.} with the data for the forms
  const [dataTournament, setDataTournament] = useState({
    name: "",
    placeName: "",
    capacity: "",
    startDate: "",
    endDate: "",
    status: "",
    game: "",
  });

  // state for display message
  const [message, setMessage] = useState("");

  const redirectWhenTournamentCreated = useNavigate();

  // function to send to the backend
  let handleTournament = async (event) => {
    event.preventDefault();

    // Try/catch to send the new data to save in the backend
    try {
      let newTournament = await createTournament(
        dataTournament.name,
        dataTournament.placeName,
        dataTournament.capacity,
        dataTournament.startDate,
        dataTournament.endDate,
        dataTournament.status,
        dataTournament.game,
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
              setDataTournament.name(event.target.value);
            }}
          />

          <InputTextForm
            nameInput={"placeName"}
            labelName={"Tournament place"}
            onChange={(event) => {
              setDataTournament.placeName(event.target.value);
            }}
          />

          <div className="flex flex-col py-1">
            <label
              htmlFor="tournamentCapacity"
              className="text-chocolate text-xl"
            >
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              id="tournamentCapacity"
              onChange={(event) => {
                setDataTournament.capacity(event.target.value);
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            />
          </div>

          <div className="flex flex-col py-1">
            <label htmlFor="startDate" className="text-chocolate text-xl">
              Start date
            </label>
            <input
              type="datetime-local"
              name="startDate"
              id="startDate"
              onChange={(event) => {
                setDataTournament.startDate(event.target.value);
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            />
          </div>

          <div className="flex flex-col py-1">
            <label htmlFor="endDate" className="text-chocolate text-xl">
              End date
            </label>
            <input
              type="datetime-local"
              name="endDate"
              id="endDate"
              onChange={(event) => {
                setDataTournament.endDate(event.target.value);
              }}
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
            />
          </div>

          <div className="flex flex-col py-1">
            <label htmlFor="status" className="text-chocolate text-xl">
              Status
            </label>
            <select name="status" id="status">
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
            <label htmlFor="game" className="text-chocolate text-xl">
              Game
            </label>
            <select name="game" id="game">
              <option value="" selected disabled>
                ----Chose the game----
              </option>
              <option value="animal crossing new leaf">
                Animal Crossing - New Leaf
              </option>
              <option value="stardew valley">Stardew valley</option>
              <option value="tunic">Tunic</option>
              <option value="unpacking">Unpacking</option>
            </select>
          </div>

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}

export default TournamentForm;
