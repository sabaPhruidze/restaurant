import styled from "styled-components";
import { motion } from "framer-motion";
export const FirstH1 = styled(motion.h1)`
  position: absolute;
  z-index: 2;
  font-size: 60px;
  background: transparent;
  color: ${({ theme }) => theme.white};
  left: 150px;
`;
