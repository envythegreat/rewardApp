import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TabbarProps {}

const Tabbar = (_props: TabbarProps) => {
  return (
    <View style={styles.container}>
      <Text>Tabbar</Text>
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {}
});
