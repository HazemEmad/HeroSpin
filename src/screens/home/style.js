import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {width} from '../../constants/const-values';

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
    height: '100%',
    width: '100%',
    zIndex: 2,
    bottom: -100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {width: '75%', height: '85%', borderRadius: 10},
  btn: loading => ({
    backgroundColor: colors.SECONDARY,
    borderRadius: 10,
    height: 70,
    width: '85%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: loading ? 0.5 : 1,
  }),
  btnTxt: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
  heroCard: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroName: {
    marginTop: 30,
    textAlign: 'right',
    width: width * 0.8,
    fontSize: 18,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
});
