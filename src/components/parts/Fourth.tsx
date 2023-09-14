import { ContainerFlexRow } from "../style/ContainerFlexRow";
import { FlexDiv } from "../style/FlexDiv";
import { FlexImage } from "../style/FlexImage";
import CHICKENLIVERPARFAIT from "../../assets/Img/HICKEN LIVER PARFAIT.png";
import { motion } from "framer-motion";
import { FlexDivFourth } from "../style/FlexDivFourth";

interface Data {
  id: number;
  name: string;
  price: string;
  ingredient: string;
}

function Fourth() {
  const DATA: Data[] = [
    {
      id: 1,
      name: "C HICKEN LIVER PARFAIT",
      price: "23.80",
      ingredient:
        "Chicken, onion, vegetable oil, Sour cream sauce, pepper, salt",
    },
    {
      id: 2,
      name: "ITALIAN TASTING PLATTER",
      price: "25.50",
      ingredient:
        "Three Italian Favorites: Baked Clams, Fried Calamari and Stuffed Shrimp",
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
      name: "CRAB CONGEE",
      price: "19.99",
      ingredient: "Biscuits with fresh sausage patties & country gravy",
    },
    {
      id: 5,
      name: "SALT AND PEPPER CALAMARI",
      price: "23.00",
      ingredient: "Rocket, lime, chipotle aioli ",
    },
  ];
  const styles = {
    display: "block",
    fontSize: "18px",
    marginBottom: "10px",
  };
  return (
    <ContainerFlexRow>
      <FlexDivFourth>
        <FlexImage
          src={CHICKENLIVERPARFAIT}
          alt="CHICKEN LIVER PARFAIT"
          initial={{ opacity: 0, x: "-300px", y: "-300px" }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          dragElastic={0.8}
          drag
          dragConstraints={{ left: 0, top: 40, right: 50, bottom: 40 }}
        />
      </FlexDivFourth>
      <FlexDivFourth>
        {DATA.map((data, index) => {
          return (
            <motion.div
              key={data.id}
              style={{ marginBottom: "20px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index + 2.5,
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
      </FlexDivFourth>
    </ContainerFlexRow>
  );
}

export default Fourth;
