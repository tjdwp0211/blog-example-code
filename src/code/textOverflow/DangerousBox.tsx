import React from "react";
import styled from "@emotion/styled";

interface Props {
  res: string;
}

function DangerousBox({ res }: Props) {
  return (
    <WrongBoxWrap
      dangerouslySetInnerHTML={{
        __html: res,
      }}
    />
  );
}

export default DangerousBox;

const WrongBoxWrap = styled.p`
  width: 500px;
  height: fit-content;
`;
