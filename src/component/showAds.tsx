import { AdMobBanner } from 'expo-ads-admob';
import React, { Component } from 'react';
import {View, StyleSheet, Platform } from 'react-native';

interface ShowAdsProps {}
const BannerAdId = Platform.OS === 'ios' ? 'ca-app-pub-5479742637870614/5297913815' : 'ca-app-pub-5479742637870614/5106342126'
class ShowAds extends Component<ShowAdsProps>{
  constructor(props: Readonly<ShowAdsProps>){
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID={BannerAdId}
          servePersonalizedAds={true}  
        />
      </View>
    );
  }
};

export default ShowAds;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  }
});
