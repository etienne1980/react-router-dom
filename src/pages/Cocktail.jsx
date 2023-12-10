import axios from "axios";
import { useLoaderData, Link, Navigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/CocktailPage";

import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const searchSingleCocktailQuery = (id) => {
  return {
    queryKey: ["searchSingleCocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      // console.log(data);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    // <<-- the loader function gets an object which has a property of params. inside the params there is the route parameter set up in the path (I called it 'id' => see app component) which in turn was also set up in the cocktail card Link (see cocktail card component)
    const { id } = params;
    await queryClient.ensureQueryData(searchSingleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(searchSingleCocktailQuery(id));

  // this error is displayed if the url is incorrect .. say there is some error with the id and the data are not fetched
  if (!data) {
    return <Navigate to={"/"} />;
  }

  const singleDrink = data.drinks[0]; // returns an object
  // console.log(singleDrink);

  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const tempIngredients = Object.keys(singleDrink); // this returns an array with all keys from the singleDring object
  // console.log(tempIngredients);

  const validIngredients = tempIngredients.filter((item) => {
    return item.startsWith("strIngredient") && singleDrink[item] !== null;
  });

  // console.log(validIngredients.length);

  const finalIngredients = validIngredients.map((item) => {
    // console.log(item);
    return singleDrink[item];
  }); // this finally gets access to the property of the object dynamically

  // console.log(finalIngredients);

  return (
    <Wrapper>
      <header>
        <Link className='btn' to={"/"}>
          home
        </Link>
        <h3>{name}</h3>
      </header>

      <div className='drink'>
        <img className='img' src={img} alt={name} />

        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {finalIngredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item}
                  {index < finalIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
