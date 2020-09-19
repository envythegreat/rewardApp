import React, { Component } from "react";
import {View, StyleSheet } from 'react-native';
import { AdMobRewarded } from 'expo-ads-admob';
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
class RewardAds extends Component<RewardProps, RewardadsState>{
  constructor(props: Readonly<RewardProps>){
    super(props)
    this.state = {
      loadAds: false,
    }
  }

  async componentDidMount() {
    AdMobRewarded.setAdUnitID(this.props.AdId)
    AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => console.log('Rewarded'));
    AdMobRewarded.addEventListener('rewardedVideoDidLoad', () => this.setState({ loadAds: true }));
    AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => console.log('FailedToLoad'));
    AdMobRewarded.addEventListener('rewardedVideoDidOpen', () => console.log('Opened'));
    AdMobRewarded.addEventListener('rewardedVideoDidClose', () => this.setState({ loadAds: false }));
    AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication', () => console.log('LeaveApp'));
    AdMobRewarded.addEventListener('rewardedVideoDidStart', () => console.log('Started'));
    await AdMobRewarded.requestAdAsync();
  }
  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
  }
  _handlePress = async () => {
    await AdMobRewarded.showAdAsync();
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
            style={styles.btn}
          >
            <Text>Go</Text>
          </Button>
        </Right>
      </View>
    );
  }
}
export default RewardAds;

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