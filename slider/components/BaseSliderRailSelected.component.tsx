import React, { memo } from 'react';
import {StyleSheet, View, type ViewProps} from 'react-native';

export type BaseSliderRailSelectedProps = ViewProps

const BaseSliderRailSelected = ({...props}: BaseSliderRailSelectedProps) => {
  return (
    <View
      {...props}
      style={[styles.root, props?.style]}
    />
  );
};

export default memo(BaseSliderRailSelected);

const styles = StyleSheet.create({
  root: {
    height: 4,
    backgroundColor: '#4499ff',
    borderRadius: 2,
  },
});