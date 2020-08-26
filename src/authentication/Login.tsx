import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Container from '../component/Container';
import Button from '../component/Button';

interface LoginProps {}

const Login = (props: LoginProps) => {
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
    <Container {...{footer}}>
      
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {}
});
