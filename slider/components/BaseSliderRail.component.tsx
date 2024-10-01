import React, { memo } from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';

export type BaseSliderRailProps = ViewProps

const BaseSliderRail = ({...props}:BaseSliderRailProps) => {
  return (
    <View
      {...props}
      style={[styles.root, props?.style]}
    />
  );
};

export default memo(BaseSliderRail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#7f7f7f',
  },
});