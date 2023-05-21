import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectTrack from '../components/SelectTrack';
import Players from '../components/Players';

interface Props {
  navigation: any;
}

const HomeView: React.FC<Props> = ({navigation}) => {
  const handlePress = () => {
    console.log('Button pressed');
  };
  return (
    <View style={styles.container}>
      <Players />
      <SelectTrack navigation={navigation}></SelectTrack>
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

export default HomeView;
