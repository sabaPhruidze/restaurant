import { ContainerFlexRow } from "../style/ContainerFlexRow";
import { BGI } from "../style/BGI";
import { WhiteLineBox } from "../style/WhiteLineBox";
import { RoundSkyBall } from "../style/RoundSkyBall";
import { FifthH2 } from "../style/FifthH2";
import { Arrow } from "../style/Arrow";
import RIGHTARROW from "../../assets/Img/RIGHTARROW.svg";
import VEGANFOODS from "../../assets/Img/veganFoods.jpg";
import SALADS from "../../assets/Img/salads.jpg";
import MEAT from "../../assets/Img/Meat.jpg";

interface Data {
  id: number;
  img: string;
  marginRight: string;
  text: string;
}

function Fifth() {
  const DATA: Data[] = [
    {
      id: 1,
      img: VEGANFOODS,
      marginRight: "30px",
      text: "Vegan food",
    },
    {
      id: 2,
      img: SALADS,
      marginRight: "30px",
      text: "Salads",
    },
    {
      id: 3,
      img: MEAT,
      marginRight: "0px",
      text: "Meat",
    },
  ];
  return (
    <ContainerFlexRow style={{ height: 550, width: "100%" }}>
      {DATA.map((data) => (
        <BGI
          img={data.img}
          style={{ marginRight: `${data.marginRight}` }}
          key={data.id}
        >
          <WhiteLineBox>
            <FifthH2>{data.text}</FifthH2>
            <RoundSkyBall>
              <Arrow src={RIGHTARROW} alt="arrow" />
            </RoundSkyBall>
          </WhiteLineBox>
        </BGI>
      ))}
    </ContainerFlexRow>
  );
}

export default Fifth;
