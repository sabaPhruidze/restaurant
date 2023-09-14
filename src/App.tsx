import { ThemeProvider } from "styled-components";

import { motion } from "framer-motion";

import Header from "./components/pieces/Header";
import { Global } from "./components/style/Global";
import ScrollProgress from "./components/pieces/ScrollProgress";
import { FirstBar } from "./components/style/FirstBar";
import { FirstNav } from "./components/style/FirstNav";
import { FirstNavText } from "./components/style/FirstNavText";
import First from "./components/parts/First";
import Second from "./components/parts/Second";
import Third from "./components/parts/Third";
import Fourth from "./components/parts/Fourth";
import Fifth from "./components/parts/Fifth";
import Sixth from "./components/parts/Sixth";
import Seventh from "./components/parts/Seventh";
import Eighth from "./components/parts/Eighth";

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

  const TEXTDATA: string[] = ["Menu", "Home", "Contact"];
  return (
    <motion.div style={{ position: "relative", zIndex: 0 }}>
      <ScrollProgress />
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
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eighth />
      </ThemeProvider>
    </motion.div>
  );
}

export default App;
