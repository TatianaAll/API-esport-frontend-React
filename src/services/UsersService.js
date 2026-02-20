// Need to call my backend's API
import { callApiBackend } from "./callApiBackend";

// Login : to call the backend i need ...../users/login
export const oneUser = ({userId}) => {
  return callApiBackend.get(`/users/show/${userId}`);
};

export const allUsers = () => {
  return callApiBackend.get("/users/show");
}

export const getPlayersInTeam = ({teamId}) => {
  return callApiBackend.get(`/teams/${teamId}/players`);
}