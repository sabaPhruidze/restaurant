import { ContainerFlexRow } from "../style/ContainerFlexRow";
import { FlexDiv } from "../style/FlexDiv";
import { FlexImage } from "../style/FlexImage";
import WESTERN_SUNRISE from "../../assets/img/western sunrise.png";
import { motion } from "framer-motion";

interface Data {
  id: number;
  name: string;
  price: string;
  ingredient: string;
}

function Sixth() {
  const DATA: Data[] = [
    {
      id: 1,
      name: "WESTERN SUNRISE",
      price: "23.80",
      ingredient:
        "Two fried eggs with cheese & two breakfast meats made to perfection",
    },
    {
      id: 2,
      name: "CORNISH-MACKEREL",
      price: "15.50",
      ingredient: "CORNISH-MACKEREL",
    },
    {
      id: 3,
      name: "ROASTED STEAK ROULADE",
      price: "35.50",
      ingredient: "Parsley with apple cider vinegar, salt, sugar & spices",
    },
    {
      id: 4,
      name: "“COUNTRY” BREAKFAST",
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
      <FlexDiv>
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
          src={WESTERN_SUNRISE}
          alt="WESTERN_SUNRISE"
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

export default Sixth;
