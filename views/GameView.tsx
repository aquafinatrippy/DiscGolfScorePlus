import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayerScore from '../components/PlayerScore';
import NoTrackGameStats from '../components/NoTrackGameStats';

interface Props {}

const GameView: React.FC<Props> = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };
  return (
    <View style={styles.container}>
      <NoTrackGameStats />
      <PlayerScore />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameView;
