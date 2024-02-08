import { DataFunctionsTypes, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, } from "../actions/dataAction";

const initialState = {
  loading: false,
  result: [],
  error: '',
};

const dataReducer = (state = initialState, action: DataFunctionsTypes) => {
  console.log(state)
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
        error: '',
      };
    case FETCH_DATA_FAILURE:
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
