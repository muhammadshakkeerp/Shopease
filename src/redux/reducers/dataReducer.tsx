import { DataFunctionsTypes, } from "../actions/dataAction";


// Define the initial state
const initialState = {
  loading: false,
  data: [],
  error: '',
};

// Reducer function
const dataReducer = (state = initialState, action: DataFunctionsTypes) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
