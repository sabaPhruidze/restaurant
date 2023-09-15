import styled from "styled-components";
import { SecondH2 } from "./SecondH2";

export const FifthH2 = styled(SecondH2)`
  font-size: 28px;
  font-weight: 900;
  color: ${({ theme }) => theme.white};
  background: transparent;
`;
