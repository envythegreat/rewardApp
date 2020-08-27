import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Feather as Icon} from "@expo/vector-icons"
// import { RectButton } from 'react-native-gesture-handler';

interface CheckBoxProps {
  label: string;
}

const CheckBox = ({label}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false)
  return (
    <TouchableOpacity onPress={() => setChecked((c) => !c)} style={{justifyContent: 'center',}}>
      <View style={styles.container}>
        <View style={[styles.howknow,{backgroundColor: checked ? "#2CB9B0" : "#FFF",}]}>
          <Icon name="check" color="#FFF" />
        </View>
        <Text style={{fontFamily: 'OpenSans'}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  howknow:{
    borderRadius: 5, 
    width: 20, 
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2CB9B0',
    marginHorizontal: 5
  }
});
