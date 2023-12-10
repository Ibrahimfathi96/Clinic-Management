/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../AppStacks/HomeStack';
import MessageStack from '../AppStacks/MessageStack';
import CalendarStack from '../AppStacks/CalendarStack';
import ProfileStack from '../AppStacks/ProfileStack';
import {View, Image, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../utils/Theme';
import HomeSVG from '../../components/SVG/HomeSVG';
import CalendaSVG from '../../components/SVG/CalendaSVG';
import MessageSVG from '../../components/SVG/MessageSVG';
import styles from './styles';
import SearchStack from '../AppStacks/SearchStack';

const {height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  console.log('HEIGHT:', height, 'HEIGHT%', 80 / height);
  return (
    <Tab.Navigator
      initialRouteName={'HomeStack'}
      screenOptions={() => {
        return {
          tabBarStyle: {height: height * 0.09},
          tabBarShowLabel: false,
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: COLORS.primaryColor,
          tabBarInactiveTintColor: 'black',
          tabBarHideOnKeyboard: true,
        };
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <View>
                <HomeSVG
                  color={color}
                  fillColor={color}
                  size={24}
                  isfilled={focused}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MessageStack"
        component={MessageStack}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <View>
                <MessageSVG
                  color={color}
                  fillColor={color}
                  size={24}
                  isfilled={focused}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: () => {
            return (
              <View style={styles.customButtonStyle}>
                <Feather name="search" size={24} color="white" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CalendarStack"
        component={CalendarStack}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <View>
                <CalendaSVG
                  color={color}
                  fillColor={color}
                  size={24}
                  isfilled={focused}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  ...styles.imageWrapper,
                  backgroundColor: focused ? COLORS.primaryColor : COLORS.white,
                }}>
                <Image
                  source={require('../../assets/images/user_image.png')}
                  style={styles.image}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
