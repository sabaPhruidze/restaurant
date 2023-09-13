import styled from "styled-components";

import React from "react";

function ContainerFlexRow() {
  const Container = styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;
  return <Container />;
}

export default ContainerFlexRow;
