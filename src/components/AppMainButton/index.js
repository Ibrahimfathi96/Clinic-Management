import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const AppMainButton = props => {
  const {text, wrapperStyle, titleStyle, ...rest} = props;
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={[styles.wrapper, wrapperStyle]}>
        <Text style={[styles.title, titleStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppMainButton;
