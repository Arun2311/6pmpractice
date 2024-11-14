import React, { Suspense, useState } from "react";

import OmComp from "./Component/OmComp";
import ListRender from "./Component/ListRender";
import ApiCallWithBtn from "./Component/ApiCallWithBtn";
import ReactForm from "./Component/ReactForm";
import HookForm from "./Component/HookForm";
import ProductComp from "./Component/ProductComp";
import AboutComp from "./Component/AboutComp";
// import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
//
import "./App.css";
import ToDoList from "./Component/ToDoList";
import NewPage from "./Component/NewPage";
import HomeComp from "./Component/HomeComp";


function App() {
  const [log, setlog] = useState(true);
  const [NewCompHome, setNewCompHome] = useState(null);

  const MyGrocComp =  React.lazy(()=>import("./Component/GrocerryList"))



  const handlelogout = () => {
    setlog(false);
  };

  // const handlehome = async () => {
  //   let NewComp = await import("./Component/HomeComp");
  //   setNewCompHome(() => NewComp.default);
  // };

  return (
    <>
      {/* OmComp() */}
      {/* <OmComp/> */}

      {/* <ListRender/> */}

      {/* <button onClick={handlelogout}>Logout</button> */}

      {/* <ReactForm/> */}

      {/* {log  ?  <ApiCallWithBtn/> : null } */}

      {/* <HookForm/> */}

      {/* <Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/product">Product</Link> */}

      {/* <ToDoList/> */}

      {/* <NewPage/> */}

      {/* <Routes>

  <Route path="/"  element={ <HomeComp/>}/>
  <Route path="/product" element={<ProductComp/>}/>
  <Route path="/about" element={<AboutComp/> }/>

</Routes> */}

      {/* <HomeComp/>

<ProductComp/>

// <AboutComp/> */}
<Suspense fallback={<span class="loader">DSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</span>}>
<MyGrocComp />
</Suspense>

   

      {/* {NewCompHome ? <NewCompHome /> : "no comp"} */}

      {/* <HomeComp/> */}
<h1>AAAAADHDAE FDNMBHEFWBJKEFBKJWERFWBJKF CRCT</h1>
      <br />

      {/* <button onClick={handlehome}>home</button> */}

      {/* meomorize */}

      {/* use memo 
use callback
react.memo */}

      {/* codesplite -  dynamic import , lazy loading */}
    </>
  );
}

export default App;
