import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
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
  const { register, reset } = useForm();
  const formRef = useRef<any>("");
  const onSubmit = (data: any) => {
    data.preventDefault();
    emailjs
      .sendForm(
        "service_nglktv8",
        "template_hkzr4jy",
        formRef.current,
        "Uq7zxKXdTMwbm8ZHu"
      )
      .then(
        () => reset(),
        (error) => {
          console.log(error);
        }
      );
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
        delay: 3,
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
        <Form
          ref={formRef}
          onSubmit={(e: any) => onSubmit(e)}
          initial={{ opacity: 0, x: "-30px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 2,
            },
          }}
        >
          <NinthFlexRow>
            <NinthFlexColumn>
              <Label htmlFor="phone">Phone</Label>
              <Input
                {...register("phone", { required: true })}
                id="phone"
                placeholder="Enter your phone (e.g +14155552675)"
              />
            </NinthFlexColumn>
            <NinthFlexColumn>
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name", { required: true })}
                id="name"
                placeholder="Enter your Name"
              />
            </NinthFlexColumn>
          </NinthFlexRow>
          <NinthFlexColumn>
            <Label htmlFor="date">Date</Label>
            <Input
              {...register("date", { required: true })}
              id="date"
              style={{ width: "100%", marginBottom: 30, color: "#6e6e6e" }}
              placeholder="MM/DD/YYYY"
              type="date"
            />
          </NinthFlexColumn>
          <NinthFlexColumn>
            <Label htmlFor="message">Message</Label>
            <TextArea
              {...register("message", { required: true })}
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
