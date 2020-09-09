import React, { Component } from 'react';
import { View, StyleSheet, TextInput as Input, Dimensions, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import {Feather as Icon} from "@expo/vector-icons"
import {validate, ValidateColors} from '../config/functions'
import { TextInputMask } from 'react-native-masked-text'
const {width} = Dimensions.get('window')

export interface TextInputProps {
  placeholder: string;
  iconName: string;
  refs: string;
  keyboardType: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
  textEntry?: boolean;
  handleState: (e:string, ref:string) => void;
  isDate?: boolean;
}
interface TextInputState {
  inputValue: string;
  checkOrX: true | false | null;
}


class TextInput extends Component<TextInputProps, TextInputState>{
  constructor(props: Readonly<TextInputProps>){
    super(props);
    this.state = {
      inputValue: '',
      checkOrX: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    const myValue = validate(this.state.inputValue, this.props.refs);
    this.setState({
      inputValue: e.nativeEvent.text,
      checkOrX: myValue
    })
    this.props.handleState(this.state.inputValue, this.props.refs)
  }
  render() {
    const {iconName , placeholder, keyboardType, textEntry, isDate} = this.props;
    const  colors = this.state.checkOrX === null ? ValidateColors.Default : this.state.checkOrX ? ValidateColors.Valid : ValidateColors.Invalid
    return (
      <View style={[styles.container, {borderColor: colors}]}>
        <View style={{padding: 5,paddingLeft: 13}}>
          <Icon name={iconName}  style={styles.iconSy} size={18} color={colors} />
        </View>
        {isDate ?<TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          style={{flex:1,height:35}}
          value={this.state.inputValue}
          onChange={this.handleChange}
          {...{keyboardType}}
          onBlur={() => this.handleChange}
          secureTextEntry={textEntry}
          returnKeyType="done"
        /> : <Input 
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          style={{flex:1,height:35}}
          value={this.state.inputValue}
          onChange={this.handleChange}
          {...{keyboardType}}
          onBlur={() => this.handleChange}
          secureTextEntry={textEntry}
        />}
        {
          this.state.checkOrX === null
            ? null
            : this.state.checkOrX ?
            (
              <View style={{padding: 5,paddingHorizontal: 10}}>
                <Icon name="check-circle"  style={styles.iconSy} size={18} color={colors} />
              </View>
            ) : (
              <View style={{padding: 5,paddingHorizontal: 10}}>
                <Icon name="alert-circle"  style={styles.iconSy} size={18} color={colors} />
              </View>
            )
        }
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
    marginVertical: 20,
    marginBottom: 5
  },
  iconSy:{ }
});
