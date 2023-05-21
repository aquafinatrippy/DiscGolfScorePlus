import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

interface Props {}

const Start: React.FC<Props> = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };
  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={handlePress} />
      <Text style={styles.text}>Hello!</Text>
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

export default Start;
