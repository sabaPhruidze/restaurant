import styled from "styled-components";
import { motion } from "framer-motion";

export const WhiteLineBox = styled(motion.div)`
  width: 254px;
  height: 254px;
  border: 8px solid ${({ theme }) => theme.white};
  background-color: #0000006d;
`;
