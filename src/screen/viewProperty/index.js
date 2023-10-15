import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LogBox, ScrollView, Alert } from 'react-native';

import colors from '../../styles/colors';
import { Header, HeaderProps, } from '@rneui/themed';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';


// import Toast from 'react-native-simple-toast';

const ViewProperty = () => {


  const route = useRoute();
  const [propertyData, setPropertyData] = useState([]);




  const navigation = useNavigation();


  const { propertyDatas } = route.params;


  useEffect(() => {
    LogBox.ignoreLogs(['Warning message']);
    createTable()
    if (propertyDatas != null) {
      editData(propertyDatas)
    }
  }, []);


  



  // Define the saveValidation function


  return (
    <View style={styles.mainContainer}>
      <Header
        containerStyle={styles.headerContainer}
        statusBarProps={{ backgroundColor: 'transparent' }}
        centerComponent={{ text: 'Create Property', style: styles.heading }}
        leftComponent={
          <View style={styles.headerleft}>
            <TouchableOpacity style={styles.addIcon} onPress={() => {
              navigation.goBack();
            }}>
              <Ionicons name="chevron-back" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        }

      />
      <ScrollView>




      </ScrollView>
      




    </View>
  );
};


const styles = StyleSheet.create({
 
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 5
  },
  headerleft: {
    paddingTop: 0
  },
 

});
export default ViewProperty;