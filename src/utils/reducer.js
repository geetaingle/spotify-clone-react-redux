import { reducerCases } from "./Constants";

export const initialState = {
  token: null,
  playlists: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLSYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    default:
      return state;
  }
};

export default reducer;
