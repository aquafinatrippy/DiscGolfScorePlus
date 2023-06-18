/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PlayersContextProvider} from './context/PlayersContext';

AppRegistry.registerComponent(
  appName,
  () => props =>
    (
      <PlayersContextProvider>
        <App {...props} />
      </PlayersContextProvider>
    ),
  () => App,
);
