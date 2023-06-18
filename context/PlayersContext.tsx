import React, {useState, FC, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {generateRandomString} from '../helpers/general';
import MessagePopup from '../components/SnackBar';

type Player = {
  id: string;
  name: string;
  score: number;
};

const playersContextWrapper = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const value = await AsyncStorage.getItem('users');
        const parsedValue: Player[] = value ? JSON.parse(value) : [];
        setPlayers(parsedValue);
      } catch (error) {
        setMessage('Error retrieving data:');
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
      setMessage('User added');
    } catch (error) {
      setMessage(`Error storing data: ${error}`);
    }
  };

  const removePlayer = async (index: number) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);

    try {
      await AsyncStorage.setItem('users', JSON.stringify(updatedPlayers));
      setPlayers(updatedPlayers);
      setMessage('Player removed successfully');
    } catch (error) {
      setMessage('Error removing player:');
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

  const addMessage = (msg: string) => {
    setMessage(msg);
  };

  return {
    players,
    removePlayer,
    changeScore,
    storeUser,
    message,
    addMessage,
  };
};

type Context = ReturnType<typeof playersContextWrapper>;

export const PlayersContext = React.createContext<Context>(
  playersContextWrapper(),
);

interface ProviderProps {
  children: ReactNode;
}

export const PlayersContextProvider: FC<ProviderProps> = ({children}) => {
  const context = playersContextWrapper();
  const [snackTrigger, setSnackTrigger] = useState(false);

  useEffect(() => {
    if (context.message) {
      setSnackTrigger(true);
    }
    setTimeout(() => {
      setSnackTrigger(false);
      context.addMessage('');
    }, 10000);
  }, [context.message]);

  return (
    <PlayersContext.Provider value={context}>
      {children}
      <MessagePopup message={context.message} trigger={snackTrigger} />
    </PlayersContext.Provider>
  );
};
