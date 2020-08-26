import React, { Component } from 'react';
import { View, StyleSheet, TextInput as Input, Dimensions } from 'react-native';
import {Feather as Icon} from "@expo/vector-icons"
import {validate, ValidateColors} from '../config/functions'

const {width} = Dimensions.get('window')

interface TextInputProps {
  placeholder: string;
  iconName: string;
  data: string;
  refs: string;
}
interface TextInputState {
  inputValue: string
}

class TextInput extends Component<TextInputProps, TextInputState>{
  constructor(props: Readonly<TextInputProps>){
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  render() {
    const {iconName , placeholder, refs, data} = this.props;
    const  colors = validate(data, refs) ? ValidateColors.Valid : ValidateColors.Invalid
    return (
      <View style={[styles.container, {borderColor: colors}]}>
        <View style={{padding: 5,paddingLeft: 13}}>
          <Icon name={iconName}  style={styles.iconSy} size={18} color={colors} />
        </View>
        <Input 
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          style={{flex:1,height:35}}
          value={this.state.inputValue}
        />
        <View style={{padding: 5,paddingHorizontal: 10}}>
          <Icon name="check-circle"  style={styles.iconSy} size={18} color={colors} />
        </View>
      </View>
    );
  }
}

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    width: width * 0.8,
    borderRadius: 5,
    marginVertical: 20
  },
  iconSy:{ }
});
