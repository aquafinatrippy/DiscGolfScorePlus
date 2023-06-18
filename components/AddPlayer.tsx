import {Dialog, Input} from '@rneui/themed';
import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Btn from './common/Button';
import {PlayersContext} from '../context/PlayersContext';

interface Props {}

const AddPlayer: React.FC<Props> = () => {
  const [dialog, setDialog] = useState(false);
  const [name, setName] = useState('');
  const {storeUser} = useContext(PlayersContext);
  const openDialog = () => {
    setDialog(!dialog);
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  return (
    <View>
      <Dialog isVisible={dialog} onBackdropPress={openDialog}>
        <Dialog.Title title="Add New Player" />
        <Text>Must have atleast 1 player to start the game</Text>
        <Input
          onChangeText={handleNameChange}
          placeholder="Name of the player"
        />
        <Dialog.Actions>
          <Dialog.Button title="ADD" onPress={() => storeUser(name)} />
          <Dialog.Button title="CLOSE" onPress={openDialog} />
        </Dialog.Actions>
      </Dialog>
      <Btn text={'Add Player'} onClick={openDialog} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddPlayer;
