import styled from "styled-components";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  //   console.log(drinks);

  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>
        No matching cocktails found - check your search please
      </h4>
    );
  }

  //   getting the needed properties
  const formattedDrinks = drinks.map((item) => {
    //
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    //
    return {
      id: idDrink,
      name: strDrink,
      img: strDrinkThumb,
      glass: strGlass,
      info: strAlcoholic,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        // formattedDrinks variable is an array with objects inside
        // console.log(item);
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-block-start: 3rem;
`;

export default CocktailList;
