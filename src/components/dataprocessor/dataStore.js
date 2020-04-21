import { createStore } from "redux";
import dataReducer from "./dataReducer";
const dataStore = createStore(dataReducer);

export default  dataStore;
