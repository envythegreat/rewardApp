import React, { Component } from 'react';
import { View, StyleSheet, TextInput as Input, Dimensions, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import {Feather as Icon} from "@expo/vector-icons"
import {validate, ValidateColors} from '../config/functions'
import { TextInputMask } from 'react-native-masked-text'
const {width} = Dimensions.get('window')
import { Text } from 'react-native-elements';
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
  checkOrX: boolean | null;
  isError: boolean | string | null;
}


class TextInput extends Component<TextInputProps, TextInputState>{
  constructor(props: Readonly<TextInputProps>){
    super(props);
    this.state = {
      inputValue: '',
      checkOrX: null,
      isError: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  async handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    let myValue = validate(this.state.inputValue, this.props.refs);
    await this.setState({
      inputValue: e.nativeEvent.text,
    },()=> {
      myValue = validate(this.state.inputValue, this.props.refs)
      // console.log(myValue)
      this.props.handleState(this.state.inputValue, this.props.refs)
      this.setState({
        // @ts-ignore
        checkOrX: myValue.isValid,
        // @ts-ignore
        isError: myValue.error
      })
    })
      console.log(this.state.isError)
      console.log(this.state.checkOrX)
    
  }
  render() {
    const {iconName , placeholder, keyboardType, textEntry, isDate} = this.props;
    const  colors = this.state.checkOrX === null ? ValidateColors.Default : this.state.checkOrX ? ValidateColors.Valid : ValidateColors.Invalid
    return (
      <>
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
          onBlur={() => {this.handleChange}}
          secureTextEntry={textEntry}
          returnKeyType={'done'}
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
      {this.state.isError ? <View style={styles.myerr}><Text style={styles.errorTxt}>{this.state.isError}</Text></View> : null}
      </>
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
    marginBottom: 2
  },
  iconSy:{ },
  errorTxt:{
    fontSize:10,
    color: 'red',
  },
  myerr:{
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal:40
  }
});
