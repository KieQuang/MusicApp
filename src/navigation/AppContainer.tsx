import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './typeNavigator';
import MainBottomTab from './MainBottom';
import RNBootSplash from 'react-native-bootsplash';

const RootStack = createStackNavigator<RootStackParamList>();
const AppContainer = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MainBottomTab">
        <RootStack.Screen name={'MainBottomTab'} component={MainBottomTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
