import { Accordion, Icon } from 'native-base';
import * as React from 'react';
import { Text, View, StyleSheet, StatusBar} from 'react-native';
import HeaderAuth from '../component/HeaderAuth';
import TextInput from '../component/TextInput';
// import ShowAds from '../component/showAds';

// interface SettingsProps {}
const dataArray = [
  { title: "Profile Information", 
    content: [
      {
        iconName:'mail',
        placeholder: 'Email Address',
        refs:'Email',
        keyboardType: 'email-address',
        handleState: () => console.log('gg')
      },
      {
        iconName:'user',
        placeholder: 'Full Name',
        refs:'FullName',
        keyboardType: 'default',
        handleState: () => console.log('gg')
      },
      {
        iconName:'map-pin',
        placeholder: 'Street Address',
        refs:'Address',
        keyboardType: 'default',
        handleState: () => console.log('gg')
      }
    ]
  },
  { title: "Security", 
    content:[
      {
        iconName:'lock',
        placeholder: 'Old Password',
        refs:'OldPassword',
        textEntry: true,
        keyboardType: 'default',
        handleState: () => console.log('gg')
      },
      {
        iconName:'lock',
        placeholder: 'New Password',
        refs:'NewPassword',
        textEntry: true,
        keyboardType: 'default',
        handleState: () => console.log('gg')
      },
      {
        iconName:'lock',
        placeholder: 'Confirm New Password',
        refs:'CNewPassword',
        textEntry: true,
        keyboardType: 'default',
        handleState: () => console.log('gg')
      }
    ]
  },
  { title: "Payout Settings", 
    content:[
      {
        iconName:'mail',
        placeholder: 'Paypal Email',
        refs:'Email',
        keyboardType: 'email-address',
        handleState: () => console.log('gg')
      }
    ]
  },
];
class Settings extends React.Component{
  _renderHeader(item: { title: React.ReactNode; }, expanded: any) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "transparent",
        paddingBottom:20
      }}>
      <Text style={{ fontWeight: "600",fontSize: 20 }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item: any) {
    console.log(item.content.length)
    return (
      <View style={{alignItems: 'center'}}>
        {item.content.map((it: any) => <TextInput
          iconName={it.iconName}
          placeholder={it.placeholder}
          refs={it.refs}
          keyboardType={it.keyboardType}
          handleState={it.handleState}
          key={it.refs}
          textEntry={it.textEntry ? true : false}
        />)}
      </View>
    );
  }
  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{flex: 0.2}}>
          <View style={styles.box}>
            <HeaderAuth  title="Edit Account" color="snow" />
          </View>
        </View>
        <View style={styles.centerBox}>
          <View style={styles.boxOverllay}>
            <Accordion
              dataArray={dataArray}
              animation={true}
              // @ts-ignore
              expanded={true}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              style={{borderTopColor:'#fff'}}
            />
          </View>
        </View>
      </View>
    );
  }
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  box: {
    position: 'absolute',
    top:0,
    left: 0,
    right: 0,
    bottom:0,
    borderBottomRightRadius: 75,
    backgroundColor: '#0C0D34'
  },
  boxOverllay:{
    borderTopLeftRadius: 75,
    backgroundColor: '#FFF',
    flex:1,
    overflow: 'hidden',
    // alignItems: 'center',
    paddingTop:50
  },
  centerBox: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#0C0D34'
  },
  profil:{
    fontSize:20,
    marginTop:20,
    textAlign: 'center'
  }
});
