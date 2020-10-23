import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanetById, getPeople } from '../../redux/actions/star-wars.action';
import { Descriptions } from 'antd';
import style from './style.module.scss';

export const Planet = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  const planet = useSelector((state) => state.starWars.planet);
  const people = useSelector((state) => state.starWars.people);
  const planetId = location.pathname.split('/').reverse()[1];

  useEffect(() => {
    if (!planet) {
      dispatch(getPlanetById(planetId))
    }
    if (planet) {
      dispatch(getPeople(planet.residents))
    }
  }, [planet])

  return (
    <div className={ style.planet }>
      {planet && (
        <Descriptions
          bordered
          column={ 1 }
          title='Planet'>
          <Descriptions.Item label='Name'>{ planet.name }</Descriptions.Item>
          <Descriptions.Item label='Rotation period'>{ planet.rotation_period }</Descriptions.Item>
          <Descriptions.Item label='Diameter'>{ planet.diameter }</Descriptions.Item>
          <Descriptions.Item label='Climate'>{ planet.climate }</Descriptions.Item>
          <Descriptions.Item label='Gravity'>{ planet.gravity }</Descriptions.Item>
          <Descriptions.Item label='Terrain'>{ planet.terrain }</Descriptions.Item>
          <Descriptions.Item label='Population'>{ planet.population }</Descriptions.Item>
          <Descriptions.Item label='Residents'>
            { people && people.length > 0 ? people.map((person, id) => <div key={ id }>{ person.name }</div>) : <div>Planet have no residents</div> }
          </Descriptions.Item>
        </Descriptions>
      ) }
    </div>
  )
}