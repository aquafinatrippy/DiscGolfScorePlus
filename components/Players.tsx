import {Avatar, Button} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddPlayer from './AddPlayer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {}

type Player = {
  id: string;
  name: string;
};

const Players: React.FC<Props> = () => {
  const [players, setPlayers] = useState<Player[] | null>(null);
  const getPlayers = async () => {
    try {
      const value = await AsyncStorage.getItem('users');
      const parsedValue: Player[] | null = value ? JSON.parse(value) : null;

      setPlayers(parsedValue);
      console.log(parsedValue, 'val');
      console.log(value, 'val');
      return value;
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };
  useEffect(() => {
    getPlayers();
    console.log(players, 'useEFfect');
  }, []);

  const totalPlayers = [0, 1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <Text>Players</Text>
      <View style={styles.btn}>
        <AddPlayer />
      </View>
      <Button onPress={() => console.log(getPlayers())}>get data</Button>

      <View style={styles.playerPlaceholders}>
        {totalPlayers.map(index => {
          const player = players && players[index];
          const playerName = player ? player.name : 'Not Set';

          return (
            <View key={index} style={styles.player}>
              <Avatar
                size={40}
                rounded
                title="X"
                containerStyle={{backgroundColor: player ? 'blue' : 'red'}}
              />
              <Text>{playerName}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  playerPlaceholders: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    margin: 10,
  },
});

export default Players;
