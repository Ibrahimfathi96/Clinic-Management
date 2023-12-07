import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageScreen from '../../screens/Message';

const Stack = createNativeStackNavigator();
export default function MessageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
