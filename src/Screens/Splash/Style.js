import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: Theme.align,
    // backgroundColor: Theme.white,    //light
    backgroundColor: Theme.primary, //dark
    justifyContent: Theme.align,
  },
  imgSplash: {
    width: Theme.wp('50%'),
    height: Theme.hp('30%'),
  },
});

export default styles;
