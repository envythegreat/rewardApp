import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Container from '../component/Container';
import Button from '../component/Button';
import TextInput from '../component/TextInput'
import CheckBox from '../component/CheckBox'


interface LoginProps {}
const {width} = Dimensions.get('window')


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
      <TextInput iconName="mail" placeholder="Enter your Email" refs="Email" keyboardType="email-address" />
      <TextInput iconName="lock" placeholder="Enter your password" refs="Password" keyboardType="default" textEntry={true} />
      <View style={styles.bottomLogin}>
          <View>
            <CheckBox label="Remember me" />
          </View>
          <TouchableOpacity>
            <Text style={{color: '#2CB9B0', }}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
      <View style={{alignItems:'center'}}>
            <Button 
              label="Log into your account"
              variant="primary"
              onPress={() => alert('bello')}
            />
          </View>
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
    marginBottom: 18
  },
  bottomLogin:{
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    justifyContent: 'space-between',
    marginVertical: 20
  }
});
