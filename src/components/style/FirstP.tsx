import styled from "styled-components";
import { motion } from "framer-motion";
export const FirstP = styled(motion.p)`
  position: absolute;
  z-index: 2;
  font-size: 18px;
  background: transparent;
  color: white;
  left: 150px;
  top: calc(100% / 3 + 80px + 60px + 50px);
  width: 500px;
  height: 80px;
`;
