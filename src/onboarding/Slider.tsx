import React, {Component} from 'react'
import { View, Text , StyleSheet, Dimensions } from 'react-native'


const {width, height} = Dimensions.get('window');
const TEXT_HEIGHT = 0.70 * height;
interface IState {
}
interface IProps{
  Title: string;
  subTitle: string;
  description: string;
  direction?: boolean;
  shapes?: boolean;
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
    const leftShap = this.props.shapes ? {borderTopLeftRadius: 75} : {borderTopRightRadius: 75};
    const rightShap = this.props.shapes ? {borderBottomRightRadius: 75} : { borderBottomLeftRadius: 75,}
    return(
      <>
        <View style={[styles.SliderContainer, rightShap]}>
          <View style={[styles.titleContainer, {transform}]}>
            <Text style={styles.title}>{this.props.Title}</Text>
          </View>
        </View>
      
        <View style={styles.footer}>
          <View style={{...StyleSheet.absoluteFillObject, backgroundColor: '#BEECC4'}} />
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
    backgroundColor: '#BEECC4',
    height: TEXT_HEIGHT,
  },
  overlly: {
    flex: 1,
    backgroundColor: 'snow',
  },
  footer:{
    flex:1,
  },
  titleContainer: {
    // backgroundColor: 'snow',
    width,
    height: 100,
    justifyContent: 'center',
    borderRadius: 50
  },
  title: {
    fontSize: 70,
    color: 'black',
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
  }
})

export default Slider;