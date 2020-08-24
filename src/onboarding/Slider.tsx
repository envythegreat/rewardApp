import React, {Component} from 'react'
import { View, Text , StyleSheet, Dimensions, Image } from 'react-native'


const {width, height} = Dimensions.get('window');
const TEXT_HEIGHT = 0.66 * height;
interface IState {
}
interface IProps{
  Title: string;
  subTitle: string;
  description: string;
  direction?: boolean;
  shapes?: boolean;
  simple?: boolean;
  smallAvg?:boolean;
  doublAvg?:boolean;
  gift?:boolean;
}

class Slider extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }
  
  render() {
    const transform = [
      {translateY: (TEXT_HEIGHT -100) /2 },
      {translateX: this.props.direction ? width / 2-60 : -width / 2 +60 },
      {rotate: this.props.direction ? '-90deg': '90deg'}
    ]
    let leftShap, rightShap;
    if(!this.props.simple) {
      leftShap = this.props.shapes ? {borderTopLeftRadius: 75} : {borderTopRightRadius: 75};
      rightShap = this.props.shapes ? {borderBottomRightRadius: 0} : { borderBottomLeftRadius: 0,}
    }
    let Images;
    if(this.props.smallAvg){
      Images = (
        <>
          <Image  source={require('../../assets/img/bns.png')}  style={styles.bns} />
          <Image  source={require('../../assets/img/smallAvg.png')}  style={styles.smallAvg} />
        </>
      ) ;
    }else if(this.props.doublAvg) {
      Images = <Image  source={require('../../assets/img/doublAvg.png')}  style={styles.doublAvg} /> ;
    }else {
      Images = (
        <>
          <Image  source={require('../../assets/img/gift.png')}  style={styles.gift} />
          <Image  source={require('../../assets/img/wisher.png')}  style={styles.wisher} />
        </>
      )
    }  
    return(
      <>
        <View style={[styles.SliderContainer, rightShap]}>
          <View style={[styles.titleContainer, {transform}]}>
            <Text style={styles.title}>{this.props.Title}</Text>
          </View>
          {Images}
        </View>
      
        <View style={styles.footer}>
          <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'white'}} />
          <View style={[styles.overlly, leftShap]}>
            <View style={styles.footerContainer}>
              <Text style={styles.Subtitle}> {this.props.subTitle} </Text>
              <Text style={styles.description}> {this.props.description} </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({

  SliderContainer:{
    backgroundColor: 'white',
    height: TEXT_HEIGHT,
  },
  overlly: {
    flex: 1,
    backgroundColor: '#FFE4D9',
  },
  footer:{
    flex:1,
  },
  titleContainer: {
    backgroundColor: '#BFEAF5',
    width,
    height: 100,
    justifyContent: 'center',
    borderRadius: 50,
    zIndex: 0
  },
  title: {
    fontSize: 64,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 80,
    fontFamily: "RussoOn",
    fontWeight: '100'
  },
  footerContainer:{
    flex: 0.80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Subtitle:{
    fontFamily: 'BalooTamma2',
    fontSize: 30,
    color: '#0C0D34'
  },
  description:{
    fontFamily: 'BalooTamma2',
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'center',
    color: '#0C0D34'
  },
  smallAvg: {
    position: "absolute",
    bottom: -5,
    left: 65
  },
  doublAvg: {
    position: "absolute",
    bottom: 0,
    right: 20
  },
  wisher: {
    position: "absolute",
    bottom: -2,
    left: 90
  },
  gift:{
    height: '50%',
    width: '75%',
  },
  bns:{
    height: '50%',
    width: '75%',
  }
})

export default Slider;