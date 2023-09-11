import { ThemeProvider } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/pieces/Header";
import { Global } from "./components/style/Global";
import { FirstPart } from "./components/style/FirstPart";
import { FirstBar } from "./components/style/FirstBar";
import { FirstNav } from "./components/style/FirstNav";
import { FirstNavText } from "./components/style/FirstNavText";
import { FirstH1 } from "./components/style/FirstH1";
import { FirstP } from "./components/style/FirstP";
import { FirstButton } from "./components/style/FirstButton";
import { SecondPart } from "./components/style/SecondPart";
import { SecondH2 } from "./components/style/SecondH2";
import { SecondP } from "./components/style/SecondP";

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
  const firstPAnimaiton = {
    hidden: {
      opacity: 0,
      x: "-200px",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2.5,
        duration: 1,
      },
    },
  };
  const firstBTNAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    hover: {
      scale: 1.3,
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
          <FirstP initial="hidden" animate="show" variants={firstPAnimaiton}>
            Open for over 15 years, our restaurant near LAX has built a strong
            reputation on big taste and bold flavors, earning it ra​ves from
            locals and travelers alike.
          </FirstP>
          <FirstButton
            initial="hidden"
            animate="show"
            variants={firstBTNAnimation}
            whileHover={firstBTNAnimation.hover}
          >
            ORDER ONLINE
          </FirstButton>
        </FirstPart>
        <SecondPart>
          <SecondH2
            initial={{
              x: "-400px",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
          >
            Modern approach to classic recipes
          </SecondH2>
          <SecondP
            initial={{
              x: "-400px",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 1.5,
              },
            }}
            viewport={{ once: true }}
          >
            We welcome you to a delicious feast of exquisite dishes. With a wide
            range of world cuisines to choose from, we guarantee you a sumptuous
            feast experience in our restaurant! Here you will dive into a
            friendly and romantic atmosphere and enjoy our haute cuisine. With
            our great selection of dishes from all over the world you can feel
            yourself as a traveler and true gourmet!
          </SecondP>
          <FirstButton
            initial="hidden"
            whileInView="show"
            variants={firstBTNAnimation}
            whileHover={firstBTNAnimation.hover}
            style={{ position: "unset" }}
            viewport={{ once: true }}
          >
            ORDER ONLINE
          </FirstButton>
        </SecondPart>
      </ThemeProvider>
    </div>
  );
}

export default App;
