import React, {FC, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import PlayerGameCard from '../components/common/PlayerGameCard';
import {PlayersContext} from '../context/PlayersContext';
import ParCounter from '../components/ParCounter';
import {Text} from '@rneui/themed';

interface Props {}

const GameView: FC<Props> = () => {
  const {players} = useContext(PlayersContext);

  return (
    <View style={styles.container}>
      <View style={styles.players}>
        <Text h3>Players</Text>
        {players.map(({name, id, score}, index) => (
          <PlayerGameCard name={name} key={id} score={score} index={index} />
        ))}
      </View>

      <ParCounter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  players: {
    width: '100%',
    alignItems: 'center',
  },
});

export default GameView;
