import axios from 'axios';
import {keyIMDB} from '@env';

import {baseUrlIMDB, imdbApis} from '../constants/urls';
import {getEnvFile} from '../utils/helpers';
import {timeout} from '../constants/const-values';

const key = getEnvFile(keyIMDB);
const getMovies = search =>
  axios
    .create({
      timeout,
      baseURL: baseUrlIMDB + imdbApis.search,
      params: {
        lang: 'en',
        apiKey: key,
        expression: search,
      },
    })
    .request();

export default getMovies;
