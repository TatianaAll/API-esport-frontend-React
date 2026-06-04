import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { specificTournament } from "../services/TournamentsService";
import Spinner from "../components/Spinner";

function TournamentDetail() {
  let params = useParams();
  console.log(params);

  const [dataTournament, setDataTournament] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const fetching = await specificTournament({tournament_id: params.tournament_id});
        setDataTournament(fetching);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTournament();
  }, [params.tournament_id]);
console.log(dataTournament);
  if (isLoading) return <Spinner />;

  return (
    <div>{dataTournament.name}</div>
  )
}

export default TournamentDetail