import { Link, useRouteError } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/ErrorPage";
import errorImg from "../assets/not-found.svg";

const Error = () => {
  // potentially, there could be different errors (like 404 or else), hence, I want to display the 404 error (page not found) only when the actual error is a 404 one. in order to do that, I can use the useRouteError to pull up the status property and then set up a condition. this error is triggered when the user types a wrong url
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    // page not found
    return (
      <Wrapper>
        <div>
          <img src={errorImg} alt='404 error image' />
          <h3>oops!!</h3>
          <p>we did not find the page that you were looking for</p>
          <Link to={"/"}>go back home</Link>
        </div>
      </Wrapper>
    );
  } else {
    return <Wrapper>Something went wrong (not 404) ...</Wrapper>;
  }
};

export default Error;
