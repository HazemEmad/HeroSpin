import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import images from '../../constants/images';
import getHeros from '../../services/get-heros';
import {getRandomNumber} from '../../utils/helpers';
import style from './style';

const Home = () => {
  const [hero, setHero] = React.useState({});
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [randomIndexes, setRandomIndexes] = React.useState([]);

  const getRandomHeros = () => {
    setLoading(true);
    getHeros(offset)
      .then(res => {
        res = res.data.data;
        let randomIndexArr = getRandomNumber(offset, res.limit);
        setRandomIndexes(randomIndexArr);
        setOffset(res.offset);
        setHero(res.results[randomIndexArr[0]]);
      })
      .catch(err => console.log('error,', err))
      .finally(() => setLoading(false));
  };

  const structThumbnail = thumbnail =>
    thumbnail.path.replace('http', 'https') + '.' + thumbnail.extension;

  const getThumbnail = () =>
    loading
      ? images.gif
      : Object.keys(hero).length === 0
      ? images.QUESTION_MARK
      : {uri: structThumbnail(hero.thumbnail)};

  return (
    <View style={style.container}>
      <ImageBackground
        source={images.POSTER}
        blurRadius={8}
        style={style.posterImage}>
        <View style={style.heroContainer}>
          <Image
            source={getThumbnail()}
            resizeMode={'stretch'}
            style={style.heroImage}
          />
          <Text style={style.heroName}>{hero?.name ?? ''}</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity style={style.btn} onPress={getRandomHeros}>
        <Text style={style.btnTxt}>Pick Your Hero?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
