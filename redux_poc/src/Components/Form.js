import React from "react";
import {useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux';
import ActionConstants from "./Actions/ActionConstants";

function Form() {
  const counter = useSelector((state) => state.cakeReducer.result.noOfCakes)
  useDispatch({ type: ActionConstants.BUY_CAKE },20)
  console.log(counter);
  useEffect ( () => {
    console.log("Did mount")
  })
  return (
    <div>
      <h3>this is the Form Page</h3>
    </div>
  );
}
export default Form;
