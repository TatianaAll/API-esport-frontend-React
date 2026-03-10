// Need to call my backend's API
import { callApiBackend } from "./callApiBackend";

// Login : to call the backend i need ...../users/login
export const allGames = () => {
  return callApiBackend.get("/games/");
};

export const createGame = (
  name,
  release_date,
  genre,
  platform,
  publisher,
  max_player,
  token,
) => {
  return callApiBackend.post(
    "/games/",
    { name, release_date, genre, platform, publisher, max_player },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
