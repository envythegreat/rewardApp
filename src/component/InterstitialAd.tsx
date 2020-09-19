import React, { Component } from "react";
import { Platform, View, StyleSheet } from 'react-native';
import { AdMobInterstitial } from 'expo-ads-admob';
import { Text, Right, Button } from "native-base";

// ios id ca-app-pub-5479742637870614~9285869090
// reward id ca-app-pub-5479742637870614/9586882309

// android id ca-app-pub-5479742637870614~5673092993
// reward id ca-app-pub-5479742637870614/9447281504
interface InterstitialAdState{
  loadAds: boolean;
  rewardId : string;
}
interface InterstitialAdProps{}
class InterstitialAd extends Component<InterstitialAdProps, InterstitialAdState>{
  constructor(props: Readonly<InterstitialAdProps>){
    super(props)
    this.state = {
      loadAds: false,
      rewardId: Platform.OS === 'ios'
                  ? "ca-app-pub-5479742637870614/9828563065"
                  : "ca-app-pub-5479742637870614/9445419686",
    }
  }

  async componentDidMount() {
    await AdMobInterstitial.setAdUnitID(this.state.rewardId);
    AdMobInterstitial.addEventListener("interstitialDidLoad", () => this.setState({ loadAds: true }));
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>console.log("interstitialDidFailToLoad"));
    AdMobInterstitial.addEventListener("interstitialDidOpen", () => console.log("interstitialDidOpen"));
    AdMobInterstitial.addEventListener("interstitialDidClose", () => this.setState({ loadAds: false }));
    AdMobInterstitial.addEventListener("interstitialWillLeaveApplication", () =>console.log("interstitialWillLeaveApplication"));
    await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
  }
  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }
  _handlePress = async () => {
    await AdMobInterstitial.showAdAsync();
  }
  render() {
    const {loadAds} = this.state;
    return(
      // <Button 
      //   onPress={this._handlePress}
      //   title="AdMobInterstitial"
      //   disabled={!loadAds}
      // />
      <View style={styles.Btnreward}>
        <Text style={styles.Textreward}>Click Go To Earn 100 Point</Text>
        <Right>
          <Button rounded
            onPress={this._handlePress}
            disabled={!loadAds}
            style={styles.btn}
          >
            <Text>Go</Text>
          </Button>
        </Right>
      </View>
    );
  }
}
export default InterstitialAd;

const styles = StyleSheet.create({
  Btnreward:{
    flexDirection: 'row',
    // borderColor: '#000',
    // borderWidth: 2,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  Textreward:{
    fontSize: 15,
    color: '#746c6c',
    marginLeft: 15,
    fontFamily: 'RussoOn'
  },
  btn:{
    marginRight: 20
  }
})