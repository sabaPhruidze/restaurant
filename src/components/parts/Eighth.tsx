import { SecondPart } from "../style/SecondPart";
import { SecondH2 } from "../style/SecondH2";
import { SecondP } from "../style/SecondP";
import { GalleryWrap } from "../style/GalleryWrap";
import { FlexImageGallery } from "../style/FlexImageGallery";
import { FirstButton } from "../style/FirstButton";
import { firstBTNAnimation } from "../parts/First";
import gallery1 from "../../assets/Img/gallery1.jpeg";
import gallery2 from "../../assets/Img/gallery2.jpeg";
import gallery3 from "../../assets/Img/gallery3.jpeg";
import gallery4 from "../../assets/Img/gallery4.jpeg";
import gallery5 from "../../assets/Img/gallery5.jpeg";
import gallery6 from "../../assets/Img/gallery6.jpeg";

function Eighth() {
  const DATA = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <>
      <SecondPart style={{ height: 200, marginBottom: 0 }}>
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
          Our Gallery
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
          With our great selection of dishes from all over the world you can
          feel yourself as a traveler and true gourmet!
        </SecondP>
      </SecondPart>
      <GalleryWrap
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
            delay: 1.5,
          },
        }}
      >
        {DATA.map((data, idx) => (
          <FlexImageGallery img={data} key={idx} />
        ))}
      </GalleryWrap>
      <SecondPart
        style={{
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px 0",
        }}
      >
        <FirstButton
          initial="hidden"
          whileInView="show"
          variants={firstBTNAnimation}
          whileHover={firstBTNAnimation.hover}
          style={{ position: "unset", height: "70px" }}
          viewport={{ once: true }}
        >
          ORDER ONLINE
        </FirstButton>
      </SecondPart>
    </>
  );
}

export default Eighth;
