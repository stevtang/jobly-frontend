import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import image from "./pexels-pixabay-434337.jpg"

/**
 *  Handles user login by providing form data to a submission handling
 * function
 *
 *  Props: handleLogin (fn)
 *  State:
 *  - formSubmitted: boolean. Triggers redirect after submission of formData
 *  - formData: like {username, password}
 *  - isError: holds error array returned by backend for display
 *
 */
function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log("Login formData", formData);

  const [formSubmitted, setFormSubmitted] = useState(false);
  // CR: rename isError to errors
  const [isError, setIsError] = useState(null);

  async function handleSubmission(evt) {
    evt.preventDefault();
    
    try {
      await handleLogin(formData);
      setFormSubmitted(true);
    } catch (error) {
      setIsError(error);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  if (formSubmitted) {
    return <Redirect push to="/companies" />;
  }

  return (

    <div className="bg-image d-flex align-items-center" style={{
      "background-image":
      `url(${image})`,
      height: "95vh",
      
    }}>
      
    <form className="LoginForm mx-auto" onSubmit={handleSubmission}>
      <div>
        {isError && isError.map((e, i) => <p key={i}>{e}</p>)}
        <div>
          <label htmlFor="username">Username</label>
        </div>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      
      <button className="btn btn-sm btn-dark m-4 pt-1 pb-1">Submit</button>
    </form>
    </div>

  );
}

export default LoginForm;
