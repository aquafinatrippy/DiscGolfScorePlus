import {Button, Icon} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const ParCounter: React.FC<Props> = () => {
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
        <Button
          title="-"
          onPress={() => handlePress(false)}
          buttonStyle={styles.button}
        />
        <Text>{par}</Text>
        <Button
          title="+"
          buttonStyle={styles.button}
          onPress={() => handlePress()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
  },
  button: {
    marginHorizontal: 5,
  },
});

export default ParCounter;
