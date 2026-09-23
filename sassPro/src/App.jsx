import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import ListItem from "./assets/components/ListItem";


const App = () => {
  return (
    <ul>
      <ListItem design="text-blue-400" text="srvice"/>
      <ListItem design="text-blue-400" text="Home" type={true}/>
    </ul>
  );
};

export default App;