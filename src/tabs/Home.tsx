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
import {AdMobInterstitial, AdMobBanner} from 'expo-ads-admob'

interface HomeProps {}
class Home extends Component<HomeProps>{
  BannerAdId: string;
  AdMobInterstitialAdId: string;
  constructor(props : Readonly<HomeProps>) {
    super(props)
    this.BannerAdId = Platform.OS === 'ios'
                                    ? "ca-app-pub-5479742637870614/9709568594"
                                    : "ca-app-pub-5479742637870614/8752366680"
    this.AdMobInterstitialAdId = Platform.OS === 'ios'
                                    ? "ca-app-pub-5479742637870614~9285869090"
                                    : "ca-app-pub-5479742637870614~5673092993"
  }

  async componentDidMount() {
    await AdMobInterstitial.setAdUnitID(this.AdMobInterstitialAdId);
    await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
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
        <Content>
          <View style={styles.Bigcontainer}>
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID={this.BannerAdId}
              servePersonalizedAds={true}  
            />
          </View>
        </Content>
      </Container>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  Bigcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
