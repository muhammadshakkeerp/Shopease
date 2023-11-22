import { SEARCH_PRODUCTS } from "../actions/searchActions";

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: "",
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

export default searchReducer