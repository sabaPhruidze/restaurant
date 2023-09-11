import { motion } from "framer-motion";

import { FirstH1 } from "../style/FirstH1";
import { FirstP } from "../style/FirstP";
import { FirstPart } from "../style/FirstPart";
import { FirstButton } from "../style/FirstButton";

export const firstBTNAnimation = {
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

function First() {
  const H1DATA: string[] = ["Yummy.", "Fast.", "Avaliable."];
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

  return (
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
        reputation on big taste and bold flavors, earning it ra​ves from locals
        and travelers alike.
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
  );
}

export default First;
