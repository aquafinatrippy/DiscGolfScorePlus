import React, {useState, FC, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Player = {
  id: string;
  name: string;
};

const counterContextWrapper = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [count, setCount] = useState(0);

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
  };
};

type Context = ReturnType<typeof counterContextWrapper>;

export const PlayersContext = React.createContext<Context>(
  counterContextWrapper(),
);

export const PlayersContextProvider: FC = ({children}) => {
  const context = counterContextWrapper();

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
