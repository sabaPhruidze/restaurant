import { ContainerFlexRow } from "../style/ContainerFlexRow";
import { FlexDiv } from "../style/FlexDiv";
import { FlexImage } from "../style/FlexImage";
import GARLIC from "../../assets/Img/GARLIC SHRIMP.png";
import { motion } from "framer-motion";

interface Data {
  id: number;
  name: string;
  price: string;
  ingredient: string;
}

function Third() {
  const DATA: Data[] = [
    {
      id: 1,
      name: "GARLIC SHRIMP & TONNARELLI PASTA",
      price: "19.99",
      ingredient:
        "Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce",
    },
    {
      id: 2,
      name: "GRILLED HANGER STEAK",
      price: "25.50",
      ingredient:
        "Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce",
    },
    {
      id: 3,
      name: "PAN ROASTED ‘FLORIDA KEYS’ MAHI MAHI",
      price: "15.50",
      ingredient:
        "Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce",
    },
    {
      id: 4,
      name: "GRILLED FREE RANGE CHICKEN SALAD",
      price: "19.99",
      ingredient:
        "Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers",
    },
    {
      id: 5,
      name: "GRILLED BBQ BABY BACK RIBS",
      price: "23.00",
      ingredient: "Hibiscus sweet ranch coleslaw, hand cut fries ",
    },
  ];
  const styles = {
    display: "block",
    fontSize: "18px",
    marginBottom: "10px",
  };
  return (
    <ContainerFlexRow>
      <FlexDiv>
        <motion.h1
          style={{ marginBottom: "50px", fontSize: 40, fontWeight: 100 }}
          initial={{
            y: "-30px",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          Main menu
        </motion.h1>
        {DATA.map((data, index) => {
          return (
            <motion.div
              key={data.id}
              style={{ marginBottom: "20px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index + 1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <h5 style={styles}>{data.name}</h5>
              <p style={styles}>$ {data.price}</p>
              <p style={{ display: "block", fontSize: "18px" }}>
                {data.ingredient}
              </p>
            </motion.div>
          );
        })}
      </FlexDiv>
      <FlexDiv>
        <FlexImage
          src={GARLIC}
          alt="garlic"
          initial={{ opacity: 0, x: "300px", y: "300px" }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 5, duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          dragElastic={0.8}
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        />
      </FlexDiv>
    </ContainerFlexRow>
  );
}

export default Third;
