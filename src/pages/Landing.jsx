/* react query video 399 */

/* 
  It appears that there is a need to implement React Query. Let's explore why:

  The main issue is that currently, when we perform a cocktail search, we are not caching the result. This means that if we search for the same cocktail again, we end up making another request to the server. Additionally, when we return to the home page after a search, the same request with an empty search is performed (you can verify this in the network tab).

  By implementing caching for search results (for example, caching them for at least 5 minutes), if we were to perform the same search again, we would retrieve the result instantly. This leads to several advantages: we reduce the number of requests being made, and the user experiences faster results, resulting in an overall improved user experience.
*/

/* using react query in order to fetch the drinks - to get we use useQuery() hook */
// instead of getting the drinks from the loader I will use useQuery to get the drinks in the component

import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";

const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"], // if I am searching for cocktail with an emprty search term my query key is 'search' and 'all'. if my search term is valid (say gin) the query key is search and the searchTerm
    queryFn: async () => {
      const response = await axios.get(`${cocktailUrl}${searchTerm}`);
      // console.log(response);
      return response.data.drinks;
    },
  };
};

// making it async as we ll be fetching using axios
// must return something from loader
export const loader =
  (queryClient) =>
  async ({ request }) => {
    // we use this to pull out the search term from the url
    // basically we are submitting the form and we make the request to the same page (this happens when there is no action specified in the form) and we want to access the searc value (which is represented by the input search in the search component)

    // I am building a new url using the request parameter. by doing this I will be able to get the query parameter which is located into the url
    const url = new URL(request.url);

    // getting the query parameter (which is what the user wrote into the search form (input search)). get is the name I gave to the name attrivute inside the form
    const querySearchParams = url.searchParams.get("search") || "";
    // console.log(querySearchParams);

    // the search term can be what the user wrote into the search form or an empty string (nb. in this API an empty search term will fetch anyway some cocktails)
    const searchTerm = querySearchParams || "";

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm)); // we have the await, we have the query client coming from app.jsx, ensureQueryData: checks if we have the data in the cache or not. if we do, then it is right away provided with the use query hook (down in the component). if not, we fetch it in the loader (before the page loads) and then it is provided in the component ... we do this set up in order to have the data into the loader before the page loads (this is the purpose of the loader)

    // returning from the loader an object with following properties
    return { searchTerm };
  };

const Landing = () => {
  // getting from the loader the desctuctured properties
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
