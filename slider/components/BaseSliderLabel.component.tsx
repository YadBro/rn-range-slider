import React, { memo } from 'react';
import { View, Text, StyleSheet, type ViewProps, type TextProps } from 'react-native';

export type BaseSliderLabelProps = {
  text: string | React.JSX.Element
  textProps?: TextProps
} & ViewProps

const BaseSliderLabel = ({ text, textProps, ...restProps }: BaseSliderLabelProps) => {
  return (
    <View
    {...restProps}
      style={[styles.root, restProps?.style]}
    >
      <Text
        {...textProps}
        style={[styles.text, textProps?.style]}
      >
        {text}
      </Text>
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