import theme from "./config/theme.js";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Home from "./Views/Home";
import Header from "./Components/Header"
import Expenses from "./Views/Expenses.js";
import Login from "./Views/Login.js";
import Bills from "./Views/Bills"
import Protected from "./Components/Protected.js";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header/>
        <Switch>
          <Protected exact path="/">
            <Home/>
          </Protected>
          <Protected path="/bills">
            <Bills/>
          </Protected>
          <Protected path="/expens">
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
