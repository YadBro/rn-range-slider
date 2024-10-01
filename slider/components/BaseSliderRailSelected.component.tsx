import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';

const BaseSliderRailSelected = () => {
  return (
    <View style={styles.root}/>
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