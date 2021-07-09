import React from "react";
import "./App.css";
import { motion } from "framer-motion"; 


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <motion.div
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
    >
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
        </Switch>
      </Router>
    </motion.div>
  );
}

export default App;
