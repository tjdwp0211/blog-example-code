import React from "react";
import styled from "@emotion/styled";

interface GoodChildProps {
  text: string;
}

function GoodChild({ text }: GoodChildProps) {
  return <GoodChildWrap>{text}</GoodChildWrap>;
}

export default React.memo(GoodChild);

const GoodChildWrap = styled.div`
  background-color: #f76565;
  width: 150px;
  height: 150px;
`;
