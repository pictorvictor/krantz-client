import {Button} from '@ant-design/react-native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {AuthStackParamList} from '../../AuthNavigator';

const RegisterPage = ({
  navigation,
}: StackScreenProps<AuthStackParamList, 'register'>) => {
  const onLoginPress = () => {
    navigation.navigate('login');
  };

  return (
    <ScrollView contentContainerStyle={RegisterPageStyles.body}>
      <Text style={RegisterPageStyles.title}>Register Page</Text>
      <Button onPress={onLoginPress}>Login</Button>
    </ScrollView>
  );
};

const RegisterPageStyles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 33, color: 'black'},
});

export default RegisterPage;
