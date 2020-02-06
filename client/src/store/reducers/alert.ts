import { AlertState, AlertActionTypes } from "../alert/type";

const inititalState: AlertState = {
  alert: []
};

export default function(state = inititalState, action: AlertActionTypes) {
  const { type, payload } = action;
  switch (type) {
    case "SET_ALERT":
      return [...state.alert, payload];
    case "REMOVE_ALERT":
      return state.alert.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
