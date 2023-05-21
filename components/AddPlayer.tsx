import {Button, Dialog, Input} from '@rneui/themed';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const AddPlayer: React.FC<Props> = () => {
  const [dialog, setDialog] = useState(false);
  const openDialog = () => {
    setDialog(!dialog);
  };
  return (
    <View>
      <Button onPress={openDialog}>Add Player +</Button>
      <Dialog isVisible={dialog} onBackdropPress={openDialog}>
        <Dialog.Title title="Add New Player" />
        <Text>Must have atleast 1 player to start the game</Text>
        <Input placeholder="Name of the player" />
        <Dialog.Actions>
          <Dialog.Button
            title="ADD"
            onPress={() => console.log('Primary Action Clicked!')}
          />
          <Dialog.Button title="CLOSE" onPress={openDialog} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddPlayer;
