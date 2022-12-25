import React from "react";

interface TroubleChildProps {
  onClickProps: () => void;
}

function TroubleChild({ onClickProps }: TroubleChildProps) {
  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} onClick={onClickProps}>
          말썽만 무려 {i}번째...
        </div>
      ))}
    </>
  );
}

export default React.memo(TroubleChild);
