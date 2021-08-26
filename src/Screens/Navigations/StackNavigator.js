import React, {Component} from 'react';
import {View, StatusBar, SafeAreaView, LogBox} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Theme from '../../Utils/Theme';
//Screens Imported
import SplashScreen from '../Splash/Splash';
import HomeScreen from '../HomeScreen/HomeScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import SignupScreen from '../LoginScreen/SignupScreen';
//Other Navigations Imported
import BottomTabs from './BottomNavigation';

const Stack = createStackNavigator();
class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          {Platform.OS === 'ios' ? (
            <StatusBar barStyle="light-content" />
          ) : (
            <StatusBar
              barStyle="light-content"
              backgroundColor={Theme.primary}
            />
          )}
        </View>

        <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />        
        </Stack.Navigator>
      </SafeAreaView>
    );
  }
}

export default Navigation;