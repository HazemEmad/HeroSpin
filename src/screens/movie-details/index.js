import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import colors from '../../constants/colors';
import {width} from '../../constants/const-values';
import images from '../../constants/images';
import getMovies from '../../services/get-movies';
import style from './style';

const MovieDetails = ({navigation, route}) => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const {heroName, getRandomHeros} = route.params;

  React.useEffect(() => {
    getRandomMovies();
  }, []);

  const getRandomMovies = () => {
    getMovies(heroName)
      .then(res => {
        setMovies(res.data.results);
        setErrorMessage(res.data.errorMessage);
      })
      .catch(err => console.log(err.message))
      .finally(() => setLoading(false));
  };

  const renderBackBtn = () => (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{zIndex: 2}}>
      <Image source={images.BACK_ARROW} style={style.backArrow} />
    </TouchableOpacity>
  );

  const renderLoadingIndicator = () =>
    loading && (
      <ActivityIndicator
        color={colors.SECONDARY}
        size={'small'}
        style={style.loading}
      />
    );

  const renderErrorState = () => {
    if (!loading && (errorMessage != '' || !movies.length)) {
      return (
        <View style={style.containerError}>
          <Text style={style.errorText}>
            {!movies?.length && !loading && errorMessage == ''
              ? 'No movies Found!'
              : errorMessage}
          </Text>
        </View>
      );
    }
  };

  const renderMovieCard = ({item, index}) => (
    <View style={style.cardContainer}>
      <ImageBackground
        source={{uri: item.image}}
        blurRadius={2}
        style={style.movieBackground}>
        <Image source={{uri: item.image}} style={style.movieImage} />
        <View style={style.paddingContainer}>
          <Text style={style.titleMovie}>{item.title}</Text>
          <Text style={style.descriptionMovie}>{item.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  const renderCarouselMovies = () => {
    if (!loading && !errorMessage && movies?.length) {
      return (
        <Carousel
          data={movies}
          renderItem={renderMovieCard}
          sliderWidth={width}
          itemWidth={width * 0.9}
        />
      );
    }
  };

  const renderGetRandomAgain = () => (
    <TouchableOpacity style={style.btn} onPress={getRandomAgain}>
      <Text style={style.btnTxt}>Get Random Movie Again?</Text>
    </TouchableOpacity>
  );

  const getRandomAgain = () => {
    getRandomHeros();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={style.container}>
      {renderBackBtn()}
      {renderCarouselMovies()}
      {renderGetRandomAgain()}
      {renderLoadingIndicator()}
      {renderErrorState()}
    </SafeAreaView>
  );
};

export default MovieDetails;
