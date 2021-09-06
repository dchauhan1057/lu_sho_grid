import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
  } from '../../Utils/Size';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const Splash= props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimer();
  }, [setTimer]);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const setTimer = () => {
    setTimeout(() => {
      alert("Called")
    }, 1000);
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Text style={styles.bigtext}>Lo Shu Grid</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  bigtext: {
    color: 'black',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveWidth(10),
    alignSelf: 'center',
    textAlign: 'center',
  },
});
export default Splash;
