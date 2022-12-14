import ActionConstants from "../Actions/ActionConstants";
const initialState = {
  result: {
    caselist: [],
  },
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }
  const { type, payload } = action;
  console.log(type, payload);
  const newState = (items) => ({
    ...state,
    result: { ...state.result, ...items },
  });

  switch (type) {
    case ActionConstants.BUY_CAKE:
      return newState({ noOfCakes: payload });
    default:
      return state;
  }
};
