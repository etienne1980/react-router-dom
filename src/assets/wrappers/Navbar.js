// css wrapper for navbar

import styled from "styled-components";

export const Wrapper = styled.nav`
  background: var(--white);

  .nav-center {
    width: var(--view-width); // 90%
    max-width: var(--max-width); //
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    /* border: 1px solid; */
  }

  .logo {
    font-size: clamp(1.5, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
    margin-block-end: 2rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
    text-transform: capitalize;
  }

  .nav-link:hover {
    color: var(--primary-500);
  }

  /* active class is automatically added to the page you are currently on */
  .active {
    color: var(--primary-500);
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      display: flex;
      flex-direction: row;
    }

    .logo {
      margin-block-end: 0;
    }
  }
`;
