/** @format */

import {getHeight, getWidth} from '@helpers';
import {AppliedTheme} from '@constants';
import {StyleSheet, Dimensions} from 'react-native';

const theme = AppliedTheme();
const styles = StyleSheet.create({
  textField: {
    height: getHeight(7),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.text.placeholder,
    marginVertical: 5,
    width: getWidth(90),
  },
  inputStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Regular',
    color: theme.text.placeholder,
    marginLeft: getWidth(1),
  },
  container: {
    marginVertical: getHeight(1),
  },
  iconStyle: {
    resizeMode: 'contain',
    width: getWidth(8),
    // backgroundColor:'red',
    height: getHeight(3),
  },
});
export default styles;
