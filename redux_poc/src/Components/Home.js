import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function Home() {
  const [id, setId] = useState(33);
  const [idsFromButtonClick, setIdsFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdsFromButtonClick(id);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `https://mars-consumer-api-qa-dev.apps.non-prod.pcf-maximus.com/app/crm/casemember/${id}`
      )
      .then((res) => {
        console.log(res);
        const successObj = { type: "BUY_CAKE", payload: res.data };
        dispatch(successObj);
        const resultant_obj = res.data.result;
        resultant_obj[0]["caseRole"] = res.data.result[0].consumerRole;
        delete res.data.result[0].consumerRole;
        const commomObj = { type: "cases", payload: resultant_obj };
        dispatch(commomObj);
      })
      .catch(console.error());
  }, [idsFromButtonClick]);

  return (
    <div>
      <h1>demo for DataFetchAxios </h1>
      <input
        type="text"
        value={id.value}
        onChange={(e) => setId(e.target.value)}
      ></input>

      <button onClick={handleClick} type="button">
        clickHere
      </button>
    </div>
  );
}
export default Home;
