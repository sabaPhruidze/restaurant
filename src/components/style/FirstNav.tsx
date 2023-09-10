import styled from "styled-components";
import { motion } from "framer-motion";
export const FirstNav = styled(motion.nav)`
  width: 500px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0px;
  left: 100px;
  background-color: #0000;
`;
