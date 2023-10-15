import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../styles/colors';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  // Move the navigation logic inside the useEffect, which runs after the timeout
  useEffect(() => {
    if (!isVisible) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'ListingProperty' }]
      });
      
    }
  }, [isVisible, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Resale Property</Text>
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
    textAlign: 'center',
    color: colors.primaryColor,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
