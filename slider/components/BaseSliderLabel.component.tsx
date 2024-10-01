import React, { memo } from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

export type BaseSliderLabelProps = {
  text: string | React.JSX.Element
} & ViewProps

const BaseSliderLabel = ({ text, ...restProps }: BaseSliderLabelProps) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#4499ff',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default memo(BaseSliderLabel);