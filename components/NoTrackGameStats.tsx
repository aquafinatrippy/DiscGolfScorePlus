import {Button} from '@rneui/themed';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const NoTrackGameStats: React.FC<Props> = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };
  return (
    <View>
      <Text>Par:</Text>
      <View style={styles.btnContainer}>
        <Button title={'-'} />
        <Text>0</Text>
        <Button title={'+'} />
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
