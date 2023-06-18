import React, {FC, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import PlayerGameCard from '../components/common/PlayerGameCard';
import {PlayersContext} from '../context/PlayersContext';
import ParCounter from '../components/ParCounter';

interface Props {}

const GameView: FC<Props> = () => {
  const {players} = useContext(PlayersContext);

  return (
    <View style={styles.container}>
      <ParCounter />
      {players.map(({name, id, score}, index) => (
        <PlayerGameCard name={name} key={id} score={score} index={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameView;
