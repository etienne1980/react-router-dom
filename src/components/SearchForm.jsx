import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

/* 

  - when the form is submitted a GET request is going to be fired (method = get)
  - the url is going to show a key value pair represented by the name attribute and the value of the input

  now, where are we handling the request??????? well, the answer is that we are handling the request into the landing page (where all cocktails are fetched)
  
*/

const SearchForm = ({ searchTerm }) => {
  const { state } = useNavigation();
  // console.log(state);

  const isSubmitting = state === "submitting";

  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          className='form-input'
          name='search' // this value is going to appear in the url as query string parameter
          defaultValue={searchTerm}
        />
        <button className='btn' type='submit' disabled={isSubmitting}>
          {isSubmitting ? "searching" : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
