// VIDEO 394

// this is about handling post request with react router dom library
// vite does not know how to handle post request, for this reason I am going to use the Form component provided from react dom library. it provides access to the form data api directly

import axios from "axios";
import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

// in order to get access to the values of the form I can use the formData function which is located into the request parameter inside the action function below

// action in the context of html form is where you are going to send the values got from the form
export const action = async ({ request }) => {
  console.log(request);

  const formData = await request.formData(); //getting the form data function

  // I need to send the data to the server and then I need to conver it into an object (json like format)
  const data = Object.fromEntries(formData);

  // using try catch block in order to handle the possible error
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);

    toast.success(response.data.msg);

    return redirect("/"); // <<-- redirect comes from the react router dom and it ships the user to the home page after he signs up to the newsletter
  } catch (error) {
    // this set up is to handle the error directly ..without displaying the error page (say if the user does not provide the name there is no need to ship the user to the error page .. the user experience is better if the error is handled this way)
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const { state } = useNavigation();
  // console.log(navigation);
  const isSubmitting = state === "submitting";

  return (
    <Form className='form' method='POST'>
      <h4>sign up to our newsletter</h4>

      {/* name */}
      <div className='form-row'>
        <label className='form-label' htmlFor='name'>
          name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-input'
          // defaultValue='john'
          required
        />
      </div>

      {/* lastname  */}
      <div className='form-row'>
        <label className='form-label' htmlFor='lastName'>
          lastname
        </label>
        <input
          type='text'
          name='lastName'
          className='form-input'
          // defaultValue='smith'
          required
        />
      </div>

      {/* email  */}
      <div className='form-row'>
        <label className='form-label' htmlFor='name'>
          email
        </label>
        <input
          type='email'
          name='email'
          className='form-input'
          defaultValue='test@test.com'
          required
        />
      </div>

      <button className='btn btn-block' type='submit' disabled={isSubmitting}>
        {isSubmitting ? "submitting form" : "submit"}
      </button>
    </Form>
  );
};

/* 

  step.1
  set up the form structure using the form component provided by react router dom library
  step.2
  set up the method (post to create the resource on the server)
  step.3
  set up the action: export it and import it in the app component. set up the action property into the newsletter route. then set up the action: must be async. make the axios post request

*/

export default Newsletter;
