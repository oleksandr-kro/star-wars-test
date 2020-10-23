import { combineReducers } from 'redux';
import { starWarsReducer } from './reducers/star-wars.reducer';

export const rootReducer = combineReducers({
  starWars: starWarsReducer,
})
