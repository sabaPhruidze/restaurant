import styled from "styled-components";
import { motion } from "framer-motion";

export const RoundSkyBall = styled(motion.div)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.button};
  display: flex;
  align-items: center;
  justify-content: center;
`;
