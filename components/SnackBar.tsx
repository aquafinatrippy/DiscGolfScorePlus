import React, {FC, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

interface SnackBarProps {
  message: string;
  duration?: number;
  trigger?: boolean;
}

const Snackbar: FC<SnackBarProps> = ({
  message,
  duration = 3000,
  trigger = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const fadeAnimation = new Animated.Value(0);

  useEffect(() => {
    if (trigger) {
      setIsVisible(true);
    }
  }, [trigger]);

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, fadeAnimation, duration]);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnimation}]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  message: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Snackbar;
