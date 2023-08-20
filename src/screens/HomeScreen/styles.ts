import {StyleSheet} from 'react-native';
import {AppliedTheme} from '@constants';
import {getWidth, getHeight} from '@helpers';
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.primary,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    bottom: 50,
    alignItems: 'center',
  },
  comStyle: {
    width: getWidth(100),
  },
});
export default styles;
