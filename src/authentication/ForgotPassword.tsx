import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ForgotPasswordProps {}

const ForgotPassword = (_props: ForgotPasswordProps) => {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {}
});
