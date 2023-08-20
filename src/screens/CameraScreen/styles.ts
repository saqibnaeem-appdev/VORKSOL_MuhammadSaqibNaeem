import {getHeight, getWidth} from '@helpers';
import {StyleSheet} from 'react-native';
import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
  },
  icon: {
    width: getWidth(15),
    height: getHeight(20),
    right: 10,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    top: getHeight(20),
    alignItems: 'center',
  },

  captureButton: {
    alignSelf: 'center',
    marginVertical: 20,
    padding: 15,
    backgroundColor: theme.button.primary,
    borderRadius: 100,
    width: getWidth(25),
    height: getHeight(13),
    borderWidth: 5,
    borderColor: theme.button.secondary,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background.primary,
  },
  modalImage: {
    width: 300,
    height: 350,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  closeButton: {
    marginVertical: getHeight(3),
  },
});

export default styles;
