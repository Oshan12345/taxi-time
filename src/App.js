import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import DestinationSearch from "./Components/DestinationSearch/DestinationSearch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
//import SignUp from "./Components/Login/SignUp";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    photo: "",
  });
  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Navbar />
          <Switch>
            <PrivateRoute path="/search-destination/:vehicle">
              <DestinationSearch />
            </PrivateRoute>

            <Route path="/login" component={Login} />
            {/* <Route path="/signup" component={SignUp} /> */}

            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
