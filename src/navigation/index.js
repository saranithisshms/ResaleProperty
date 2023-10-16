import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screen/splashScreen';
import { NavigationContainer } from '@react-navigation/native';
import PropertyListing from '../screen/listingProperty';
import CreateProperty from '../screen/createProperty';
import ViewProperty from '../screen/viewProperty'



const Stack = createStackNavigator();

const NavigationPages = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, }}   >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="ListingProperty" component={PropertyListing} />
        <Stack.Screen name="CreateProperty" component={CreateProperty} />
        <Stack.Screen name="ViewProperty" component={ViewProperty} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationPages;