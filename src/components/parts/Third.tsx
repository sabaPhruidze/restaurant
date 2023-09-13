import { ContainerFlexRow } from "../style/ContainerFlexRow";
import { FlexDiv } from "../style/FlexDiv";
import { FlexImage } from "../style/FlexImage";
import GARLIC from "../../assets/Img/GARLIC SHRIMP.png";

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
        <h1 style={{ marginBottom: "50px", fontSize: 40, fontWeight: 100 }}>
          Main menu
        </h1>
        {DATA.map((data) => {
          return (
            <div key={data.id} style={{ marginBottom: "20px" }}>
              <h5 style={styles}>{data.name}</h5>
              <p style={styles}>$ {data.price}</p>
              <p style={{ display: "block", fontSize: "18px" }}>
                {data.ingredient}
              </p>
            </div>
          );
        })}
      </FlexDiv>
      <FlexImage src={GARLIC} alt="garlic" />
    </ContainerFlexRow>
  );
}

export default Third;
