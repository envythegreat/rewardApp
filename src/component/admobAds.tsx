import React, { Component } from "react";
import {View, StyleSheet } from 'react-native';
import { AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob';
import { Button, Right, Text } from "native-base";

// ios id ca-app-pub-5479742637870614~9285869090
// reward id ca-app-pub-5479742637870614/9586882309

// android id ca-app-pub-5479742637870614~5673092993
// reward id ca-app-pub-5479742637870614/9447281504
interface RewardadsState{
  loadAds: boolean;
}
interface RewardProps{
  AdId: string;
  adType?: string;
}
class AdmobAds extends Component<RewardProps, RewardadsState>{
  constructor(props: Readonly<RewardProps>){
    super(props)
    this.state = {
      loadAds: false,
    }
  }

  async componentDidMount() {
    if (this.props.adType === 'AdMobRewarded') {
      await AdMobRewarded.setAdUnitID(this.props.AdId)
      AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => console.log('Rewarded'));
      AdMobRewarded.addEventListener('rewardedVideoDidLoad', () => this.setState({ loadAds: true }));
      AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => console.log('FailedToLoad'));
      AdMobRewarded.addEventListener('rewardedVideoDidOpen', () => console.log('Opened'));
      AdMobRewarded.addEventListener('rewardedVideoDidClose', () => this.setState({ loadAds: false }));
      AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication', () => console.log('LeaveApp'));
      AdMobRewarded.addEventListener('rewardedVideoDidStart', () => console.log('Started'));
      await AdMobRewarded.requestAdAsync();
    } else if (this.props.adType === 'AdMobInterstitial') {
      await AdMobInterstitial.setAdUnitID(this.props.AdId);
      AdMobInterstitial.addEventListener("interstitialDidLoad", () => this.setState({ loadAds: true }));
      AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>console.log("interstitialDidFailToLoad"));
      AdMobInterstitial.addEventListener("interstitialDidOpen", () => console.log("interstitialDidOpen"));
      AdMobInterstitial.addEventListener("interstitialDidClose", () => this.setState({ loadAds: false }));
      AdMobInterstitial.addEventListener("interstitialWillLeaveApplication", () =>console.log("interstitialWillLeaveApplication"));
      await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
    } 
  }
  componentWillUnmount() {
    if (this.props.adType === 'AdMobRewarded') {
      AdMobRewarded.removeAllListeners();
    } else if (this.props.adType === 'AdMobInterstitial') {
      AdMobInterstitial.removeAllListeners();
    }
  }
  _handlePress = async () => {
    if (this.props.adType === 'AdMobRewarded') {
      await AdMobRewarded.showAdAsync();
    } else if (this.props.adType === 'AdMobInterstitial') {
      await AdMobInterstitial.showAdAsync();
    }
  }
  render() {
    const {loadAds} = this.state;
    return(
      <View style={styles.Btnreward}>
        <Text style={styles.Textreward}>Click Go To Earn 100 Point</Text>
        <Right>
          <Button rounded
            onPress={this._handlePress}
            disabled={!loadAds}
            style={loadAds ? styles.btn : [styles.btn, {borderColor: '#000',borderWidth: 1,backgroundColor: 'transparent'}]}
          >
            <Text style={loadAds ? {color: '#fff'} : {color: '#000'}}>Go</Text>
          </Button>
        </Right>
      </View>
    );
  }
}
export default AdmobAds;

const styles = StyleSheet.create({
  Btnreward:{
    flexDirection: 'row',
    borderColor: '#000',
    // borderWidth: 2,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1
  },
  Textreward:{
    fontSize: 15,
    color: '#746c6c',
    marginLeft: 15,
    fontFamily: 'RussoOn'
  },
  btn:{
    marginRight: 20,
    padding: 20,
    backgroundColor: '#2CB9B0',
    // borderColor: '#000',
    // borderWidth: 1
  }
})