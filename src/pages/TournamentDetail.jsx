import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  specificTournament,
  tournamentRegistration,
} from "../services/TournamentsService";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import CTA from "../components/CTA";
import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import Modal from "../components/modal/Modal";
import SubmitButton from "../components/SubmitButton";

function TournamentDetail() {
  // paramas to get the id from URL
  let params = useParams();

  // dataTournament ==> fetch the data from DB
  const [dataTournament, setDataTournament] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // User to send token + verify login
  const { currentUser } = useContext(CurrentUserContext);
  const isLogged = currentUser !== null;
  const token = localStorage.getItem("cosy_games_token");

  // fetching the tournaments details from DB
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

  // useState for the data to send to the API for registration
  // One unique object {name, place_name, etc.} with the data for the forms
  const [dataRegister, setDataRegister] = useState({
    name: "",
    team: "",
    role: "",
  });

  // state for display message
  const [message, setMessage] = useState("");
  // state for the modla
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  };

  // function to send to the backend
  let handleRegistration = async (event) => {
    event.preventDefault();

    // Try/catch to send the new data to save in the backend
    try {
      let newTournament = await tournamentRegistration(
        dataRegister.name,
        dataRegister.team,
        dataRegister.role,
        token,
      );
      console.log(newTournament);
      if (newTournament.message == "Ajout du tournoi enregistré !") {
        setMessage("Registration ok !");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log("Impossible to register" + error.message);
    }
  };

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
        {message && (
          <div className="bg-matcha text-light p-2 rounded-xl mb-4 text-center w-[50%] mx-auto">
            {message}
          </div>
        )}

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

        {dataTournament.status === "programmed" ? (
          <>
            {/* Inscription */}
            <div className="mt-6 flex justify-center">
              {isLogged ? (
                <CTA
                  text="Join tournament"
                  buttonWidth="40%"
                  onClick={toggleModal}
                />
              ) : (
                <CTA text="Login to join" buttonWidth="40%" linkTo="/login" />
              )}
            </div>

            {isModalOpen && (
              <Modal
                setIsModalOpen={setIsModalOpen}
                title={`Register to ${dataTournament.name}`}
              >
                {/* children */}
                <form
                  className="flex flex-col gap-3"
                  onSubmit={handleRegistration}
                >
                  <select
                    value={dataRegister.role}
                    onChange={(event) =>
                      setDataRegister({ role: event.target.value })
                    }
                  >
                    <option value="player">Player</option>
                    <option value="coach">Coach</option>
                    <option value="staff">Staff</option>
                    <option value="jury">Jury</option>
                  </select>

                  <SubmitButton />
                </form>
              </Modal>
            )}
          </>
        ) : (
          <p className="text-center">No registration available for this tournament</p>
        )}

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
