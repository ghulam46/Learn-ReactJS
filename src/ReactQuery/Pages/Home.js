import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data, isLoading, isError } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  // error
  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  // loading feature
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      This is the Home Page, user is <p>{data?.fact}</p>
    </h1>
  );
};
