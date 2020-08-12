import { SAVE_MOVIE } from '../config/constant';

const initialState = {
  movie: null,
  isPending: true,
};

const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${SAVE_MOVIE}_PENDING`:
      return initialState;
    case `${SAVE_MOVIE}_FULFILLED`:
      return {
        isPending: false,
        movie: action.payload.data,
      };
    default: return state;
  }
};

export default ApplicationReducer;
