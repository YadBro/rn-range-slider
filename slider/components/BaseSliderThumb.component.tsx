import React, {memo} from 'react';
import {View, StyleSheet, type ViewProps} from 'react-native';

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

export type BaseSliderThumbProps = {
  name: 'low' | 'high'
} & ViewProps

const BaseSliderThumb = ({name, ...props}: BaseSliderThumbProps) => {
  const styleRoot = name === 'high' ? styles.rootHigh : styles.rootLow
  return <View
    {...props}
    style={[styleRoot, props?.style]}
  />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
    borderColor: '#7f7f7f',
    backgroundColor: '#aaaaaa',
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
    borderColor: '#7f7f7f',
    backgroundColor: '#ffffff',
  },
});

export default memo(BaseSliderThumb);