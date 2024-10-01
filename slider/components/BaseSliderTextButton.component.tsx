import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TextProps, TouchableWithoutFeedback, type TouchableWithoutFeedbackProps, View } from 'react-native';

export type TextButtonProps = {
  text: string | React.JSX.Element
  textStyle?: object,
  touchableWithoutFeedbackProps?: TouchableWithoutFeedbackProps
  containerProps?: TouchableWithoutFeedbackProps
  textProps?: TextProps
  onPress: (event: GestureResponderEvent) => void | undefined
}

const TextButton = ({
  text,
  touchableWithoutFeedbackProps,
  containerProps,
  textProps,
  onPress
}: TextButtonProps) => {
  return (
    <TouchableWithoutFeedback
      {...touchableWithoutFeedbackProps}
      onPress={onPress}
    >
      <View
        {...containerProps}
        style={[
          styles.containerStyle,
          containerProps?.style,
        ]}
      >
        <Text
          {...textProps}
          style={[
            styles.textStyle,
            textProps?.style,
          ]}
        >
          {text}
        </Text>
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