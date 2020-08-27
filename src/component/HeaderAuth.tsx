import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

interface headerAuthProps {
  title:string;
  subTitle: string
}

const HeaderAuth = ({title,subTitle}: headerAuthProps) => {
  return (
    <>
      <Text style={styles.Title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
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
