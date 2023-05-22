import {Button} from '@rneui/themed';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const NoTrackGameStats: React.FC<Props> = () => {
  const [par, setPar] = useState(0);
  const handlePress = (add = false) => {
    if (add) {
      setPar(par + 1);
    } else {
      setPar(par - 1);
    }
  };
  return (
    <View>
      <Text>Par:</Text>
      <View style={styles.btnContainer}>
        <Button title={'-'} onPress={() => handlePress(false)} />
        <Text>{par}</Text>
        <Button title={'+'} onPress={() => handlePress(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NoTrackGameStats;
