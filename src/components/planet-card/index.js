import React from 'react';
import { Card, Button } from 'antd';
import { useHistory } from 'react-router-dom';

export const PlanetCard = (props) => {

  const { name, climate, population, url } = props.planet;
  const history = useHistory();

  const getId = (url) => {
    return url.split('/').reverse()[1];
  }

  const handleViewMoreClick = () => {
    history.push(`planet/${getId(url)}/`);
  }

  return (
    <Card
      title={ name === 'unknown' ? 'No name' : `Planet: ${name}` }
      extra={ <Button onClick={ handleViewMoreClick } type="primary">View more</Button> }
      style={ { width: 300, margin: '10px', border: '1px solid grey' } }
    >
      {climate === 'unknown' ? <p>No info about Climat</p> : <p>Climate: { climate }</p> }
      {population === 'unknown' ? <p>No info about Population</p> : <p>Population: { population }</p> }
    </Card>
  )
}