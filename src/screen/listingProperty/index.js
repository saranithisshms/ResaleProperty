import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LogBox, Image } from 'react-native';
import colors from '../../styles/colors';
import { Header, HeaderProps, } from '@rneui/themed';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropertyCard from '../../components/propertyListing';
import { useFocusEffect } from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import { DimensionUtils } from '../../styles/dimension';
import Loading from '../../components/loader';

const PropertyListing = () => {

  const route = useRoute();

  const navigation = useNavigation();

  const [propertyData, setPropertyData] = useState([]);

  const [loader, setLoader] = useState(false);

  // Open the database
  const db = SQLite.openDatabase(
    {
      name: 'propertyDatasImage.db',
      location: 'default',
    },
    () => {
      //  console.log('Database opened successfully');
    },
    (error) => {
      //  console.error('Error opening database: ', error);
    }
  );

  useEffect(() => {
    // Fetch all data from the Properties table
    getPropertyData()
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getPropertyData();

    }, [])
  );



  const getPropertyData = () => {
    setLoader(true)
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM Properties`,
        [],
        (_, { rows }) => {
          // Extract the data from the rows
          const userDataList = [];
          for (let i = 0; i < rows.length; i++) {
            userDataList.push(rows.item(i));
          }
          setPropertyData(userDataList)
        },
        (_, error) => {
          // console.error('Error fetching data:',);
        }
      );
    });
    setLoader(false)

  }




  const onEditPress = (item) => {

    navigation.navigate('ViewProperty', { propertyDatas: item });

  }


  const onDeletePress = (id) => {

    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM Properties WHERE id = ?',
        [id],
        (_, result) => {

          Toast.show('Property deleted successfully', Toast.SHORT);
          getPropertyData()
          // You may want to update the propertyData state after deleting
          // For example, refetch and update the list of properties
        },
        (_, error) => {
          //console.error('Error deleting property:', error);
        }
      );
    });
  }




  return (
    <View style={styles.mainContainer}>
      <Header
        containerStyle={styles.headerContainer}
        statusBarProps={{ backgroundColor: 'transparent' }}
        centerComponent={{ text: 'Listing Property', style: styles.heading }}
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addIcon} onPress={() => {
              navigation.navigate('CreateProperty');
            }}>
              <Ionicons name="add-sharp" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        }

      />

      <ScrollView>
        {loader ? <Loading /> :
          <View>
            {propertyData.length != 0 ?
              <>
                {
                  propertyData.map((user) => {
                    return (
                      <View key={user.id}>
                        <PropertyCard
                          name={user.propertyName}
                          descripition={user.descripition}
                          type={user.type}
                          Imageuri={user.imageuri}
                          onEditPress={() => onEditPress(user)}
                          onDeletePress={() => onDeletePress(user.id)}

                        />
                      </View>
                    );
                  })
                }
              </> :

              <View style={styles.emptyState}>
                <Image
                  source={require('../../assest/empty.jpg')}
                  style={styles.image}

                />
                <Text style={styles.emptyText}>No property so far not Add</Text>
              </View>}

          </View>
        }

      </ScrollView>
    </View>

  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15
  },
  disbutton: {
    backgroundColor: colors.disableColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15
  },
  gap: {
    paddingTop: 5
  },
  screenMargin: {
    padding: 15,
    margin: 10
  },
  smallgap: {
    paddingTop: 5
  },

  textinputColor: {
    color: 'white'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textcolorsBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  }, bottomfixed: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  iconBtn: {
    width: '50%',
    alignItems: 'center',
  },
  rowStyles: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white
  },
  addIcon: {
    marginLeft: 10,
    paddingTop: 10
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:
      DimensionUtils(100),
    padding: 5
  },
  emptyText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
    paddingTop: 20,
  },
  image: {
    width: '100%', // Set the desired width
    height: DimensionUtils(200), // Set the desired height
    borderRadius: 4
  },
});
export default PropertyListing;