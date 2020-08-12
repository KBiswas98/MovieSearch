import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoToPage } from '../../redux/actions/ApplicationAction';
import '../../utilits/styles/GlobalStyles.scss';

export default function Pagination({ no, trigger }) {
  const { movie } = useSelector((state) => state.ApplicationReducer);
  const disptach = useDispatch();
  const goto = (num) => {
    trigger(num);
  };
  return (
    <div style={{ display: 'flex', flexFlow: 'row' }}>
      {
                Array(parseInt(movie.totalResults / 10)).fill(1).map((item, index) => (
                  <div
                    className={no == index + 1 ? 'show' : 'notShow'}
                    style={{
                      padding: 10, margin: 10, color: '#ff',
                    }}
                    onClick={() => goto(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))
            }
    </div>
  );
}
