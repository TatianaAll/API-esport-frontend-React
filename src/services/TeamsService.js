// Need to call my backend's API
import { callApiBackend } from "./callApiBackend";

// Login : to call the backend i need ...../users/login
export const allTeams = () => {
  return callApiBackend.get("/teams");
};

export const lastTournament = () => {
  return callApiBackend.get("/teams/latest");
}