import { createContext } from "react";

// create a context to know if the user is connected or not
const CurrentUserContext = createContext(null);

export default CurrentUserContext;