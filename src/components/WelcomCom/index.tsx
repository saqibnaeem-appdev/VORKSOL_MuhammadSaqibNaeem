/** @format */

import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppliedTheme} from '@constants';
import {PrimaryButton} from '@components';
import {getHeight, getWidth} from '@helpers';
interface Props {
  onPress?: (event: GestureResponderEvent) => void;
}

const theme = AppliedTheme();

const WelcomeCom: FC<Props> = Props => {
  const {onPress} = Props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Know Everything about the weather</Text>
      <Text style={styles.text}>
        Start now and learn more about local weather instantly
      </Text>
      <View style={styles.bButton}>
        <PrimaryButton
          title="Continue"
          borderRadius={20}
          width={getWidth(30)}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: getWidth(100),
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: theme.text.black,
    fontSize: 30,
    width: getWidth(80),
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
  bButton: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    height: getHeight(15),
    justifyContent: 'flex-end',
  },
});
export default WelcomeCom;
