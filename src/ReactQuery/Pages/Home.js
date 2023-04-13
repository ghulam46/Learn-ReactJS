import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  return (
    <h1>
      This is the Home Page, user is <p>{data?.fact}</p>
    </h1>
  );
};
