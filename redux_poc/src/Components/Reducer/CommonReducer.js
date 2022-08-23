import ActionConstants from "../Actions/ActionConstants";
const initialState = {
  result: {
    cases: [],
  },
};

export default (state, action) => {
  if (!state) {
    return initialState;
  }
  const { type, payload } = action;

  const newState = (items) => ({
    ...state,
    result: { ...state.result, ...items },
  });

  switch (type) {
    case "cases":
      return newState({ cases: payload });
    default:
      return state;
  }
};
