import {Avatar, Button} from '@rneui/themed';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddPlayer from './AddPlayer';

interface Props {}

const Players: React.FC<Props> = () => {
  const totalPlayers = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <Text>Players</Text>
      <View style={styles.btn}>
        <AddPlayer />
      </View>

      <View style={styles.playerPlaceholders}>
        {totalPlayers.map(i => {
          return (
            <View key={i} style={styles.player}>
              <Avatar
                size={40}
                rounded
                title="Fc"
                containerStyle={{backgroundColor: '#3d4db7'}}
              />
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
