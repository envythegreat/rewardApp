import * as React from 'react';
import { Text, StyleSheet, StyleProp, ViewStyle, View } from 'react-native';

interface headerAuthProps {
  title?:string;
  subTitle?: string
  labelStyle?: StyleProp<ViewStyle>;
}

const HeaderAuth = ({title,subTitle}: headerAuthProps) => {
  return (
    <>
      <View>
        {title? <Text style={styles.Title}>{title}</Text> : null}
        {subTitle ? <Text style={styles.subTitle}>{subTitle}</Text> : null}
      </View>
    </>
  );
};

export default HeaderAuth;

const styles = StyleSheet.create({
  Title: {
    fontSize: 28,
    fontFamily: 'OpenSans',
    textAlign: 'center',
    marginVertical: 26,
    lineHeight: 33,
    color: '#0C0D34',
    marginTop: 58
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(12, 13, 52, 0.5)',
    fontFamily: 'OpenSans',
    marginBottom: 18
  },
});
