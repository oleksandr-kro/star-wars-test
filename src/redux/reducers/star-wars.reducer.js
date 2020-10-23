import types from '../action.type';

const initialState = {
  planets: null,
  fetching: false,
  error: null,
}

export const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLANETS.FETCH:
      return {
        ...state,
        fetching: true,
      }
    case types.GET_PLANETS.SUCCESS:
      return {
        ...state,
        fetching: false,
        planets: action.payload,
      }
    case types.GET_PLANETS.ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default: return state;
  }
}