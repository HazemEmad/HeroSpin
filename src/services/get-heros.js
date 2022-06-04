import axios from 'axios';
import md5 from 'md5';
import {publickeyMarvel, privateKeyMarvel} from '@env';
import {baseUrlMarvel, marvelApis} from '../constants/urls';
import {getEnvFile} from '../utils/helpers';
import {timeout} from '../constants/const-values';

const ts = Number(new Date());
const puplicKey = getEnvFile(publickeyMarvel);
const privateKey = getEnvFile(privateKeyMarvel);

const hash = md5(ts + privateKey + puplicKey);

const getHeros = offset =>
  axios
    .create({
      timeout,
      baseURL: baseUrlMarvel + marvelApis.getMarvelCharacters,
      params: {
        offset,
        ts,
        apikey: puplicKey,
        hash,
      },
    })
    .request();

export default getHeros;
