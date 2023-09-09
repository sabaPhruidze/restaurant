import styled from "styled-components";

export const FirstH1 = styled.h1`
  position: absolute;
  z-index: 2;
  font-size: 60px;
  background: transparent;
  color: ${({ theme }) => theme.white};
  left: 150px;
`;
