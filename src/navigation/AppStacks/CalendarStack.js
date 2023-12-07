import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalendarScreen from '../../screens/Calendar';

const Stack = createNativeStackNavigator();
export default function CalendarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
