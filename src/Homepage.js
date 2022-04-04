import { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import "./Homepage.css";
import image from "./pexels-pixabay-434337.jpg"
// import { Alert } from 'react-bootstrap';

// import { Link } from '@chakra-ui/react'

/**
 *  Renders Jobly homepage
 *
 *  Props: None
 *  State: None
 *  Context: User (username specifically)
 *
 */
function Homepage() {
  console.log("Entering Homepage Component");
  const { user } = useContext(UserContext);

  return (
    <div className="Homepage">
      <div className="Homepage">
        {!user && 
        <div>
        <div
          class="bg-image d-flex align-items-center"
          style={{
            "background-image":
            `url(${image})`,
            height: "95vh",
          }}
        ><h1 className="mx-auto ">Welcome to Jobly!</h1></div>
        
        </div>
        
        }
        {user && (
          <div>
            <div
              class="bg-image d-flex align-items-center"
              style={{
                "background-image":
                `url(${image})`,
                height: "95vh",
              }}
            >
              <h1 class="mx-auto">
                Welcome {user.username}!
              </h1>
            </div>
          </div>
        )}

        {/* {!user && <div>
          
          <div class="form-group">
    &nbsp;
      </div>
          <div className="control-group">
          <Link className="Homepage-login-btn btn btn-info me-2 py-1 mt-4"to="/login">
            Login
          </Link>
          
          <Link className="Homepage-signup-btn btn btn-warning me-1 py-1 mt-4" to="/signup">
            Sign Up
          </Link>
          </div>
        </div>} */}
      </div>
    </div>
  );
}

export default Homepage;
