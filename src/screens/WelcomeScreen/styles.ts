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

  title: {
    fontWeight: 'bold',
    color: theme.text.black,
    textAlign: 'left',
    fontSize: 30,
    width: getWidth(80),
    lineHeight: 40,
  },
  text: {
    fontWeight: '600',
    color: theme.text.placeholder,
    textAlign: 'left',
    fontSize: 15,
    width: getWidth(80),
    lineHeight: 20,
  },
  bContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  bButton: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    height: getHeight(15),
    justifyContent: 'flex-end',
  },
});
export default styles;
