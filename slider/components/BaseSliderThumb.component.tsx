import React, {memo} from 'react';
import {View, StyleSheet, type ViewProps} from 'react-native';

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

export type BaseSliderThumbProps = {
  name: 'low' | 'high'
  left?: ViewProps
  right?: ViewProps
}

const BaseSliderThumb = ({name, left, right}: BaseSliderThumbProps) => {
  const styleRoot = name === 'high' ? styles.rootHigh : styles.rootLow
  const containerCustomRoot = name === 'high' ? right : left

  return <View
    {...containerCustomRoot}
    style={[styleRoot, containerCustomRoot?.style]}
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