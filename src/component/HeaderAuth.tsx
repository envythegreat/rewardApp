import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface headerAuthProps {
  title?:string;
  subTitle?: string
  marginT?: number;
  color?: string
}

const HeaderAuth = ({title,subTitle,marginT, color}: headerAuthProps) => {
  return (
    <>
      <View>
        {title? <Text style={[styles.Title, {marginTop: marginT ? marginT : 58},{color}]}>{title}</Text> : null}
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
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(12, 13, 52, 0.5)',
    fontFamily: 'OpenSans',
    marginBottom: 18
  },
});
