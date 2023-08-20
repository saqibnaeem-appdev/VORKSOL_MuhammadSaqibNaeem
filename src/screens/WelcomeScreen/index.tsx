import {Text, View, TouchableOpacity} from 'react-native';
import React, {FC, useRef} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import styles from './styles';
import {PrimaryButton, TextInput} from '@components';
import {getHeight, getWidth} from '@helpers';
import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
const WelcomeScreen: FC = ({navigation}) => {
  const BottomSheetContent = () => {
    return (
      <View style={styles.bContainer}>
        <Text style={styles.title}>Know Everything about the weather</Text>
        <Text style={styles.text}>
          Start now and learn more about local weather instantly
        </Text>
        <View style={styles.bButton}>
          <PrimaryButton
            title="Continue"
            borderRadius={20}
            width={getWidth(30)}
          />
        </View>
      </View>
    );
  };
  const bottomSheetModalRef = React.useRef(null);

  const openBottomSheet = () => {
    bottomSheetModalRef.current?.present();
  };

  const closeBottomSheet = () => {
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={['45%', '45%']}
          index={0}
          enablePanDownToClose={false}>
          <BottomSheetContent />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default WelcomeScreen;
