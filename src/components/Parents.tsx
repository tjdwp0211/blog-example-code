import React, { useCallback, useEffect, useMemo, useState } from "react";
import GoodChild from "./GoodChild";
import TroubleChild from "./TroubleChild";

function Parents() {
  const [state, setter] = useState({ text: "state" });

  const goodChildProps = useMemo(() => "GoodChild Props", []);
  const handleClick = useCallback(() => console.log("TroubleChild Props"), []);

  useEffect(() => {
    setTimeout(
      () => setter((prev) => ({ ...prev, text: "state change" })),
      3000
    );
  }, []);

  return (
    <>
      <TroubleChild onClickProps={handleClick} />
      <GoodChild text={goodChildProps} />
    </>
  );
}

export default Parents;
