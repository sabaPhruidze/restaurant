import { ThemeProvider } from "styled-components";

import Header from "./components/pieces/Header";
import { Global } from "./components/style/Global";
import { FirstPart } from "./components/style/FirstPart";
import { FirstBar } from "./components/style/FirstBar";
import { FirstNav } from "./components/style/FirstNav";

import BAR from "./assets/Img/BARS.svg";

interface Theme {
  white: string;
  button: string;
  grey: string;
}

const theme: Theme = {
  white: "#ffffff",
  button: "#70bee8",
  grey: "#f2f2f2",
};
function App() {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <ThemeProvider theme={theme}>
        <Header />
        <Global />
        <FirstNav>
          <div style={{ background: "transparent" }}>ferwgerger</div>
          <div style={{ background: "transparent" }}>ferwgerger</div>
          <div style={{ background: "transparent" }}>ferwgerger</div>
        </FirstNav>
        <FirstPart>
          <FirstBar src={BAR} alt="bar" />
        </FirstPart>
      </ThemeProvider>
    </div>
  );
}

export default App;
