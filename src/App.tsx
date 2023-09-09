import { ThemeProvider } from "styled-components";

import Header from "./components/pieces/Header";
import { Global } from "./components/style/Global";
import { FirstPart } from "./components/style/FirstPart";
import { FirstBar } from "./components/style/FirstBar";
import { FirstNav } from "./components/style/FirstNav";
import { FirstNavText } from "./components/style/FirstNavText";
import { FirstH1 } from "./components/style/FirstH1";
import { FirstP } from "./components/style/FirstP";
import { FirstButton } from "./components/style/FirstButton";

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
          <FirstNavText href="#">Menu</FirstNavText>
          <FirstNavText href="#">Home</FirstNavText>
          <FirstNavText href="#">Contact</FirstNavText>
        </FirstNav>
        <FirstPart>
          <FirstBar src={BAR} alt="bar" />
          <FirstH1 style={{ top: "calc(100% / 3 - 80px)" }}>Yummy.</FirstH1>
          <FirstH1 style={{ top: "calc(100% / 3)" }}>Fast.</FirstH1>
          <FirstH1 style={{ top: "calc(100% / 3 + 80px)" }}>Avaliable.</FirstH1>
          <FirstP>
            Open for over 15 years, our restaurant near LAX has built a strong
            reputation on big taste and bold flavors, earning it ra​ves from
            locals and travelers alike.
          </FirstP>
          <FirstButton>ORDER ONLINE</FirstButton>
        </FirstPart>
      </ThemeProvider>
    </div>
  );
}

export default App;
