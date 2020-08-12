/* eslint-disable import/extensions */
import axios from 'axios';
import { SAVE_MOVIE } from '../config/constant';
import { API_MOVIE_DATA } from '../../utilits/api/Path';

export const getMovie = (bdy:String) => ({
  type: SAVE_MOVIE,
  payload: axios.get(`${API_MOVIE_DATA}/${bdy}&apikey=b5f92674`),
});
