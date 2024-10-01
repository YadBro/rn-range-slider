import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export type TextButtonProps = {
  text: string | React.JSX.Element
  containerStyle?: object,
  textStyle?: object,
  onPress: (event: GestureResponderEvent) => void | undefined
}

const TextButton = ({ text, containerStyle, textStyle, onPress }: TextButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{...styles.containerStyle, ...containerStyle}}>
        <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#4499ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
  },
});