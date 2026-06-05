// Need to call my backend's API
import { callApiBackend } from "./callApiBackend";

// Login : to call the backend i need ...../users/login
export const allTeams = () => {
  return callApiBackend.get("/teams");
};

export const getTeam = ({ teamId }) => {
  return callApiBackend.get(`/teams/${teamId}`);
};

export const lastTournament = () => {
  return callApiBackend.get("/teams/latest");
};

export const searchTeams = (search) => {
  return callApiBackend.get("/teams/search", { search });
};

// create team
export const createTeam = (name, favorite_game, nationality, token) => {
  return callApiBackend.post(
    "/teams/",
    {
      name,
      favorite_game,
      nationality,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  );
};
