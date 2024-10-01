import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const BaseSliderRail = () => {
  return (
    <View style={styles.root}/>
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