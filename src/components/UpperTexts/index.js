import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const UpperTexts = props => {
  const {title, paragraph, titleStyle, paragraphStyle, wrapperStyle} = props;
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.para, paragraphStyle]}>{paragraph}</Text>
    </View>
  );
};

export default UpperTexts;
