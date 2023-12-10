import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages";
//
import { loader as landingLoader } from "./pages/Landing";
import { loader as cocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";
//
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//
// set up stale time = how long the query is going to be valid globally .. (all query)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // value in ms (1000 ms times 60 (1 min) * 5 minutes total time)
    },
  },
});
//
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />, // this is the global error page (used for 404)
    children: [
      {
        index: true,
        loader: landingLoader(queryClient), // passing the query client to the loader (now we invoke the landing loader)
        errorElement: <SinglePageError />, // single page error. added to have a more granular approach (see video 379)
        element: <Landing />,
      },
      {
        // setting up a route parameter to the cocktail path so that the url is not going to trigger a 404 (page not found) error. /:id is the route parameter (the name is irrelevant)
        path: "cocktail/:id",
        loader: cocktailLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        action: newsletterAction,
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* this is the de tool - default is closed */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
