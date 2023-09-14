import styled from "styled-components";
import { motion } from "framer-motion";
export const FlexImageGallery = styled(motion.div)<{ img: string }>`
  width: 360px;
  height: 360px;
  background-size: cover;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
