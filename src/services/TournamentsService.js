// Need to call my backend's API
import { callApiBackend } from "./callApiBackend";

// Login : to call the backend i need ...../users/login
export const allTournaments = () => {
  return callApiBackend.get("/tournaments/");
};

export const lastTournament = () => {
  return callApiBackend.get("/tournaments/latest");
};

// create a new tournament
export const createTournament = (
  name,
  place_name,
  capacity,
  start_date,
  end_date,
  status,
  specialized_game,
  token,
) => {
  return callApiBackend.post(
    "/tournaments/",
    {
      name,
      place_name,
      capacity,
      start_date,
      end_date,
      status,
      specialized_game,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  );
};
