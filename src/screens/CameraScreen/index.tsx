import React, {useState, useRef} from 'react';
import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {RNCamera, CameraType, FlashMode} from 'react-native-camera';
import {FlashLightON, FlashLightOff, Camera, Cross} from '@assets';
const CameraScreen: React.FC = () => {
  const cameraRef = useRef<RNCamera | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>(
    RNCamera.Constants.Type.back,
  );
  const [flashMode, setFlashMode] = useState<FlashMode>(
    RNCamera.Constants.FlashMode.off,
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState('');

  const toggleCamera = () => {
    setCameraType(
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  const toggleFlash = () => {
    setFlashMode(
      flashMode === RNCamera.Constants.FlashMode.off
        ? RNCamera.Constants.FlashMode.on
        : RNCamera.Constants.FlashMode.off,
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setCapturedImage(data.uri);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        flashMode={flashMode}
        captureAudio={false}
      />
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={takePicture}></TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={toggleCamera}>
          <Camera width="40px" height="40px" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFlash}>
          {flashMode ? (
            <FlashLightON width="40px" height="40px" />
          ) : (
            <FlashLightOff width="40px" height="40px" />
          )}
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <Image source={{uri: capturedImage}} style={styles.modalImage} />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}>
            <Cross width="40px" height="40px" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CameraScreen;
