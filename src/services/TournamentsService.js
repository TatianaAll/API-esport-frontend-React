// Need to call my backend's API
import { callApiBackend } from "./callApiBackend";

// Login : to call the backend i need ...../users/login
export const allTournaments = () => {
  return callApiBackend.get("/tournaments");
};

export const lastTournament = () => {
  return callApiBackend.get("/tournaments/latest");
}