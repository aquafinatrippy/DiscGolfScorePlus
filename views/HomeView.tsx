import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectTrack from '../components/SelectTrack';
import Players from '../components/Players';

interface Props {
  navigation: any;
}

const HomeView: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.playersContainer}>
        <Text>Players</Text>
        <Players />
      </View>
      <View style={styles.content}>
        <SelectTrack navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playersContainer: {
    marginTop: 50,
    height: '70%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeView;
