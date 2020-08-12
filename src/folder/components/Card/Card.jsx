import React, { useEffect } from 'react';
import { Heart } from 'react-feather';
import './_card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Fev } from '../../redux/actions/FevActions';

export default function Card({ obj }) {
  const {
    Poster, Title, Type, imdbID, Year,
  } = obj;
  const disptach = useDispatch();
  const { fevMovi } = useSelector((state) => state.FevReducers);

  const addToStore = () => {
    disptach(Fev(obj));
  };

  useEffect(() => {

  }, [fevMovi]);

  return (
    <div style={{
      maxWidth: 250, height: 350, margin: 20, position: 'relative',
    }}
    >
      <img src={Poster} width={250} height={300} style={{ borderRadius: 20 }} className="shadow" />
      <div>
        <h4 style={{ marginTop: 5, fontSize: 15, letterSpacing: 0.2 }}>{Title}</h4>
      </div>
      <div
        className="roundCard"
        style={{
          position: 'absolute',
          zIndex: 100,
          top: 10,
          right: 10,

        }}
      >
        <Heart onClick={() => addToStore()} color="red" size={25} fill={fevMovi.filter((item) => item.imdbID === imdbID).length > 0 ? 'red' : '#fff'} />
      </div>
    </div>
  );
}

// import React from 'react';

// export default function Card() {
//   return (
//     <div>
//       ooo
//     </div>
//   );
// }
