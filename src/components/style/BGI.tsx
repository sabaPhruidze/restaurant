import styled from "styled-components";

export const BGI = styled.div<{ img: string }>`
  width: calc(100% / 3 - 100px - 60px);
  height: 375px;
  background-size: cover;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
