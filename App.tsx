/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './views/HomeView';
import GameView from './views/GameView';
import {ThemeProvider, createTheme} from '@rneui/themed';

const Stack = createNativeStackNavigator();

const theme = createTheme({
  components: {
    Button: {
      titleStyle: {
        borderRadius: 10,
        color: '#fff',
      },
      buttonStyle: {
        borderRadius: 10,
      },
    },
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="Game" component={GameView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
