import {Button, Card} from '@rneui/themed';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
    name: string;
    score: number
}

const PlayerGameCard: React.FC<Props> = ({name, score}) => {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <View style={styles.scoreView}>
      <Card containerStyle={styles.card}>
        <View style={styles.content}>
          <View>
            <Text>{name}</Text>
            <Text>{score}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title={'+'} onPress={handlePress} />
            <Button title={'-'} onPress={handlePress} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreView: {
    width: '100%', // Set width to 100% for full width
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%', // Set width to 100% for full width
    flexDirection: 'column',
  },
  content: {
    flexDirection: 'row', // Set flexDirection to 'row' to align items horizontally
    justifyContent: 'space-between', // Add space between items
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 3,
    flexDirection: 'row', // Set flexDirection to 'row' to align buttons horizontally
    alignItems: 'center',
    marginLeft: 10, // Adjust margin to create space between buttons and other content
  },
});

export default PlayerGameCard;