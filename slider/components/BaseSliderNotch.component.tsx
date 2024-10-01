import React, { memo } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

export type BaseSliderNotchProps = ViewProps

const BaseSliderNotch = (props: BaseSliderNotchProps) => {
  return (
    <View
      {...props}
      style={[styles.root, props?.style]}
    />
  );
};

export default memo(BaseSliderNotch);

const styles = StyleSheet.create({
  root: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#4499ff',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});