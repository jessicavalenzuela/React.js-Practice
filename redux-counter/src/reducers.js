import { DECREASE, RESET, INCREASE } from "./actions";

export default function reducer(state, action) {
  // console.log({ state, action });
  // if (action.type === "DECREASE") {
  //   state.count = state.count - 1;
  //   return ;
  // }
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}