import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlanetCard } from '../../components/planet-card';
import { getPlanets, setPlanetsPage } from '../../redux/actions/star-wars.action';
import style from './style.module.scss';
import { Pagination } from 'antd';

export const Home = () => {

  const dispatch = useDispatch();

  const planets = useSelector((state) => state.starWars.planets);
  const page = useSelector((state) => state.starWars.page);

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
      {planets &&
        <Pagination
          showSizeChanger={ false }
          current={ page }
          onChange={ (page) => { dispatch(setPlanetsPage(page)) } }
          total={ planets.count }
        />
      }
    </div>
  )
}