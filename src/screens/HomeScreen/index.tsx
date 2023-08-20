import React, {FC, useRef, useState, useEffect} from 'react';
import {View, Animated, FlatList, Dimensions, Text} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {PrimaryButton, WelcomeCom, LoginCom} from '@components';
import {ScrollView} from 'react-native-gesture-handler';
import {getHeight, getWidth} from '@helpers';
import {AppliedTheme} from '@constants';
import styles from './styles';
import {Easing} from 'react-native-reanimated';

const theme = AppliedTheme();

const HomeScreen: FC = ({navigation}) => {
  const bottomSheetModalRef = useRef(null);
  const [snapPoints, setSnapPoints] = useState([getHeight(40), getHeight(60)]);

  const openBottomSheet = (index = 0) => {
    bottomSheetModalRef.current?.present(index);
  };
  const [visibleItems, setVisibleItems] = useState([]);
  console.log('visibleItems======', visibleItems);
  const scrollX = useRef(new Animated.Value(0)).current;
  const onViewableItemsChanged = ({viewableItems}) => {
    setVisibleItems(viewableItems);
  };
  useEffect(() => {
    if (visibleItems.length > 0) {
      const index = visibleItems[0].index;
      if (index === 0) {
        setSnapPoints([getHeight(40), getHeight(40)]);
      } else if (index === 1) {
        setSnapPoints([getHeight(60), getHeight(60)]);
      }
    }
  }, [visibleItems]);
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: onViewableItemsChanged,
    },
  ]);
  const flatListRef = useRef(null); // Add this ref for the FlatList

  // Function to scroll to the next index
  const scrollToNextIndex = () => {
    const currentIndex = visibleItems[0].index;
    const nextIndex = currentIndex + 1;
    if (flatListRef.current && nextIndex < 2) {
      flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
    }
  };

  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          index={0}
          enablePanDownToClose={false}>
          <BottomSheetFlatList
            ref={flatListRef}
            data={[{}, {}]}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            viewabilityConfigCallbackPairs={
              viewabilityConfigCallbackPairs.current
            }
            renderItem={({item, index}) => {
              const position = Animated.subtract(
                scrollX,
                index * Dimensions.get('window').width,
              );

              const opacity = position.interpolate({
                inputRange: [
                  -Dimensions.get('window').width,
                  0,
                  Dimensions.get('window').width,
                ],
                outputRange: [0, 1, 0],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View style={{flex: 1, opacity}}>
                  {index === 0 ? (
                    <WelcomeCom onPress={scrollToNextIndex} />
                  ) : (
                    <LoginCom
                      onPress={() => navigation.navigate('CameraScreen')}
                    />
                  )}
                </Animated.View>
              );
            }}
          />
        </BottomSheetModal>
        <View style={styles.button}>
          <PrimaryButton
            title="Show Sheet"
            borderRadius={10}
            width={getWidth(30)}
            onPress={() => openBottomSheet()}
          />
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

export default HomeScreen;
