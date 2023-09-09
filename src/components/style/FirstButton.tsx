import styled from "styled-components";

export const FirstButton = styled.button`
  width: 220px;
  height: 70px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.button};
  position: absolute;
  z-index: 2;
  top: calc(100% / 3 + 80px + 60px + 50px + 80px + 20px);
  left: 150px;
  border: 0px;
  outline: 0px;
  border-radius: 30px;
  font-weight: 900;
  font-size: 16px;
`;
