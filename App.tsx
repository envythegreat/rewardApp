import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Onboarding from './src/onboarding/Onboarding';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
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
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
          }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

export default App;