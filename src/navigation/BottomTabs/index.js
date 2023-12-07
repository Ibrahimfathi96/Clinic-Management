import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../AppStacks/HomeStack';
import MessageStack from '../AppStacks/MessageStack';
import CalendarStack from '../AppStacks/CalendarStack';
import ProfileStack from '../AppStacks/ProfileStack';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarShowLabel: false,
          headerShown: false,
        };
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="MessageStack" component={MessageStack} />
      <Tab.Screen name="CalendarStack" component={CalendarStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
}
