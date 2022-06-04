import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import CarouselHeros from '../../components/carousel-heros';
import {width} from '../../constants/const-values';
import images from '../../constants/images';
import getHeros from '../../services/get-heros';
import {getRandomNumber} from '../../utils/helpers';
import style from './style';

const Home = ({navigation}) => {
  const [heros, setHeros] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [total, setTotal] = React.useState(-1);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const getRandomHeros = () => {
    setLoading(true);
    getHeros(offset)
      .then(res => {
        res = res.data.data;
        let randomIndexArr = getRandomNumber();
        if (total < 0) setTotal(res.total);
        else {
          if (offset < total) setOffset(offset + res.limit);
          else setOffset(0);
        }
        setCurrentIndex(0);
        setHeros(structRandomHeros(res.results, randomIndexArr));
      })
      .catch(err => console.log('error', err.message))
      .finally(() => setLoading(false));
  };

  const renderImage = src => (
    <Image source={src} resizeMode={'stretch'} style={style.heroImage} />
  );

  const renderRandomBtn = () => (
    <TouchableOpacity
      style={style.btn(loading)}
      onPress={getRandomHeros}
      disabled={loading}>
      <Text style={style.btnTxt}>Pick Your Hero?</Text>
    </TouchableOpacity>
  );

  const renderBackgroundContainer = () => (
    <ImageBackground
      source={images.POSTER}
      blurRadius={8}
      style={style.posterImage}>
      <View style={style.heroContainer}>
        {!heros.length || loading ? (
          renderImage(loading ? images.GIF : images.QUESTION_MARK)
        ) : (
          <CarouselHeros
            data={heros}
            renderItem={renderHeroImage}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={onSnapToItem}
          />
        )}
      </View>
    </ImageBackground>
  );

  const renderHeroImage = ({item}) => {
    return (
      <TouchableOpacity style={style.heroCard} onPress={navigate}>
        {renderImage({uri: structThumbnail(item.thumbnail)})}
        <Text style={style.heroName} numberOfLines={2}>
          {item.id != heros[currentIndex].id ? '' : item.name ?? ''}
        </Text>
      </TouchableOpacity>
    );
  };

  const navigate = () => {
    navigation.navigate('MovieDetails', {
      heroName: item.name,
      getRandomHeros: getRandomHeros,
    });
  };

  const onSnapToItem = i => setCurrentIndex(i);

  const structThumbnail = thumbnail =>
    thumbnail.path.replace('http', 'https') + '.' + thumbnail.extension;

  const structRandomHeros = (heros, randomArr) => {
    let randomHeros = [];
    for (let i = 0; i < randomArr.length; i++) {
      randomHeros.push(heros[randomArr[i]]);
    }
    return randomHeros;
  };

  return (
    <View style={style.container}>
      {renderBackgroundContainer()}
      {renderRandomBtn()}
    </View>
  );
};

export default Home;
