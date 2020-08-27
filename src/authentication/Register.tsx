import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RegisterProps {}

const Register = (_props: RegisterProps) => {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {}
});
