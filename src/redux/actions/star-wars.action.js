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

const getPlanetByIdFetch = () => {
  return {
    type: types.GET_PLANET_BY_ID.FETCH
  }
}

const getPlanetByIdSuccess = (planet) => {
  return {
    type: types.GET_PLANET_BY_ID.SUCCESS,
    payload: planet
  }
}

const getPlanetByIdError = (error) => {
  return {
    type: types.GET_PLANET_BY_ID.ERROR,
    payload: error
  }
}

export const getPlanetById = (id) => async (
  dispatch
) => {
  try {
    dispatch(getPlanetByIdFetch());
    fetch(`http://swapi.dev/api/planets/${id}/`)
      .then((res) => res.json())
      .then((data) => { dispatch(getPlanetByIdSuccess(data)) })
  } catch (error) {
    dispatch(getPlanetByIdError(error.response.data))
  }
}

const getPeopleSuccess = (data) => {
  return {
    type: types.GET_PEOPLE.SUCCESS,
    payload: data
  }
}

const getPeopleFetch = () => {
  return {
    type: types.GET_PEOPLE.FETCH
  }
}

const getPeopleError = (error) => {
  return {
    type: types.GET_PEOPLE.ERROR,
    payload: error
  }
}

export const getPeople = (urls) => async (
  dispatch
) => {
  try {
    dispatch(getPeopleFetch())
    Promise.all(urls.map((url) => fetch(url)
      .then(res => res.json())))
      .then(data => { dispatch(getPeopleSuccess(data)) })
  } catch (error) {
    dispatch(getPeopleError(error.response.data))
  }
}

export const clearPlanetState = () => {
  return {
    type: types.CLEAR_PLANET_STATE
  }
}

export const setPlanetsPage = (page) => {
  return {
    type: types.CURRENT_PLANETS_PAGE,
    payload: page
  }
}