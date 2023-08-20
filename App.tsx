/** @format */

import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {HomeStack} from '@navigations';
import {NavigationContainer} from '@react-navigation/native';
import {AppliedTheme} from '@constants';
import 'react-native-gesture-handler';
const theme = AppliedTheme();

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={theme.background.primary}
        barStyle={'default'}
      />

      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
