import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Game from "../components/Game";
import { useEffect, useState } from "react";
import { getPlayersInTeam } from "../services/UsersService";
import Spinner from "../components/Spinner";
import { getTeam } from "../services/TeamsService";

function Team() {
  // get the params from the url
  let params = useParams();

  const [dataUsersInTeam, setDataUsersInTeam] = useState([]);
  const [teamInfo, setTeamInfo] = useState([]);
  // isLoading starting at true => the page is loading
  const [isLoading, setIsLoading] = useState(true);

  // Use effect with params.id 
  useEffect(() => {
    const fetchUserInTeam = async () => {
      try {
        // asking the backend with the :id = params.id
        const fetchingData = await getPlayersInTeam({teamId: params.id});
        const fetchDataTeam = await getTeam({teamId: params.id});
        // user team
        setDataUsersInTeam(fetchingData);
        setTeamInfo(fetchDataTeam);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserInTeam();
  }, [params.id]);
  

  return (
    <section className="bg-[url('/images/stardewbackground.png')] bg-cover bg-center py-9">
      <h1 className="font-Mitr text-frappe text-3xl lg:text-5xl text-center my-3">
        Team {teamInfo.name}
      </h1>
      <div className="bg-chocolate w-[75%] lg:w-[80%] mx-auto p-3 rounded-2xl">
        <div className="mb-6">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[10%] lg:w-[5%]">
              <img src="/images/team.png" alt="logo team" className="w-full" />
            </div>
            <h2 className="font-Mitr text-frappe text-2xl lg:text-3xl text-center my-3">
              Players
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 justify-center items-center">
            {!isLoading ? (
              dataUsersInTeam.map((teammate) => {
                return (
                  <Card
                    infoCTA="See profile"
                    name={teammate.firstname + teammate.lastname}
                    info={teammate.role}
                    photo={teammate?.avatar || "/images/Flowey_battle_winking.webp"}
                    linkToCTA={`/profile/${teammate._id}`}
                    size="sm"
                    id={teammate._id}
                  />
                );
              })
            ) : (
              <Spinner />
            )}
          </div>
        </div>

        <div className="my-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[10%] lg:w-[5%]">
              <img src="/images/okay.png" alt="" className="w-full" />
            </div>
            <h2 className="font-Mitr text-frappe text-2xl lg:text-3xl text-center my-3">
              Favourites games
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 justify-center items-center">
            <Game name="Gris" image="/images/gris.webp" size="sm" />
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-[5%] text-light">
              <img src="/images/trophy.png" alt="" className="w-full" />
            </div>
            <h2 className="font-Mitr text-frappe text-3xl text-center my-3">
              Tournaments
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
