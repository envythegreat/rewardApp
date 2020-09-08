import React from 'react';
import { Text, View} from 'react-native';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
interface FooterProps {
  label: string;
  btn: string;
  naviga: any;
}

const ContainerFooter = ({label, btn, naviga}: FooterProps) => {
  const navigation =useNavigation();
  return (
    <Button variant="transparent" onPress={() => navigation.navigate(naviga)} >
      <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#FFF'}}>{label}</Text>
        <Text style={{color: '#2CB9B0'}}>{btn}</Text>
      </View>
  </Button>
  );
};

export default ContainerFooter;
