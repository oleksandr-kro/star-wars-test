import React from 'react';
import style from './style.module.scss';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { clearPlanetState } from '../../redux/actions/star-wars.action';
import { useSelector } from 'react-redux';

export const Header = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.starWars.fetching);

  const handeleHomeClick = () => {
    dispatch(clearPlanetState());
    history.push('/')
  }
  return (
    <header className={ style.header }>
      <Button onClick={ handeleHomeClick } type='primary'>Home</Button>
      { loading && <div className={ style.loader } >Loading...</div> }
    </header>
  )
}