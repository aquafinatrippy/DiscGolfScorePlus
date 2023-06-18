import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  text: string;
  onClick: Function;
  disabled?: boolean;
}

const Btn: React.FC<Props> = ({text, onClick, disabled = false}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      disabled={disabled}
      onPress={() => onClick()}>
      <View style={styles.span}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    shadowColor: 'rgba(151, 65, 252, 0.2)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 5,
    padding: 3,
    minWidth: 140,
  },
  span: {
    backgroundColor: 'rgb(5, 6, 45)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 6,
    width: '100%',
    padding: 4,
    transitionDuration: '300ms',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Phantomsans, sans-serif',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default Btn;
