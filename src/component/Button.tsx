import React from 'react';
import {RectButton} from "react-native-gesture-handler"
import { View, Text, StyleSheet } from 'react-native';

interface ButtonProps{
  variant : "default" | "primary";
  label: string;
}

const Button = ({variant, label}:ButtonProps) => {
  const backgroundColor = variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.5)";
  const color = variant === "primary" ? "white" : "#2CB9B0";
  return (
    <RectButton>
      <View style={[styles.container, {backgroundColor}]}>
        <Text style={[styles.label, {color}]}>{label}</Text>
      </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
  },
  label:{
    fontSize: 15,
    fontFamily: 'OpenSans'
  }
})

Button.defaultProps = {variant: "default"};
export default Button;