import theme from "./config/theme.js";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import {
  Switch,
  Route,
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


function App() {
  const app = initializeApp(firebaseConfig);
  const {isAuthenticated} = useAuth()
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header/>
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
