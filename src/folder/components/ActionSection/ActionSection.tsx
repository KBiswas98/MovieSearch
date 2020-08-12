import React, { useState } from 'react';
import '../../utilits/styles/GlobalStyles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../redux/actions/ApplicationAction';

export default function ActionSection() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [options, setOptions] = useState('movie');

  const onSubmit = () => {
    console.log(input, options);
    input.length > 2 ? dispatch(getMovie(`?s=${input}&type=${options}`)) : alert('input should be more then 2 characters.');
  };

  return (
    <div className="container-1 stack" style={{ height: '50vh ' }}>
      <div>
        <input value={input} placeholder="search" className="inputFiled" onChange={(e) => setInput(e.target.value)} />
        <select placeholder="select option" className="option" value={options} onChange={(e) => setOptions(e.target.value)}>
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>
      </div>
      <div className="search" onClick={() => onSubmit()}>
        <p>Search</p>
      </div>
    </div>
  );
}
