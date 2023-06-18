import {Avatar, Button, ListItem} from '@rneui/themed';
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddPlayer from './AddPlayer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PlayersContext} from '../context/PlayersContext';

interface Props {}

const Players: React.FC<Props> = () => {
  // const removePlayer = async (index: number) => {
  //   const updatedPlayers = [...players];
  //   updatedPlayers.splice(index, 1);
  //   // setPlayers(updatedPlayers);
  //   try {
  //     await AsyncStorage.setItem('users', JSON.stringify(updatedPlayers));
  //     console.log('Player removed successfully');
  //   } catch (error) {
  //     console.log('Error removing player:', error);
  //   }
  // };

  const {players, removePlayer} = useContext(PlayersContext);
  console.log(removePlayer, players, 'from context');

  const totalPlayers = [0, 1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <Text>Players</Text>
      {/* <Button onPress={() => console.log(getPlayers())}>get data</Button> */}
      <View style={styles.playerPlaceholders}>
        {totalPlayers.map(index => {
          const player = players && players[index];
          const playerName = player ? player.name : 'Not Set';

          return (
            <ListItem containerStyle={styles.playerItem} bottomDivider>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  size={40}
                  rounded
                  title={player ? player.name.slice(0, 2) : 'X'}
                  containerStyle={{
                    backgroundColor: player ? 'blue' : 'red',
                    marginEnd: 10,
                  }}
                />
                <Text>{playerName}</Text>
              </View>
              <Button
                onPress={() => removePlayer(index)}
                title="Remove"
                disabled={player ? false : true}
              />
            </ListItem>
          );
        })}
        <View style={styles.btn}>
          <AddPlayer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  playerPlaceholders: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  btn: {
    margin: 10,
  },
  playerItem: {
    width: 300,
    justifyContent: 'space-between',
  },
});

export default Players;
