import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlanetCard } from '../../components/planet-card';
import { getPlanets } from '../../redux/actions/star-wars.action';
import style from './style.module.scss';

export const Home = () => {

  const dispatch = useDispatch();

  const planets = useSelector((state) => state.starWars.planets);

  useEffect(() => {
    dispatch(getPlanets(page));
  }, [page]);

  return (
    <div className={ style.homepage }>
      <div className={ style.planets }>
        { planets && planets.results.map((planet, index) => (
          <PlanetCard key={ index } planet={ planet } />
        )) }
      </div>
 
    </div>
  )
}