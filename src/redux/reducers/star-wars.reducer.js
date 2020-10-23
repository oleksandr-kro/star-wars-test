import types from '../action.type';

const initialState = {
  planets: null,
  page: 1,
  fetching: false,
  error: null,
  planet: null,
  people: null
}

export const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLANETS.FETCH:
    case types.GET_PEOPLE.FETCH:
    case types.GET_PLANET_BY_ID.FETCH:
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
    case types.GET_PLANET_BY_ID.SUCCESS:
      return {
        ...state,
        fetching: false,
        planet: action.payload
      }
    case types.GET_PEOPLE.SUCCESS:
      return {
        ...state,
        people: action.payload,
        fetching: false,
      }
    case types.GET_PLANETS.ERROR:
    case types.GET_PEOPLE.ERROR:
    case types.GET_PLANET_BY_ID.ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case types.CLEAR_PLANET_STATE:
      return {
        ...state,
        planet: null,
        people: null
      }
    case types.CURRENT_PLANETS_PAGE:
      return {
        ...state,
        page: action.payload
      }
    default: return state;
  }
}