import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LogBox, ScrollView, Image } from 'react-native';

import colors from '../../styles/colors';
import { Header, HeaderProps, } from '@rneui/themed';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { DimensionUtils } from "../../styles/dimension";

import Ionicons from 'react-native-vector-icons/Ionicons';


// import Toast from 'react-native-simple-toast';

const ViewProperty = () => {


  const route = useRoute();
  const [propertyData, setPropertyData] = useState([]);


  const navigation = useNavigation();


  useEffect(() => {
    LogBox.ignoreLogs(['Warning message']);

  }, []);






  // Define the saveValidation function


  return (
    <View style={styles.mainContainer}>
      <Header
        containerStyle={styles.headerContainer}
        statusBarProps={{ backgroundColor: 'transparent' }}
        centerComponent={{ text: 'Details Property', style: styles.heading }}
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
      <ScrollView >
        <View style={styles.mainContainer}>
          <Image
            source={{
              uri: 'https://coolhouseconcepts.com/wp-content/uploads/2018/05/Man-Cave-Ideas.jpg', // Replace with the actual URL of your image
            }}// Replace with the actual path to your image
            style={styles.image}
          />

          <View style={styles.subCont}>

            <View>
              <Text style={styles.title}>2BHK Aparment For Sale</Text>
            </View>
            <Text style={styles.normalText}>Address</Text>

            <View>
              <Text style={styles.normalText}>Area {'5000'} sq.ft  </Text>
            </View>
            <View>
              <Text style={styles.pricetext}>50K </Text>
            </View>

            <View>
              <Text style={styles.title}>OverView</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
              <View style={{ flex: 1 }}>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Built Area
                  </Text>
                  <Text style={styles.overText}>
                    {'5000'} sq.ft.
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    BHK
                  </Text>
                  <Text style={styles.overText}>
                    2 BHK
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Car parking
                  </Text>
                  <Text style={styles.overText}>
                    2
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Two wheeler parking
                  </Text>
                  <Text style={styles.overText}>
                    2
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    LandLord
                  </Text>
                  <Text style={styles.overText}>
                    Sara
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                     MobileNumber
                  </Text>
                  <Text style={styles.overText}>
                     123456789
                  </Text>
                </View>

              </View>
              <View style={{ flex: 0.8, paddingLeft: 15, }}>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Possession Status
                  </Text>
                  <Text style={styles.overText}>
                    {'5000'} sq.ft.
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Flooring
                  </Text>
                  <Text style={styles.overText}>
                    wooden Flooring
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Bathroom
                  </Text>
                  <Text style={styles.overText}>
                    wooden Flooring
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Faceing
                  </Text>
                  <Text style={styles.overText}>
                    North
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Overlooking
                  </Text>
                  <Text style={styles.overText}>
                    Graden /parking
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.titlegap}>
              <Text style={styles.title}>BHK Offering</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
              <View style={{ flex: 1 }}>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Area
                  </Text>
                  <Text style={styles.overText}>
                    {'5000'} sq.ft.
                  </Text>
                </View>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    BHK
                  </Text>
                  <Text style={styles.overText}>
                    2 BHK
                  </Text>
                </View>
              </View>
              <View style={{ flex: 0.8, paddingLeft: 15, }}>
                <View style={styles.gap}>
                  <Text style={styles.subtitle}>
                    Amount
                  </Text>
                  <Text style={styles.overText}>
                    {'5000'} sq.ft.
                  </Text>
                </View>
              </View>
            </View>



          </View>
        </View>
      </ScrollView>

    </View>
  );
};


const styles = StyleSheet.create({

  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    // marginBottom: 20,
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
    paddingTop: 8
  },
  image: {
    width: '100%', // Set the desired width
    height: DimensionUtils(200), // Set the desired height
    borderRadius: 4
  },
  subCont: {
    paddingLeft: 10,
    paddingRight: 10,

  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white
  },
  subtitle: {
    fontSize: 15,
    color: colors.darkgrayColor,
    fontWeight: 'bold'
  },
  pricetext: {
    fontSize: 19,
    color: colors.black,
    fontWeight: 'bold',
    paddingTop: 2
  },
  overText: {
    fontSize: 14,
    color: colors.black,

  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold'
  },
  normalText: {
    fontSize: 16,
    color: colors.black,
    paddingTop: 2
  },
  gap: {
    paddingTop: 5
  },
  titlegap: {
    paddingTop: 10
  }

});
export default ViewProperty;