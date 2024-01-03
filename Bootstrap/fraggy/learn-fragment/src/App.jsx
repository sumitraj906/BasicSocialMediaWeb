// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import React from "react";
// import FoodItem from './component/foodItem';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from './component/foodItem';

function App() {
   let FoodItem=["Dal","Idli","Salad","Rice","Milk","Ghee"];
  // let foodItem=[];
  // let emptyMessasge= foodItem.length===0 ? <h3>I am Hungry</h3> :null

//  if(foodItem.length===0){
//   return <h3>I am Hungry</h3>;
//  }
  return ( 
    // <React.Fragment>
    <>
  <h1>Healthy Food</h1>
  {FoodItem.length===0 && <h3>I am Hungry </h3>}
    <FoodItem></FoodItem>
 </>
// </React.Fragment>
  );
  
}

export default App
