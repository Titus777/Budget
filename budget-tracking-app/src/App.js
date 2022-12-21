import theme from "./config/theme.js";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import Home from "./Views/Home";
import Header from "./Components/Header"
import Expenses from "./Views/Expenses.js";
import Login from "./Views/Login.js";
import Bills from "./Views/Bills"


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header/>
        <Bills/>
      </ThemeProvider>
    </div>
  );
}

export default App;
