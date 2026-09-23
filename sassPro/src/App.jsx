import React from "react";
import Button from "./assets/components/Button";
import ListItem from "./assets/components/ListItem";
import Image from "./assets/components/Image";
import pp from "./assets/hero.png"

const App = () => {
  return (
    <>
    <ul>
      <ListItem design="text-blue-400" text="srvice"/>
      <ListItem design="text-blue-400" text="Home" type={true}/>
      
    </ul>
    <Button dynamicVal="bg-red-500" text="botton"/>
    <Button  text="wiieiie"/>
    <img src="pp.png" alt="pp" />
    </>
  );
};

export default App;