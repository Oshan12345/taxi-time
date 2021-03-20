import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import DestinationSearch from "./Components/DestinationSearch/DestinationSearch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Footer/Footer";
import Destination from "./Components/Destination/Destination";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";

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
            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
