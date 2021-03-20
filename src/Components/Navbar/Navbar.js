import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import { logOut } from "../Login/FirebaseCode/LoginMethods";
const Navbar = () => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const handleLogOut = () => {
    setUser({
      name: "",
      email: "",
      photo: "",
    });
    logOut();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded container">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Taxi Time
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="d-flex flex-column flex-md-row ">
            <Link to="/" className="mx-3 fs-5 text-decoration-none text-dark">
              Home
            </Link>

            <Link
              className="mx-3 fs-5 text-decoration-none text-dark"
              to="/destination"
            >
              Destination
            </Link>

            <Link
              className="mx-3 fs-5 text-decoration-none text-dark"
              to="/blog"
            >
              {" "}
              Blog
            </Link>

            <Link
              className="mx-3 fs-5 text-decoration-none text-dark"
              to="/contact"
            >
              Contact
            </Link>

            {user.name || user.email ? (
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <button
                  className="btn btn-outline-warning mx-2"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
                <h6> {user.name || user.email}</h6>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => history.push("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
