/** @format */

import {View, Text, TouchableOpacity} from 'react-native';
import {FC} from 'react';
import styles from './styles';
import {AppliedTheme} from '@constants';
import LinearGradient from 'react-native-linear-gradient';
const theme = AppliedTheme();
import {getHeight, getWidth} from '@helpers';
interface Props {
  title: string;
  width: string;
  height: string;
  borderRadius: string;
  onPress: void;
}
const PrimaryButton: FC<Props> = props => {
  const {title, onPress, width, height, borderRadius} = props;
  return (
    <LinearGradient
      colors={[theme.button.primary, theme.button.secondary]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={[
        styles.container,
        {
          width: width ? width : getWidth(40),
          height: height ? height : getHeight(5),
          borderRadius: borderRadius ? borderRadius : 16,
        },
      ]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default PrimaryButton;
