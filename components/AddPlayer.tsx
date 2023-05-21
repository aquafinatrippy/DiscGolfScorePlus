import {Button, Dialog, Input} from '@rneui/themed';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {generateRandomString} from '../helpers/general';

interface Props {}

const AddPlayer: React.FC<Props> = () => {
  const [dialog, setDialog] = useState(false);
  const [name, setName] = useState('');
  const openDialog = () => {
    setDialog(!dialog);
  };
  const storeUser = async () => {
    try {
      const existingData = await AsyncStorage.getItem('users');
      if (existingData) {
        let parsedData = existingData ? JSON.parse(existingData) : [];
        parsedData.push({name: name, id: generateRandomString(8)});
        await AsyncStorage.setItem('users', JSON.stringify(parsedData));
      } else {
        await AsyncStorage.setItem(
          'users',
          JSON.stringify([{name: name, id: generateRandomString(8)}]),
        );
      }
      console.log('Data stored successfully');
    } catch (error) {
      console.log('Error storing data:', error);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  return (
    <View>
      <Button onPress={openDialog}>Add Player +</Button>
      <Dialog isVisible={dialog} onBackdropPress={openDialog}>
        <Dialog.Title title="Add New Player" />
        <Text>Must have atleast 1 player to start the game</Text>
        <Input
          onChangeText={handleNameChange}
          placeholder="Name of the player"
        />
        <Dialog.Actions>
          <Dialog.Button title="ADD" onPress={async () => await storeUser()} />
          <Dialog.Button title="CLOSE" onPress={openDialog} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddPlayer;
