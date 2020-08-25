
import React from 'react'
import { View, Text, StyleSheet} from "react-native";
import Button from '../component/Button'
interface SubSlideProps {
  subTitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
  welcome?:boolean;
}


const SubSlide = ({subTitle, description, last, onPress, welcome}: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}> {subTitle} </Text>
      <Text style={styles.description}> {description} </Text>
      <Button 
        label={last ? "Let's get Started" : welcome ? "Have an account? Login" : "Next"} 
        variant={last ? "primary" : welcome ? "primary" : "default"}
        {... {onPress}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  subTitle: {
    fontFamily: 'RussoOn',
    fontSize: 24,
    color: '#0C0D34',
    lineHeight: 30,
    marginBottom: 12
  },
  description: {
    fontFamily: 'OpenSans',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  }
})

export default SubSlide;