import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions";

const initialState = {
  loading: false,
  data: null,
  error: null,
  totalCount: null,
  pageNumber: 0,
  limit: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        error: null,
      };
      newState.pageNumber = state.pageNumber + 1;

      const { data } = action.payload;
      if (!newState.data) {
        newState.data = data.jdList;
      } else {
        newState.data = [...state.data, ...data.jdList];
      }
      newState.totalCount = data.totalCount;

      return newState;
    }
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
