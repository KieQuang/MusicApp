import React, {memo} from 'react';
import {View, Image, Text} from 'react-native';
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {globalStyle} from '@globalStyle';
import Container from '@components/Container';
import Content from '@components/Content';
import useLayout from '@hooks/useLayout';

const MyList = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation />
      <Content style={globalStyle.icon16}>
        <Text>MyList</Text>
      </Content>
    </Container>
  );
});

export default MyList;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
