import React from 'react';
import '../../utilits/styles/GlobalStyles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { TougleFev } from '../../redux/actions/FevActions';

export default function Navbar() {
  const { fevMovi, isFevMode } = useSelector((state) => state.FevReducers);
  const dispatch = useDispatch();
  return (
    <div className="row">
      <h2 className="xh2">Home</h2>
      <h4 className="xh4 hoverstyle" onClick={() => dispatch(TougleFev())}>
        {isFevMode && <span style={{ fontWeight: 'bold', fontSize: 10, margin: 0 }}>Tougle</span>}
        Favourites (
        {fevMovi.length}
        )
      </h4>
    </div>
  );
}
