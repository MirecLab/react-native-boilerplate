import { createContext } from "react";
import UserInfo from "../types/UserInfo";

const UserContext = createContext(null as UserInfo);

export default UserContext
