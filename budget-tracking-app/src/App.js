import theme from "./config/theme.js";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import Home from "./Views/Home";
import Expenses from "./Views/Expenses.js";



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Expenses/>
      </ThemeProvider>
    </div>
  );
}

export default App;
