import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
// import './CompanyCard.css';
import "./NavBar.css";
// import './bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import {faMugHot} from '@fortawesome/free-solid-svg-icons'

/**
 *  Renders Navigation bar with links to home, companies, jobs
 *
 *  Props: handleLogout
 *  State: None
 *  Context: User (username specifically)
 *
 */
function NavBar({ handleLogout }) {
  console.log("Entering NavBar Component");
  const { user } = useContext(UserContext);
  console.log("NavBar use context user", user);
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-2">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto">
            <NavLink className="nav-link px-4 mb-2 mb-md-0" exact to="/">
              <FontAwesomeIcon icon={faCoffee} size="xl" /> Jobly
            </NavLink>
          </ul>
          {user && (
            <ul class="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="NavBar-link nav-link px-2"
                  exact
                  to="/companies"
                >
                  Companies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="NavBar-link nav-link px-2"
                  exact
                  to="/jobs"
                  activestyle={{ color: "#F0AD4E" }}
                >
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="NavBar-link nav-link px-2"
                  exact
                  to="/profile"
                  activestyle={{ color: "#F0AD4E" }}
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="Logout-btn nav-link"
                  style={{ color: "yellow" }}
                  onClick={handleLogout}
                >
                  Logout:{user.username}
                </Link>{" "}
              </li>
            </ul>
          )}

          {!user && (
            <ul class="navbar-nav ms-auto ">
              <div className="NavBar-link">
                <NavLink
                  className="NavBar-link-login me-4 py-1"
                  style={{ color: "#C1E1C1" }}
                  exact
                  to="/login"
                  activestyle={{ color: "#F0AD4E" }}
                >
                  Login
                </NavLink>

                <NavLink
                  className="NavBar-link-signup me-4 py-1"
                  style={{ color: "yellow" }}
                  exact
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </div>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
