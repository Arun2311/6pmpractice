import React, { useState } from "react";


let count = 0
export default function ReactForm() {

  count++
  const [name, setname] = useState("");
console.log(count);

  const handlename = (e) => {
    setname(e.target.value);
  };

  return (
    <div>
      <h1>Form </h1>

      <input onChange={handlename} placeholder="enter ur name" />

      <h1>{name}</h1>
    </div>
  );
}
