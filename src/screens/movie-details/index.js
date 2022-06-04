import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import {width} from '../../constants/const-values';
import images from '../../constants/images';
import getMovies from '../../services/get-movies';
import style from './style';
import Carousel from 'react-native-snap-carousel';

const MovieDetails = ({navigation, route}) => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  const {heroName, getRandomHeros} = route.params;

  const getRandomMovies = () => {
    getMovies(heroName)
      .then(res => {
        console.log(res.data);
        setMovies(res.data.results);
        setErrorMessage(res.data.errorMessage);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };

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
  const getRandomAgain = () => {
    getRandomHeros();
    navigation.goBack();
  };

  const renderGetRandomAgain = () => (
    <TouchableOpacity style={style.btn} onPress={getRandomAgain}>
      <Text style={style.btnTxt}>Get Random Movie Again?</Text>
    </TouchableOpacity>
  );

  React.useEffect(() => {
    getRandomMovies();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'red'} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={{zIndex: 2}}>
        <Image source={images.BACK_ARROW} style={style.backArrow} />
      </TouchableOpacity>
      {renderCarouselMovies()}
      {renderGetRandomAgain()}
      {renderLoadingIndicator()}
      {renderErrorState()}
    </SafeAreaView>
  );
};

export default MovieDetails;
