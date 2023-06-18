import React, {useState, FC, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {generateRandomString} from '../helpers/general';

type Player = {
  id: string;
  name: string;
  score: number;
};

const playersContextWrapper = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const value = await AsyncStorage.getItem('users');
        const parsedValue: Player[] = value ? JSON.parse(value) : [];
        setPlayers(parsedValue);
      } catch (error) {
        console.log('Error retrieving data:', error);
      }
    };

    getPlayers();
  }, []);

  const storeUser = async (name: string) => {
    try {
      const existingData = await AsyncStorage.getItem('users');
      if (existingData) {
        let parsedData = existingData ? JSON.parse(existingData) : [];
        parsedData.push({name: name, id: generateRandomString(8), score: 0});
        await AsyncStorage.setItem('users', JSON.stringify(parsedData));
        setPlayers(parsedData);
      } else {
        const newUser = [{name: name, id: generateRandomString(8), score: 0}];
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

  const changeScore = (index: number, add: boolean = true) => {
    const updatedPlayers = [...players];
    if (add) {
      updatedPlayers[index].score += 1;
    } else {
      updatedPlayers[index].score -= 1;
    }
    setPlayers(updatedPlayers);
  };

  return {
    players,
    removePlayer,
    changeScore,
    storeUser,
  };
};

type Context = ReturnType<typeof playersContextWrapper>;

export const PlayersContext = React.createContext<Context>(
  playersContextWrapper(),
);

export const PlayersContextProvider: FC = ({children}) => {
  const context = playersContextWrapper();

  return (
    <PlayersContext.Provider value={context}>
      {children}
    </PlayersContext.Provider>
  );
};
