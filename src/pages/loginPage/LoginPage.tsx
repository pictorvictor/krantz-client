import {Button} from '@ant-design/react-native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {AuthStackParamList} from '../../AuthNavigator';

const LoginPage = ({
  navigation,
}: StackScreenProps<AuthStackParamList, 'login'>) => {
  const onRegisterPress = () => {
    navigation.navigate('register');
  };

  return (
    <ScrollView contentContainerStyle={LoginPageStyles.body}>
      <Text style={LoginPageStyles.title}>Login Page</Text>
      <Button onPress={onRegisterPress}>Register</Button>
    </ScrollView>
  );
};

const LoginPageStyles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 33, color: 'black'},
});

export default LoginPage;
