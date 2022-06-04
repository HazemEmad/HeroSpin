import axios from 'axios';
import {baseUrlIMDB, imdbApis} from '../constants/urls';

const key = 'k_89iinluq';

const getMovies = search =>
  axios
    .create({
      baseURL: baseUrlIMDB + imdbApis.search,
      params: {
        lang: 'en',
        apiKey: key,
        expression: search,
      },
    })
    .request();

export default getMovies;
