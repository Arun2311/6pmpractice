import React, { useEffect, useState } from "react";

export default function ApiCallWithBtn() {
  const [apidata, setapidata] = useState([]);

  const [count, setcount] = useState(0);

  const handlefetch = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setapidata(data);
    console.log("A");
  };

  useEffect(() => {
    handlefetch();

    return () => {
      console.log("carrrr");
    };

  }, [count]);

  const handleadd  = () =>{
    setcount(count+1)
  }

  return (
    <div>
      <h1>Api call - {count }</h1>


      <button onClick={handleadd}>add</button>
      {apidata.map((da,i) => (
        <div key={i}>
          <img height={200} width={200} src={da.image} />
          <h1>{da.title}</h1>
          <p>{da.price}</p>
        </div>
      ))}
    </div>
  );
}

// lifecycle

// born  mountong
// live   updating
// die   unmounting
