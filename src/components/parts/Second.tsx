import { motion } from "framer-motion";

import { firstBTNAnimation } from "../parts/First";
import { SecondPart } from "../style/SecondPart";
import { SecondH2 } from "../style/SecondH2";
import { SecondP } from "../style/SecondP";
import { FirstButton } from "../style/FirstButton";

function Second() {
  return (
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
        feast experience in our restaurant! Here you will dive into a friendly
        and romantic atmosphere and enjoy our haute cuisine. With our great
        selection of dishes from all over the world you can feel yourself as a
        traveler and true gourmet!
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
  );
}

export default Second;
