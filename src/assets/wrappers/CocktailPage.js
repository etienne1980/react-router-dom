import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-block: 3rem;
    .btn {
      margin-block-end: 1rem;
    }
  }

  .img {
    border-radius: var(--borderRadius);
    max-width: 800px;
  }

  .drink-info {
    padding-block-start: 2rem;
  }

  .drink-info p {
    font-weight: 600;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }

  .drink-data {
    background-color: var(--primary-300);
    color: var(--primary-700);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    margin-right: 0.5rem;
  }

  .ing {
    margin-right: 0.2rem;
  }

  @media only screen and (min-width: 768px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 30px;
      align-items: center;
    }

    .drink-info {
      padding-block-start: 0;
    }
  }
`;

export default Wrapper;
