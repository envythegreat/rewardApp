import React, { Component } from 'react';
import { StyleSheet, Platform} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Text,
  Badge,
  View,
  Content
} from 'native-base';
import HeaderSVG from '../component/icons/HeaderSVG';
import {AdMobBanner} from 'expo-ads-admob'
import AdmobAds from '../component/admobAds'
import HeaderAuth from '../component/HeaderAuth';




interface HomeProps {}
class Home extends Component<HomeProps>{
  BannerAdId: string;
  constructor(props : Readonly<HomeProps>) {
    super(props)
    this.BannerAdId = Platform.OS === 'ios'
                                    ? "ca-app-pub-5479742637870614/9709568594"
                                    : "ca-app-pub-5479742637870614/8752366680"
  }

  async componentDidMount() {
    // await AdMobInterstitial.setAdUnitID(this.AdMobInterstitialAdId);

  }
  render(){
    return (
      <Container>
        <Header transparent>
          <Left>
            <View>
              <HeaderSVG />
            </View>
          </Left>
          <Right>
            <Badge style={{ backgroundColor: 'lightblue', flexDirection: 'row'}}>
              <Text style={{ color: 'white' }}>1866</Text>
              <Text style={{ color: 'white' }}>Point</Text>
            </Badge>
          </Right>
        </Header>
        <View style={styles.Bigcontainer}>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID={this.BannerAdId}
            servePersonalizedAds={true}  
          />
        </View>
        <Content>
          <HeaderAuth title="Get Point by watching ads" marginT={5} />
          <AdmobAds AdId={Platform.OS === 'ios' ? 'ca-app-pub-5479742637870614/9586882309' : 'ca-app-pub-5479742637870614/9447281504'}  adType="AdMobRewarded" />
          <AdmobAds AdId={Platform.OS === 'ios' ? 'ca-app-pub-5479742637870614/9828563065' : 'ca-app-pub-5479742637870614/9445419686'}  adType="AdMobInterstitial" />
        </Content>
      </Container>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  Bigcontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
