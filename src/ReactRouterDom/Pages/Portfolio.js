import { useContext } from "react";
import { AppContext } from "../ReactRouter";

export const Portfolio = () => {
  const { username } = useContext(AppContext);
  return <h1>This is the Portfolio Page, and user is {username} </h1>;
};
