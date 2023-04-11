import { ChangeProfile } from "../../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../ReactRouter";

export const Home = () => {
  const { username } = useContext(AppContext);

  return (
    <h1>
      This is the Home Page, user is {username}
      <ChangeProfile />
    </h1>
  );
};
