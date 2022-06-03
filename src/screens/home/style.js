import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  posterImage: {
    flex: 0.55,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heroContainer: {
    width: '70%',
    height: '80%',
    zIndex: 2,
    bottom: -100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {width: '100%', height: '100%'},
  btn: {
    backgroundColor: colors.SECONDARY,
    borderRadius: 5,
    height: 70,
    width: '85%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
  heroName: {
    marginTop: 10,
    fontSize: 18,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
});
