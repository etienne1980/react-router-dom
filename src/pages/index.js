/* alternative approach

export { default as Landing } from "./Landing";
export { default as About } from "./About";
export { default as Cocktail } from "./Cocktail";
export { default as Error } from "./Error";
export { default as Newsletter } from "./Newsletter";
export { default as HomeLayout } from "./HomeLayout";
*/

import About from "./About";
import Cocktail from "./Cocktail";
import Error from "./Error";
import HomeLayout from "./HomeLayout";
import Landing from "./Landing";
import Newsletter from "./Newsletter";
import SinglePageError from "./SinglePageError";

export {
  About,
  HomeLayout,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  SinglePageError,
};
