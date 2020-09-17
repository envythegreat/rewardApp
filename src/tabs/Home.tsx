import React from 'react';
import {StyleSheet } from 'react-native';
import { Container, Header, Left,  Right, Icon,  Text, Badge, View } from 'native-base';
import HeaderSVG from '../component/icons/HeaderSVG'

interface HomeProps {}
const Home = (_props: HomeProps) => {

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
    </Container>
  );
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
