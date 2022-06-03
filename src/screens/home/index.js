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
  const [loadingImage, setLoadingImage] = React.useState(false);
  const [randomIndexes, setRandomIndexes] = React.useState([]);
  const [total, setTotal] = React.useState(-1);

  const getRandomHeros = () => {
    setLoading(true);
    getHeros(offset)
      .then(res => {
        res = res.data.data;
        let randomIndexArr = getRandomNumber();
        setRandomIndexes(randomIndexArr);
        if (total < 0) setTotal(res.total);
        else {
          if (offset < total) setOffset(offset + res.limit);
          else setOffset(0);
        }
        setHero(res.results[randomIndexArr[0]]);
      })
      .catch(err => console.log('error,', err))
      .finally(() => setLoading(false));
  };

  const structThumbnail = thumbnail =>
    thumbnail.path.replace('http', 'https') + '.' + thumbnail.extension;

  const loadingState = loading || loadingImage;

  const getThumbnail = () =>
    loading
      ? images.gif
      : Object.keys(hero)?.length === 0
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
            onLoadStart={() => setLoadingImage(true)}
            onLoad={() => setLoadingImage(false)}
            style={style.heroImage}
          />
          <Text style={style.heroName}>
            {loadingState ? '' : hero?.name ?? ''}
          </Text>
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={style.btn(loadingState)}
        onPress={getRandomHeros}
        disabled={loadingState}>
        <Text style={style.btnTxt}>Pick Your Hero?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
