import { useEffect } from "react";
import theme from "./config/theme.js";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Home from "./Views/Home";
import Header from "./Components/Header"
import Expenses from "./Views/Expenses.js";
import Login from "./Views/Login.js";
import Bills from "./Views/Bills"
import Protected from "./Components/Protected.js";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase.js";
import useAuth from "./services/firebase/useAuth.js";
import NotificationContainer from "react-notifications"


function App() {
  const history = useHistory()
  const app = initializeApp(firebaseConfig);
  const {isAuthenticated} = useAuth()

  useEffect(() =>{
    if(isAuthenticated) {
      history.push('/')
      return
    }
    return
  },[isAuthenticated])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header authenticated={isAuthenticated}/>
        <NotificationContainer/>
        <Switch>
          <Protected exact path="/" authenticated={isAuthenticated}>
            <Home/>
          </Protected>
          <Protected path="/bills" authenticated={isAuthenticated}>
            <Bills/>
          </Protected>
          <Protected path="/expens" authenticated={isAuthenticated}>
            <Expenses/>
          </Protected>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
