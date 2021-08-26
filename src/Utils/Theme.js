import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Theme = {
  // primary: '#ff6f00',
  primary: '#252525',
  secondary: '#d3d3d3',
  gold: '#ada11f',
  txtWhite: '#ffffff',
  white: 'white',
  black: 'black',
  green: 'green',
  txtBlack: 'black',
  txtGrey: '#B7B7B7',
  iconGrey: '#D1D1D1',
  lightestGrey: '#FAFAFA',
  lightGray: '#F2F2F2',
  lightGreen: '#F1F9ED',
  iconSize: 26,
  bold: 'bold',
  red: 'red',
  blueBtn: '#5BC0EB',
  lightBlue: '#5BC0EB',
  iconSizeSm: 18,
  iconSizeExSm: 12,
  txtSmallest: hp('1.5%'),
  txtSmall: hp('1.7%'),
  txtMedium: hp('2%'),
  txtMedium2: hp('2.5%'),
  txtMedium1: hp('3%'),
  txtLarge: hp('4%'),
  align: 'center',
  wp,
  hp,
  width: wp('95%'),
  height: height,
};

export default Theme;