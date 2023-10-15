import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LogBox, ScrollView } from 'react-native';

import colors from '../../styles/colors';
import { Header, HeaderProps, } from '@rneui/themed';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropertyCard from '../../components/propertyListing';
import { TextInput } from 'react-native-paper';
import { type, PropertyType, owernerType, PossessionStatus, BHK, Bathroom, Carparking, TwoWheerlerparking, FurnishedType, Faceing, securtyDespoit, overlooking, Flooring, NooFLift } from '../../JsonData'; // Adjust the import path accordingly
import SelectableChip from '../../components/chips';
import { DimensionUtils } from '../../styles/dimension';


// import Toast from 'react-native-simple-toast';

const CreateProperty = () => {

  //   const route = useRoute();
  //   const tripId = route.params?.tripId;
  //   console.log(tripId)
  const navigation = useNavigation();

  const [createProperty, setCreateProperty] = useState({
    propertyName: '',
    descripition: '',
    BuildupArea: '',
    sqft: '',
    AgeofProperty: '',
    months: '',
    monthlyRent: '',
    BulilderName: '',
    maintenaceCharges: ''

  });


  //   const db = SQLite.openDatabase(
  //     {
  //       name: 'usertrip.db',
  //       location: 'default',
  //     },
  //     () => {
  //       console.log('Database opened successfully');
  //     },
  //     (error) => {
  //       console.error('Error opening database: ', error);
  //     }
  //   );

  //   useEffect(() => {
  //     // Retrieve the user_id from AsyncStorage
  //     AsyncStorage.getItem('SET_USER_DATA')
  //       .then((user_id) => {
  //         // Fetch user data from the database based on user_id
  //         if (user_id) {
  //           db.transaction((tx) => {
  //             tx.executeSql(
  //               'SELECT * FROM tasks WHERE userId = ? AND tripId = ?',
  //               [user_id, tripId],
  //               (tx, results) => {
  //                 const tasks = [];
  //                 for (let i = 0; i < results.rows.length; i++) {
  //                   const task = results.rows.item(i);
  //                   tasks.push(task);
  //                 }
  //                 setUserTask(tasks)
  //                 console.log('Tasks for user and trip:', tasks);
  //               },
  //               (error) => {
  //                 console.error('Error querying tasks:', error);
  //               }
  //             );
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error retrieving user_id from AsyncStorage: ', error);
  //       });
  //   }, []);

  const onEditPress = (id) => {

  }



  useEffect(() => {
    LogBox.ignoreLogs(['Warning message']);

  }, []);


  const onDeletePress = (id) => {
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     'DELETE FROM tasks WHERE  Id = ?',
    //     [id], // Pass the ID of the task you want to delete
    //     (tx, results) => {
    //       if (results.rowsAffected > 0) {
    //         Toast.show('Task deleted successfully', Toast.SHORT);
    //       } else {
    //         console.error('No task found with the given ID');
    //       }
    //     },
    //     (error) => {
    //       console.error('Error deleting task:', error);
    //     }
    //   );
    // });
  }

  const userTask = [

    {
      "id": "1",
      "name": "fofdsods",



    },
    {
      "id": "2",
      "name": "dsdskdnsoid",


    }
  ]

  const chipsData = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const [selectedChips, setSelectedChips] = useState([]);

  const handleChipSelection = (label) => {
    // Toggle selection
    if (selectedChips.includes(label)) {
      setSelectedChips(selectedChips.filter((chip) => chip !== label));
    } else {
      setSelectedChips([...selectedChips, label]);
    }
  };


  return (
    <View style={styles.mainContainer}>
      <Header
        containerStyle={styles.headerContainer}
        statusBarProps={{ backgroundColor: 'transparent' }}
        centerComponent={{ text: 'ADD Property', style: styles.heading }}
      // rightComponent={
      //   <View style={styles.headerRight}>
      //     <TouchableOpacity style={styles.addIcon} onPress={() => {
      //       console.log('asaishi')
      //     }}>
      //       <Ionicons name="add-sharp" size={24} color={colors.white} />
      //     </TouchableOpacity>
      //   </View>
      // }

      />
      <ScrollView>

        <View style={styles.screenMargin}>
          <View style={styles.smallgap}>
            <TextInput
              label="Property Name *"
              onChangeText={(text) => setCreateProperty({ ...createProperty, propertyName: text })}
              value={createProperty.propertyName}
              style={styles.textinputColor}
              mode="flat"
            />
          </View>
          <View style={styles.smallgap}>
            <TextInput
              label="Descripition"
              onChangeText={(text) => setCreateProperty({ ...createProperty, descripition: text })}
              value={createProperty.descripition}
              style={styles.textinputColor}
              mode="flat"
            />
          </View>

          <View style={styles.smallgap}>
            <TextInput
              label="Maintenace Charges"
              onChangeText={(text) => setCreateProperty({ ...createProperty, maintenaceCharges: text })}
              value={createProperty.maintenaceCharges}
              style={styles.textinputColor}
              mode="flat"
            />
          </View>

          <View style={styles.smallgap}>
            <TextInput
              label="Monthly Rent"
              onChangeText={(text) => setCreateProperty({ ...createProperty, monthlyRent: text })}
              value={createProperty.monthlyRent}
              style={styles.textinputColor}
              mode="flat"
            />
          </View>

          <View style={styles.smallgap}>
            <TextInput
              label="Builder Name *"
              onChangeText={(text) => setCreateProperty({ ...createProperty, BulilderName: text })}
              value={createProperty.BulilderName}
              style={styles.textinputColor}
              mode="flat"
            />
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <View style={{ flex: 1 }}>
              <TextInput
                label="Built Up Area *"
                onChangeText={(text) => setCreateProperty({ ...createProperty, BuildupArea: text })}
                value={createProperty.BuildupArea}
                style={styles.textinputColor}
                mode="flat"
              />
            </View>
            <View style={{ flex: 0.8, paddingLeft: 15, }}>
              <TextInput
                label="Sq.ft *"
                onChangeText={(text) => setCreateProperty({ ...createProperty, sqft: text })}
                value={createProperty.sqft}
                style={styles.textinputColor}
                mode="flat"
              />
            </View>

          </View>

          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <View style={{ flex: 1 }}>
              <TextInput
                label="Age of Property *"
                onChangeText={(text) => setCreateProperty({ ...createProperty, AgeofProperty: text })}
                value={createProperty.AgeofProperty}
                style={styles.textinputColor}
                mode="flat"
              />
            </View>
            <View style={{ flex: 0.8, paddingLeft: 15, }}>
              <TextInput
                label="Month *"
                onChangeText={(text) => setCreateProperty({ ...createProperty, months: text })}
                value={createProperty.months}
                style={styles.textinputColor}
                mode="flat"
              />
            </View>
          </View>

          <View style={styles.smallgap}>

            <Text style={styles.titleText}>I want to  <Text style={styles.star}>*</Text></Text>
            <View style={{ flexDirection: 'row', padding: 10 }}>
              {type.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>

            <Text style={styles.titleText}>Property Type  <Text style={styles.star}>*</Text> </Text>
            <View style={{ flexDirection: 'row', padding: 10, flexWrap: 'wrap' }}>
              {PropertyType.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>

            <Text style={styles.titleText}>Owerner Type  <Text style={styles.star}>*</Text> </Text>
            <View style={{ flexDirection: 'row', padding: 10, flexWrap: 'wrap' }}>
              {owernerType.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>

            <Text style={styles.titleText}>Possession Status </Text>
            <View style={{ flexDirection: 'row', padding: 10, flexWrap: 'wrap' }}>
              {PossessionStatus.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>
            {/*  */}
            <Text style={styles.titleText}>BHK  <Text style={styles.star}>*</Text> </Text>
            <View style={{ flexDirection: 'row', padding: 10, flexWrap: 'wrap' }}>
              {BHK.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>

            <Text style={styles.titleText}>Bathroom   <Text style={styles.star}>*</Text> </Text>
            <View style={{ flexDirection: 'row', padding: 10, flexWrap: 'wrap' }}>
              {Bathroom.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>

            <Text style={styles.titleText}>Furnished Type   </Text>
            <View style={{ flexDirection: 'row', padding: 10, flexWrap: 'wrap' }}>
              {FurnishedType.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>

            <Text style={styles.titleText}>Car parking</Text>
            <View style={{ flexDirection: 'row', padding: 10, flexWrap: 'wrap' }}>
              {Carparking.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.smallgap}>
            <Text style={styles.titleText}>Two Wheerler parking</Text>
            <View style={{ flexDirection: 'row', padding: 10, flexWrap: 'wrap' }}>
              {TwoWheerlerparking.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>
            <Text style={styles.titleText}>Faceing</Text>
            <View style={styles.chipStyle}>
              {Faceing.map((item, index) => {
                return (
                  <View key={index}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.smallgap}>
            <Text style={styles.titleText}>Do You Want securty Despoit</Text>
            <View style={styles.chipStyle}>
              {securtyDespoit.map((item, index) => {
                return (
                  <View key={index} >
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.smallgap}>
            <Text style={styles.titleText}>Overlooking</Text>
            <View style={styles.chipStyle}>
              {overlooking.map((item, index) => {
                return (
                  <View key={index} >
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>


          <View style={styles.smallgap}>
            <Text style={styles.titleText}>Flooring</Text>
            <View style={styles.chipStyle}>
              {Flooring.map((item, index) => {
                return (
                  <View key={index} >
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>


          <View style={styles.smallgap}>
            <Text style={styles.titleText}>Lifts</Text>
            <View style={styles.chipStyle}>
              {NooFLift.map((item, index) => {
                return (
                  <View key={index} >
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={selectedChips.includes(item)}
                      onPress={() => handleChipSelection(item)}

                    />
                  </View>
                );
              })}
            </View>
          </View>



        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>




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
    paddingLeft: 10,
    paddingRight: 10
  },
  smallgap: {
    paddingTop: 15
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
    width: '100%', height: '100%', backgroundColor: colors.white
  },
  addIcon: {
    marginLeft: 10, paddingTop: 10
  },
  textinputColor: {
    color: colors.white,
    backgroundColor: colors.white
  },
  titleText: {
    fontSize: 16, fontWeight: 'bold'
  },
  star: {
    color: colors.errorColor
  },
  chipStyle: {
    flexDirection: 'row', padding: 10, flexWrap: 'wrap'
  },
  buttonContainer: {
    backgroundColor:colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: DimensionUtils(60),
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold'
  },

});
export default CreateProperty;