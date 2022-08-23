import ActionConstants from "./ActionConstants";
function buyCake(type, payload) {
  // console.log(type, payload)
  return {
    type: ActionConstants.BUY_CAKE,
    payload: null,
  };
}
