import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
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
  const navAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeInOut",
        delayChildren: 2.5,
      },
    },
  };
  const navItem = {
    hidden: {
      opacity: 0,
      y: "-50px",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const writingContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const writingLetters = {
    hidden: {
      opacity: 0,
      x: "-100px",
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  const TEXTDATA: string[] = ["Menu", "Home", "Contact"];
  const H1DATA: string[] = ["Yummy.", "Fast.", "Avaliable."];
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <ThemeProvider theme={theme}>
        <Header />
        <Global />
        <FirstNav variants={navAnimation} initial="hidden" animate="show">
          {TEXTDATA.map((data, idx) => (
            <FirstNavText variants={navItem} href="#" key={idx}>
              {data}
            </FirstNavText>
          ))}
        </FirstNav>
        <FirstPart>
          {/* <FirstBar src={BAR} alt="bar" /> */}
          {H1DATA.map((word, idx) => {
            return (
              <FirstH1
                style={{
                  top: `calc(100% / 3 ${
                    idx === 0 ? "- 80px" : idx === 1 ? "" : "+ 80px"
                  })`,
                }}
                key={idx}
                initial="hidden"
                animate="show"
                variants={writingContainer}
              >
                {Array.from(word).map((letter, number) => {
                  return (
                    <motion.span
                      style={{ background: "transparent" }}
                      key={number}
                      variants={writingLetters}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </FirstH1>
            );
          })}
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
