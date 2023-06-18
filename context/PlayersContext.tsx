import React, {useState, FC, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {generateRandomString} from '../helpers/general';

type Player = {
  id: string;
  name: string;
};

const playersContextWrapper = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [count, setCount] = useState(0);

  const storeUser = async (name: string) => {
    try {
      const existingData = await AsyncStorage.getItem('users');
      if (existingData) {
        let parsedData = existingData ? JSON.parse(existingData) : [];
        parsedData.push({name: name, id: generateRandomString(8)});
        await AsyncStorage.setItem('users', JSON.stringify(parsedData));
        setPlayers(parsedData);
      } else {
        const newUser = [{name: name, id: generateRandomString(8)}];
        await AsyncStorage.setItem('users', JSON.stringify(newUser));
        setPlayers(newUser);
      }
      console.log('Data stored successfully');
    } catch (error) {
      console.log('Error storing data:', error);
    }
  };

  const removePlayer = async (index: number) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);

    try {
      await AsyncStorage.setItem('users', JSON.stringify(updatedPlayers));
      setPlayers(updatedPlayers);
      console.log('Player removed successfully');
    } catch (error) {
      console.log('Error removing player:', error);
    }
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return {
    players,
    count,
    removePlayer,
    increment,
    decrement,
    storeUser,
  };
};

type Context = ReturnType<typeof playersContextWrapper>;

export const PlayersContext = React.createContext<Context>(
  playersContextWrapper(),
);

export const PlayersContextProvider: FC = ({children}) => {
  const context = playersContextWrapper();

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const value = await AsyncStorage.getItem('users');
        const parsedValue: Player[] = value ? JSON.parse(value) : [];
        context.players = parsedValue;
      } catch (error) {
        console.log('Error retrieving data:', error);
      }
    };

    getPlayers();
  }, []);

  return (
    <PlayersContext.Provider value={context}>
      {children}
    </PlayersContext.Provider>
  );
};
