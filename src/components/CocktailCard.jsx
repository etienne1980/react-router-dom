import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";

const CocktailCard = ({ name, img, glass, id, info }) => {
  //   console.log(prop);

  return (
    <Wrapper>
      <div className='img-container'>
        <img className='img' src={img} alt='#' />
      </div>

      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link className='btn' to={`/cocktail/${id}`}>
          detail
        </Link>
      </div>
    </Wrapper>
  );
};

// when setting up the link... if I click on it I ll be redirected to the 404 page. why, because the link goes to the http://localhost:5173/cocktail/13196 page and at the moment that page does not exist ( I mean it exist only http://localhost:5173/cocktail without the id. parameter. to fix it I need to)

const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);

  :hover {
    box-shadow: var(--shadow-4);
  }

  img {
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }

  .footer {
    padding: 1.5rem;

    h4,
    h5 {
      margin-bottom: 0.5rem;
    }

    h4 {
      font-weight: 700;
    }

    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;
export default CocktailCard;
