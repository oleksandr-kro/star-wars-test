import types from '../action.type';

const getPlanetsFetch = () => {
  return {
    type: types.GET_PLANETS.FETCH
  }
}
const getPlanetsSuccess = (data) => {
  return {
    type: types.GET_PLANETS.SUCCESS,
    payload: data
  }
}
const getPlanetsError = (error) => {
  return {
    type: types.GET_PLANETS.ERROR,
    payload: error
  }
}

export const getPlanets = (page) => async (
  dispatch
) => {
  try {
    dispatch(getPlanetsFetch())
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then(res => res.json()).then(res => {
        dispatch(getPlanetsSuccess(res))
      })
  } catch (error) {
    dispatch(getPlanetsError(error))
  }
}

