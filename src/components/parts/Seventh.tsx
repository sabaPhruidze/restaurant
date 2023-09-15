import { ContainerFlexRow } from "../style/ContainerFlexRow";
import { FlexImage } from "../style/FlexImage";
import CORNISH_MACKEREL from "../../assets/Img/cornish-mackerel.png";
import { motion } from "framer-motion";
import { FlexDivFourth } from "../style/FlexDivFourth";

interface Data {
  id: number;
  name: string;
  price: string;
  ingredient: string;
}

function Seventh() {
  const DATA: Data[] = [
    {
      id: 1,
      name: "CORNISH-MACKEREL",
      price: "15.50",
      ingredient:
        "Cornish mackerel, marinated tomatoes, fragrant curry, tamarillo",
    },
    {
      id: 2,
      name: "ROASTED STEAK ROULADE",
      price: "35.50",
      ingredient: "Parsley with apple cider vinegar, salt, sugar & spices",
    },
    {
      id: 3,
      name: "SALT AND PEPPER CALAMARI",
      price: "23.00",
      ingredient: "Rocket, lime, chipotle aioli",
    },
    {
      id: 4,
      name: "CRAB CONGEE",
      price: "19.99",
      ingredient: "Biscuits with fresh sausage patties & country gravy",
    },
    {
      id: 5,
      name: "WESTERN SUNRISE",
      price: "23.80",
      ingredient:
        "Two fried eggs with cheese & two breakfast meats made to perfection ",
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
          src={CORNISH_MACKEREL}
          alt="CORNISH_MACKEREL"
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

export default Seventh;
