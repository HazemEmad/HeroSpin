import axios from 'axios';
import md5 from 'md5';
import {baseUrlMarvel, marvelApis} from '../constants/urls';

const publickey = '1c18413212077e41fc6ece90ad4507fb';
const privateKey = '6681f866b1d88396914ba48e937daefff8764636';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publickey);

const getHeros = offset =>
  axios
    .create({
      baseURL: baseUrlMarvel + marvelApis.getMarvelCharacters,
      params: {
        offset,
        ts,
        apikey: publickey,
        hash,
      },
    })
    .request();

export default getHeros;
