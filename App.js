import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import UpperTexts from './src/components/UpperTexts';
import AppMainButton from './src/components/AppMainButton';
const App = () => {
  return (
    <View style={styles.container}>
      <UpperTexts
        title="Welcome Back"
        paragraph="We're excited to have you back, can't wait to see what you've been up to since you last logged in."
      />
      <AppMainButton text="Login" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
