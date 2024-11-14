import React, { useState } from "react";

function CountComp() {
  const [count, setcount] = useState(1);

  const handleadd = () => {
    setcount(count + 1);
  };

  const handlesub = () => {
    if (count === 0) {
      setcount(0);
    } else {
      setcount(count - 1);
    }
  };

  return (
    <>
      <h3>CountComp - {count}</h3>

      <button onClick={handleadd}>Add</button>

      <button onClick={handlesub}>Minus</button>
    </>
  );
}

export default CountComp;
