import {Card} from '@rneui/themed';
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PlayersContext} from '../../context/PlayersContext';

interface Props {
  name: string;
  score: number;
  index: number;
}

const PlayerGameCard: React.FC<Props> = ({name, score, index}) => {
  const {changeScore} = useContext(PlayersContext);

  return (
    <View style={styles.scoreView}>
      <Card containerStyle={styles.card}>
        <View style={styles.content}>
          <View style={styles.user_data}>
            <Text>{name}</Text>
            <Text>{score}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.abstractBtn]}
              onPress={() => changeScore(index, false)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.addBtn]}
              onPress={() => changeScore(index)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: '100%',
  },
  buttonStyle: {
    flex: 1,
    height: 80,
  },
  buttonTitleStyle: {
    fontSize: 18,
  },
  addBtn: {
    backgroundColor: '#43a047',
  },
  abstractBtn: {
    backgroundColor: '#FF0000',
    color: '#000',
  },
  button: {
    height: 80,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  user_data: {
    padding: 10,
  },
});

export default PlayerGameCard;
