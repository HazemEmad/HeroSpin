import axios from 'axios';
import {baseUrlIMDB, imdbApis} from '../constants/urls';
import {keyIMDB} from '@env';
import {getEnvFile} from '../utils/helpers';

const key = getEnvFile(keyIMDB);
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
