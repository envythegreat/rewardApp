import React, { Component } from 'react';
import Onboarding from './src/onboarding/Onboarding'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
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
        <Onboarding />
      );
    }
  }
}

export default App;