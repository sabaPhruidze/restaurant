import styled from "styled-components";
import { motion } from "framer-motion";

export const GalleryWrap = styled(motion.div)`
  width: 100%;
  height: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 180px;
`;
