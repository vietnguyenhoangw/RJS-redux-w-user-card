
import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { name: "React" };
export const store = createStore(reducer, initialState);