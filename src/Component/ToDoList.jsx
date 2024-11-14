import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ToDoList() {
  const [inputdata, setinputdata] = useState("");
  const [apidata, setapidata] = useState([]);

  const handleinput = (e) => {
    setinputdata(e.target.value);
  };

  const handlefetch = async () => {
    let res = await axios.get("http://localhost:3000/todoList");

    setapidata(res.data);
  };

  useEffect(()=>{
    handlefetch()
  },[])


  const handlepost  =async ()=>{

    let body = {
        task :inputdata
    }


    let res =  await axios.post("http://localhost:3000/todoList" ,body)

    handlefetch()
  }

  return (
    <div>
      <h1>CRUD</h1>

      <input onChange={handleinput} placeholder="enter u r task" />

      <button onClick={handlepost}>Add</button>

      <div>
        {apidata.map((da) => (
          <div>
            <h1>{da.task}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
