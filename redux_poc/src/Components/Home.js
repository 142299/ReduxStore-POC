import React from "react";
import { useSelector , useDispatch } from 'react-redux';

function Home() {
  const cases = useSelector((state) => state.commonReducer.result.cases)
  console.log(cases, "cases in home .js")
  
  return (
    <div>
      <h3>this is the Home Page</h3>
    </div>
  );
}
export default Home;
