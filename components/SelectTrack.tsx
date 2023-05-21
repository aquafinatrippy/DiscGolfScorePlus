import React, {useState} from 'react';
import {BottomSheet, Button, ListItem} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TrackData from '../data/GameRoads.json';

type SelectTrackComponentProps = {
  navigation: any;
};

const SelectTrack: React.FunctionComponent<SelectTrackComponentProps> = ({
  navigation,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const TrackList = Object.keys(TrackData).map(track => {
    return {title: track, onPress: () => setIsVisible(false)};
  });
  console.log(TrackList);
  const list = [
    ...TrackList,
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <SafeAreaProvider style={styles.container}>
      <Button
        size="lg"
        title="Select track"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      />
      <Button
        buttonStyle={styles.button}
        size="lg"
        title={'Start without track'}
        onPress={() => navigation.navigate('Game')}
      />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
    width: 300,
    borderRadius: 10,
  },
});

export default SelectTrack;
