import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme, useStyleSheet, Icon} from '@ui-kitten/components';
import {MainBottomTabStackParamList} from './typeNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useLayout from '@hooks/useLayout';
import Text from '@components/Text';
import Intro from '@screens/Intro/Intro';
import MyList from '@screens/MyList/MyList';
import MyPlayer from '@screens/MyPlayer/MyPlayer';

interface ButtonTabProps {
  focused: boolean;
  icon: string;
  numberNotification?: number;
  onPress?: void;
}

const BottomTab = createBottomTabNavigator<MainBottomTabStackParamList>();

const MainBottomTab = memo(() => {
  const theme = useTheme();
  const {height, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const ButtonTab = React.useCallback(({focused, icon}: ButtonTabProps) => {
    return (
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: theme['background-basic-color-1'],
        }}>
        <Icon
          name={'home'}
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? 'red' : 'blue',
          }}
        />
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: styles.styleLabel,
          tabBarStyle: [
            styles.tabBarStyle,
            {
              height: (54 + bottom) * (height / 812),
            },
          ],
        }}>
        <BottomTab.Screen
          name="Intro"
          component={Intro}
          options={{
            tabBarIcon: ({focused}) => (
              <ButtonTab focused={focused} icon="home" numberNotification={1} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Player"
          component={MyPlayer}
          options={{
            tabBarIcon: ({focused}) => (
              <ButtonTab
                focused={focused}
                icon="headphone"
                numberNotification={undefined}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="MyList"
          component={MyList}
          options={{
            tabBarIcon: ({focused}) => (
              <ButtonTab
                focused={focused}
                icon="list"
                numberNotification={undefined}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
});
export default MainBottomTab;

const themedStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -44,
    paddingTop: 12,
  },
  styleLabel: {
    fontSize: 11,
    lineHeight: 24,
  },
  buttonTab: {
    borderRadius: 12,
    height: 40,
    width: 40,
  },
  notification: {
    position: 'absolute',
    borderRadius: 99,
    backgroundColor: 'button-basic-color',
    width: 16,
    height: 16,
    zIndex: 10,
    top: 2,
    right: 1,
  },
});
