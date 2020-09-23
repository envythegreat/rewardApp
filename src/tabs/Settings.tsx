import * as React from 'react';
import { _Text, View, StyleSheet, StatusBar} from 'react-native';
import HeaderAuth from '../component/HeaderAuth';
// import ShowAds from '../component/showAds';

interface SettingsProps {}

const Settings = (_props: SettingsProps) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{flex: 0.2}}>
        <View style={styles.box}>
          <HeaderAuth  title="Edit Account" color="snow" />
        </View>
      </View>
    </View>
  );
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
  }
});
