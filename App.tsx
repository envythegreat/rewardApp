import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Onboarding from './src/onboarding/Onboarding';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './src/authentication/Routes';
import Welcome from './src/authentication/Welcome'
import Login from './src/authentication/Login'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Register from './src/authentication/Register'
import ForgotPassword from './src/authentication/ForgotPassword'
import Account from './src/configaccount/account'
import Home from './src/tabs/Home'


const Stack = createStackNavigator<Routes>();
class App extends Component<{},any>{

  constructor(props:any) {
    super(props);
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      RussoOn: require('./assets/font/RussoOne-Regular.ttf'),
      DoHyeon: require('./assets/font/DoHyeon-Regular.ttf'),
      BalooTamma2: require('./assets/font/BalooTamma2-Medium.ttf'),
      OpenSans: require('./assets/font/SFProDisplay-Regular.ttf'),
      
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
          <AppLoading />
      );
    } else {
      return (
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
            }}>
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="Account" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      );
    }
  }
}

export default App;