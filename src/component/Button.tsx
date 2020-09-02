import React, { ReactNode } from 'react';
import {RectButton} from "react-native-gesture-handler"
import { Text, StyleSheet } from 'react-native';

interface ButtonProps{
  variant : "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({variant, label, onPress, children}:ButtonProps) => {
  const backgroundColor = 
    variant === "primary"
      ? "#2CB9B0" 
      : variant === "transparent"
      ? "rgba(12, 13, 52, 0)"
      : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton 
      style={[styles.container, {backgroundColor}]}
      {...{onPress}}  
    >
      {children ? children : (
        <Text style={[styles.label, {color}]}>{label}</Text>
      )}
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
  },
  label:{
    fontSize: 15,
    fontFamily: 'OpenSans',
    textAlign: "center",
  }
})

Button.defaultProps = {variant: "default"};
export default Button;