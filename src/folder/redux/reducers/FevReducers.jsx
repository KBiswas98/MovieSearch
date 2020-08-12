const initialState = {
  fevMovi: [],
  isFevMode: false,
};

const FevReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FEV':
      console.log(action.payload.imdbID);
      return {
        ...state,
        fevMovi: state.fevMovi.every((item) => item.imdbID !== action.payload.imdbID) ? [...state.fevMovi, action.payload] : state.fevMovi.filter((item) => item.imdbID !== action.payload.imdbID),
      };
    case 'TOUGLE_FEV_MODE':
      return {
        ...state,
        isFevMode: !state.isFevMode,
      };
    default: return state;
  }
};

export default FevReducers;
