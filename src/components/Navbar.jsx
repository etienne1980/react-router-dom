import { NavLink } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <ul className='nav-center'>
        <span className='logo'>Mixology class</span>

        <div className='nav-links'>
          <NavLink to={"/"} className='nav-link'>
            Home
          </NavLink>
          <NavLink to={"/about"} className='nav-link'>
            About
          </NavLink>
          <NavLink to={"/newsletter"} className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
