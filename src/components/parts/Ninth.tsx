import { useForm } from "react-hook-form";

import { SecondPart } from "../style/SecondPart";
import { SecondH2 } from "../style/SecondH2";
import { SecondP } from "../style/SecondP";
import { Form } from "../style/Form";
import { NinthFlexColumn } from "../style/NinthFlexColumn";
import { NinthFlexRow } from "../style/NinthFlexRow";
import { Label } from "../style/Label";
import { Input } from "../style/Input";
import { TextArea } from "../style/TextArea";
import { FirstButton } from "../style/FirstButton";
// import { firstBTNAnimation } from "../parts/First";

function Ninth() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const firstBTNAnimation = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 500,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: 2,
      },
    },
  };

  return (
    <>
      <SecondPart style={{ height: "100vh", marginBottom: 0 }}>
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
          Book a Table
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
          style={{ width: 600 }}
        >
          With our great selection of dishes from all over the world you can
          feel yourself as a traveler and true gourmet!
        </SecondP>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <NinthFlexRow>
            <NinthFlexColumn>
              <Label htmlFor="phone">Phone</Label>
              <Input
                {...register("phone")}
                id="phone"
                placeholder="Enter your phone (e.g +14155552675)"
              />
            </NinthFlexColumn>
            <NinthFlexColumn>
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name")}
                id="name"
                placeholder="Enter your Name"
              />
            </NinthFlexColumn>
          </NinthFlexRow>
          <NinthFlexColumn>
            <Label htmlFor="date">Date</Label>
            <Input
              {...register("date")}
              id="date"
              style={{ width: "100%", marginBottom: 30 }}
              placeholder="MM/DD/YYYY"
            />
          </NinthFlexColumn>
          <NinthFlexColumn>
            <Label htmlFor="message">Message</Label>
            <TextArea
              {...register("message")}
              id="message"
              placeholder="Enter your message"
            />
          </NinthFlexColumn>
          <FirstButton
            initial="hidden"
            whileInView="show"
            variants={firstBTNAnimation}
            whileHover="hover"
            style={{ position: "unset", marginTop: "30px" }}
            viewport={{ once: true }}
            type="submit"
          >
            ORDER ONLINE
          </FirstButton>
        </Form>
      </SecondPart>
    </>
  );
}

export default Ninth;
