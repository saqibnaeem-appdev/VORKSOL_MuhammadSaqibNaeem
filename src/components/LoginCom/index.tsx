/** @format */

import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {AppliedTheme} from '@constants';
import {PrimaryButton, TextInput} from '@components';
import {getHeight, getWidth} from '@helpers';
interface Props {
  onPress?: (event: GestureResponderEvent) => void;
}

const theme = AppliedTheme();

const LoginCom: FC<Props> = Props => {
  const {onPress} = Props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      <TextInput placeholder="Email Address" rightIcon="Email" />
      <TextInput placeholder="Password" rightIcon="Lock" secureTextEntry />
      <View style={styles.bbButton}>
        <PrimaryButton
          title="Get Started ➜"
          borderRadius={20}
          width={getWidth(45)}
          onPress={onPress}
        />
      </View>
      <View style={styles.loginView}>
        <Text style={styles.login}>Already having an account? </Text>
        <TouchableOpacity>
          <Text style={[styles.login, {color: theme.button.primary}]}>
            login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainSignUp}>
        <View style={styles.signupView}>
          <Text style={[styles.login, {fontSize: 10}]}>
            By Signing up, you're agreeing to our{' '}
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.login,
                {color: theme.button.primary, fontSize: 10},
              ]}>
              Terms And Conditions
            </Text>
          </TouchableOpacity>
          <Text style={[styles.login, {fontSize: 10}]}> and </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={[
                styles.login,
                {color: theme.button.primary, fontSize: 10},
              ]}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    width: getWidth(100),
  },
  title: {
    fontWeight: 'bold',
    color: theme.text.black,
    fontSize: 30,
    width: getWidth(90),
    lineHeight: 40,
    textAlign: 'left',
  },
  text: {
    fontWeight: '600',
    color: theme.text.placeholder,
    textAlign: 'left',
    fontSize: 15,
    width: getWidth(80),
    lineHeight: 20,
  },
  bbButton: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  login: {
    color: theme.text.placeholder,
    fontSize: 15,
    fontWeight: '700',
  },
  loginView: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: getHeight(10),
    alignItems: 'flex-end',
  },
  signupView: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: getHeight(8),
    alignItems: 'flex-end',
    width: getWidth(80),
  },
  mainSignUp: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});
export default LoginCom;
