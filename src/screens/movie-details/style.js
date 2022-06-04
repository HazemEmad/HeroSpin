import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.PRIMARY},
  backArrow: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  movieImage: {
    width: '100%',
    height: '60%',
  },
  loading: {alignSelf: 'center', top: '45%'},
  containerError: {
    alignSelf: 'center',
    top: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {color: colors.SECONDARY, fontSize: 18, fontWeight: 'bold'},
  cardContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  movieImage: {
    marginTop: 100,
    alignSelf: 'center',
    height: '80%',
    width: '70%',
  },
  paddingContainer: {padding: 20},
  titleMovie: {fontSize: 19, fontWeight: 'bold', color: colors.WHITE},
  descriptionMovie: {
    marginTop: 20,
    fontSize: 16,
    color: colors.WHITE,
    opacity: 0.8,
  },
  btn: {
    backgroundColor: colors.SECONDARY,
    borderRadius: 10,
    height: 70,
    width: '85%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  btnTxt: {
    color: colors.WHITE,
    fontSize: 20,
  },
  movieBackground: {
    width: '100%',
    height: '65%',
  },
});
