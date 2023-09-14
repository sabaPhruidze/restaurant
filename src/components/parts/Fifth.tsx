import { ContainerFlexRow } from "../style/ContainerFlexRow";
import { BGI } from "../style/BGI";
import { WhiteLineBox } from "../style/WhiteLineBox";
import VEGANFOODS from "../../assets/Img/veganFoods.jpg";
import SALADS from "../../assets/Img/salads.jpg";
import MEAT from "../../assets/Img/Meat.jpg";
function Fifth() {
  return (
    <ContainerFlexRow style={{ height: 550, width: "100%" }}>
      <BGI img={VEGANFOODS} style={{ marginRight: "30px" }}>
        <WhiteLineBox />
      </BGI>
      <BGI img={SALADS} style={{ marginRight: "30px" }} />
      <BGI img={MEAT} />
    </ContainerFlexRow>
  );
}

export default Fifth;
