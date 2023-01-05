import React from "react";
import styled from "@emotion/styled";
import HtmlParser from "html-react-parser";

interface Props {
  res: string;
}

function HtmlParserBox({ res }: Props) {
  const parsingRes = HtmlParser(res);

  return <HtmlParserBoxWrap>{parsingRes}</HtmlParserBoxWrap>;
}

export default HtmlParserBox;

const HtmlParserBoxWrap = styled.p`
  width: 500px;
  height: fit-content;
`;
