import styled from "styled-components";

// error page is not located in the outlet (hence, in the children of homeLayout), therefore is not going to get the style of the .page class; therefore needs to be styled from scratch

export const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 90vw;
    max-width: 600px;
    margin-bottom: 1rem;
  }

  p {
    margin: 1rem 0;
    color: var(--grey-500);
  }

  a {
    display: inline-block;
    color: var(--primary-500);
  }
`;
