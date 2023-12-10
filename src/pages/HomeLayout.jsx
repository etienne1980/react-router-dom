import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

// this is where we can set up the layout that is going to be shared across all children

const HomeLayout = () => {
  // this hook provides info about the state (whether is loading or idle)
  const { state } = useNavigation();

  const isLoading = state === "loading"; // this will be either true or false
  // console.log(isLoading);

  const globalValueContext = "maria";

  return (
    <>
      <Navbar />
      <section className='page'>
        {isLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={globalValueContext} />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
