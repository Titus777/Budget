import theme from "./config/theme.js";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import Home from "./Views/Home";



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
