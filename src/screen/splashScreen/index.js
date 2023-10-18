import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DimensionUtils } from '../../styles/dimension';
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
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assest/splash.jpg')}
          style={styles.image}

        />

      </View>
      <View>
        <Text style={styles.text}>Resale Property</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    width:'100%',
    height:'100%',
  
    backgroundColor:colors.white
  },
  text: {
    textAlign: 'center',
    color: colors.primaryColor,
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop:10
  },
  image: {
    width: '100%', 
    height: DimensionUtils(200), 
   
  },
  imageContainer:{
    paddingTop:DimensionUtils(250),
    padding:10
  }

});

export default SplashScreen;
