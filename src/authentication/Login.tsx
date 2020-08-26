import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Container from '../component/Container';
import Button from '../component/Button';
import TextInput from '../component/TextInput'

interface LoginProps {}

const Login = (_props: LoginProps) => {
  const footer = (
    <>
      <Button variant="transparent" onPress={() => alert('hello')}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#FFF'}}>Already have an account?</Text>
          <Text style={{color: '#2CB9B0'}}> Login here</Text>
        </View>
      </Button>
    </>
  )
  return (
    <Container {...{footer}} >
      <Text style={styles.Title}>Welcome back</Text>
      <Text style={styles.subTitle}>Use your credentials below and login to your account</Text>
      <TextInput iconName="mail" placeholder="Enter your Email"  data="alouani@gmail.com" refs="Email" />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  Title: {
    fontSize: 28,
    fontFamily: 'OpenSans',
    textAlign: 'center',
    marginVertical: 26,
    lineHeight: 33,
    color: '#0C0D34',
    marginTop: 58
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(12, 13, 52, 0.5)',
    fontFamily: 'OpenSans',
    marginBottom: 30
  }
});
