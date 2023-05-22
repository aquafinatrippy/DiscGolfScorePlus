import {Button, Card} from '@rneui/themed';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const PlayerScore: React.FC<Props> = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };
  return (
    <View style={styles.scoreView}>
      <Card containerStyle={styles.card}>
        <Text>Name</Text>
        <Text>Score</Text>
      </Card>
      <View style={styles.buttonContainer}>
        <Button title={'+'} onPress={handlePress} />
        <Button title={'-'} onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 100,
    width: 200,
  },
  buttonContainer: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default PlayerScore;
