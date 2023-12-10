import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error.message);
  // this error is not the 404 (page not found error). this error is going to fire when the loader function does not return anything (remember that the loader function has to always return something .. even null)

  return <div>{error.message}</div>;
};

export default SinglePageError;
