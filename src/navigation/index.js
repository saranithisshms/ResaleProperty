import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screen/splashScreen';
import { NavigationContainer } from '@react-navigation/native';
import PropertyListing from '../screen/listingProperty';
import CreateProperty from '../screen/createProperty';
import ViewProperty from '../screen/viewProperty'
import AddProperty from '../screen/addProperty';
import DetailsProperty from '../screen/Detailspage';
import TimeTable from '../screen/timeTable';



const Stack = createStackNavigator();

// TimeTable

const NavigationPages = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="TimeTable" screenOptions={{ headerShown: false, }}   >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="ListingProperty" component={PropertyListing} />
        <Stack.Screen name="CreateProperty" component={AddProperty} />
        <Stack.Screen name="ViewProperty" component={DetailsProperty} />
        <Stack.Screen name="AddProperty" component={AddProperty} />
        <Stack.Screen name="TimeTable" component={TimeTable} />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationPages;