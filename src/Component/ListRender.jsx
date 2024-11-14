import React ,{useState}from "react";

function ListRender() {

  
  const [data, setdata] = useState([
    {
      name: "Arun",
      age: 25,
      carimg:
        "https://s7ap1.scene7.com/is/image/tatamotors/CosmicGold-right?$VH-708-500-D$&fit=crop&fmt=webp-alpha",
    },
    {
      name: "omprakash",
      age: 20,
      carimg:
        "https://media.zigcdn.com/media/model/2024/Aug/front-1-4-left-827191965_600x400.jpg",
    },
    {
      name: "kaviya",
      age: 22,
      carimg:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/tata-altroz-racer-r11717784106428.jpg?q=80",
    },
    {
      name: "vasanth",
      age: 23,
      carimg:
        "https://s7ap1.scene7.com/is/image/tatamotors/nexon-banner-2024?$BA-1920-925-D$&fit=crop&fmt=webp",
    },
  ]);



  return (
    <div>
      <h1>List Render</h1>

      {data.map((da) => (
        <div>
          <h1>{da.name}</h1>
          <img height={200} width={200} src={da.carimg} />
        </div>
      ))}
    </div>
  );
}

export default ListRender;
