/** @format */

import {StyleSheet} from 'react-native';

import {getHeight, getWidth} from '@helpers';
import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {justifyContent: 'center'},
  textStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.text.white,
  },
});
export default styles;
