import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

export default function Result() {
  const { movie, isPending } = useSelector((state) => state.ApplicationReducer);
  const { fevMovi, isFevMode } = useSelector((state) => state.FevReducers);

  const mkBr = () => {
    if (movie === null) {
      return '';
    }

    if (movie.Response === 'True' && movie.Search.length > 0) {
      return movie.Search.map((item) => <Card obj={item} />);
    }

    return 'No Match Found.';
  };

  const renderFev = () => fevMovi.map((item) => <Card obj={item} />);

  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
      {
       isPending ? movie !== null && 'Penidng' : isFevMode ? renderFev() : mkBr()
      }

    </div>
  );
}
