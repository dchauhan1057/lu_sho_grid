import * as React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../HomeScreen/HomeScreen';
import AddListing from '../AddListing/AddListing';
import Inventory from '../Inventory/Inventory';
import Settings from '../Settings/Settings';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Theme from '../../Utils/Theme';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={Theme.gold}
      barStyle={{backgroundColor: Theme.white}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'All List',
          tabBarIcon: ({color}) => (
            <Entypo name="box" color={color} size={Theme.iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarLabel: 'Inventory',
          tabBarIcon: ({color}) => (
            <Entypo name="folder" color={color} size={Theme.iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="AddListing"
        component={AddListing}
        options={{
          tabBarLabel: 'AddListing',
          tabBarIcon: ({color}) => (
            <Entypo name="add-to-list" color={color} size={Theme.iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;