import {Avatar, Button} from '@rneui/themed';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ListItem, Avatar } from "@rneui/base";


interface Props {}

const Players: React.FC<Props> = () => {
  const totalPlayers = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <Text>Players</Text>
      <View style={styles.playerPlaceholders}>
        {totalPlayers.map(i => {
          return (
            <ListItem
            containerStyle={{}}
            disabledStyle={{ opacity: 0.5 }}
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => console.log("onLongPress()")}
            pad={20}
          >
            <Avatar
              source={{
                uri:
                  "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
              }}
            />
            <ListItem.Content>
              <ListItem.Title>
                <Text>Pranshu Chittora</Text>
              </ListItem.Title>
              <ListItem.Subtitle>
                <Text>React Native Elements</Text>
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          );
        })}
      </View>
      <Button title={'add player'} />
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
  playerPlaceholders: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Players;

import * as React from "react";
import { ListItem, Avatar } from "@rneui/base";
import { TouchableHighlight } from "react-native";

export default () => {
  return (
    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <Avatar
        source={{
          uri:
            "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
        }}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>Pranshu Chittora</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>React Native Elements</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}