import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LogBox, ScrollView, Alert, Image, Button } from 'react-native';

import colors from '../../styles/colors';
import { Header, HeaderProps, } from '@rneui/themed';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { type, PropertyType, owernerType, PossessionStatus, BHK, Bathroom, Carparking, TwoWheerlerparking, FurnishedType, Faceing, securtyDespoit, overlooking, Flooring, NooFLift } from '../../JsonData'; // Adjust the import path accordingly
import SelectableChip from '../../components/chips';
import { DimensionUtils } from '../../styles/dimension';
import SQLite from 'react-native-sqlite-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo  from 'react-native-vector-icons/Entypo';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// import Toast from 'react-native-simple-toast';

const CreateProperty = () => {


  const route = useRoute();
  const [propertyData, setPropertyData] = useState([]);
  const db = SQLite.openDatabase(
    {
      name: 'propertyData.db',
      location: 'default',
    },
    () => {
      console.log('Database opened successfully');
    },
    (error) => {
      console.error('Error opening database: ', error);
    }
  );



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
    maintenaceCharges: '',
    type: '',
    propertytype: '',
    owernertype: '',
    possessionstatus: '',
    bhk: '',
    bathroom: '',
    furnishedtype: '',
    carparking: '',
    twowheelerparking: '',
    faceing: '',
    securitydeposit: '',
    overlooking: '',
    flooring: '',
    lifts: '',
    image: null,
    propertyaddress:''


  });

  const [image, setImage] = useState({})

  const handleImagePicker = () => {


    let option = {
      storageOption: {
        path: 'image',
      }
    }

    launchImageLibrary(option, response => {

      setCreateProperty({ ...createProperty, image: response.assets[0].uri })

      console.log(createProperty.image, response)
    })


  };


 

  const propertyDatas = route.params?.propertyDatas ?? null;

  // console.log('getData>>>>', propertyDatas)

  useEffect(() => {
    LogBox.ignoreLogs(['Warning message']);
    createTable()
    if (propertyDatas != null && propertyDatas != undefined) {
      editData(propertyDatas)
    }
  }, []);


  const editData = (propertyDatas) => {
     console.log(propertyDatas.monthlyRent,propertyDatas.maintenaceCharge)
    setCreateProperty({
      ...createProperty,

      propertyName: propertyDatas.propertyName,
      descripition: propertyDatas.descripition,
      BuildupArea: propertyDatas.BuildupArea,
      sqft: propertyDatas.sqft,
      AgeofProperty: propertyDatas.AgeofProperty,
      months: propertyDatas.months,
      monthlyRent: propertyDatas.monthlyRent,
      BulilderName: propertyDatas.BulilderName,
      maintenaceCharges: propertyDatas.maintenaceCharge,
      type: propertyDatas.type,
      propertytype: propertyDatas.propertytype,
      owernertype: propertyDatas.owernertype,
      possessionstatus: propertyDatas.possessionstatus,
      bhk: propertyDatas.bhk,
      bathroom: propertyDatas.bathroom,
      furnishedtype: propertyDatas.furnishedtype,
      carparking: propertyDatas.carparking,
      twowheelerparking: propertyDatas.twowheelerparking,
      faceing: propertyDatas.faceing,
      securitydeposit: propertyDatas.securitydeposit,
      overlooking: propertyDatas.overlooking,
      flooring: propertyDatas.flooring,
      lifts: propertyDatas.lifts

    })

    console.log("setData",createProperty.monthlyRent)
  }


  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `
        CREATE TABLE IF NOT EXISTS Properties (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          propertyName TEXT,
          descripition TEXT,
          BuildupArea REAL,
          sqft REAL,
          AgeofProperty TEXT,
          months INTEGER,
          monthlyRent REAL,
          BulilderName TEXT,
          maintenaceCharges REAL,
          type TEXT,
          propertytype TEXT,
          owernertype TEXT,
          possessionstatus TEXT,
          bhk INTEGER,
          bathroom INTEGER,
          furnishedtype TEXT,
          carparking TEXT,
          twowheelerparking TEXT,
          faceing TEXT,
          securitydeposit REAL,
          overlooking TEXT,
          flooring TEXT,
          lifts TEXT
        )
        `,
        [],
        () => {
          //  console.log('Table created successfully');
        },
        (_, error) => {
          //console.error('Error creating table:', error);
        }
      );
    });
  }


  const handleChipSelection = (label, type) => {

    if (type == "type") {

      setCreateProperty({ ...createProperty, type: label.name })

    } else if (type == "propertyType") {

      setCreateProperty({ ...createProperty, propertytype: label.name })

    } else if (type == "owernerType") {

      setCreateProperty({ ...createProperty, owernertype: label.name })

    } else if (type == "possessionStatus") {

      setCreateProperty({ ...createProperty, possessionstatus: label.name })

    } else if (type == "bhk") {

      setCreateProperty({ ...createProperty, bhk: label.name })

    } else if (type == "bathroom") {

      setCreateProperty({ ...createProperty, bathroom: label.name })

    } else if (type == "furnishedtype") {

      setCreateProperty({ ...createProperty, furnishedtype: label.name })

    } else if (type == "carparking") {

      setCreateProperty({ ...createProperty, carparking: label.name })

    } else if (type == "twowheelerparking") {

      setCreateProperty({ ...createProperty, twowheelerparking: label.name })

    }
    else if (type == "facing") {

      setCreateProperty({ ...createProperty, faceing: label.name })

    } else if (type == "securitydeposit") {

      setCreateProperty({ ...createProperty, securitydeposit: label.name })

    } else if (type == "overlooking") {

      setCreateProperty({ ...createProperty, overlooking: label.name })

    } else if (type == "flooring") {

      setCreateProperty({ ...createProperty, flooring: label.name })

    } else if (type == "lifts") {

      setCreateProperty({ ...createProperty, lifts: label.name })

    }

  };

  // Define the saveValidation function
  function saveValidation() {
    if (
      createProperty.name !== '' &&
      createProperty.BulilderName !== '' &&
      createProperty.BuildupArea !== '' &&
      createProperty.sqft !== '' &&
      createProperty.AgeofProperty !== '' &&
      createProperty.months !== '' &&
      createProperty.type !== '' &&
      createProperty.owernertype !== '' &&
      createProperty.bhk !== '' &&
      createProperty.bathroom !== '' &&
      createProperty.faceing !== '' &&
      createProperty.monthlyRent !== ''
    ) {
      return true;
    } else {
      return false;
    }
  }
  const isValid = saveValidation();

  /// SaveData 


  const handleSaveData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `
        INSERT INTO Properties
        (
          propertyName,
          descripition,
          BuildupArea,
          sqft,
          AgeofProperty,
          months,
          monthlyRent,
          BulilderName,
          maintenaceCharges,
          type,
          propertytype,
          owernertype,
          possessionstatus,
          bhk,
          bathroom,
          furnishedtype,
          carparking,
          twowheelerparking,
          faceing,
          securitydeposit,
          overlooking,
          flooring,
          lifts
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
          createProperty.propertyName,
          createProperty.descripition,
          createProperty.BuildupArea,
          createProperty.sqft,
          createProperty.AgeofProperty,
          createProperty.months,
          createProperty.monthlyRent,
          createProperty.BulilderName,
          createProperty.maintenaceCharges,
          createProperty.type,
          createProperty.propertytype,
          createProperty.owernertype,
          createProperty.possessionstatus,
          createProperty.bhk,
          createProperty.bathroom,
          createProperty.furnishedtype,
          createProperty.carparking,
          createProperty.twowheelerparking,
          createProperty.faceing,
          createProperty.securitydeposit,
          createProperty.overlooking,
          createProperty.flooring,
          createProperty.lifts
        ],
        (_, result) => {
          console.log('Data saved successfully');
         
          
          navigation.goBack();
        },
        (_, error) => {
          console.error('Error saving data:', error);
        }
      );
    });
  };



  const handleUpdateData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `
      UPDATE Properties
      SET
        propertyName = ?,
        descripition = ?,
        BuildupArea = ?,
        sqft = ?,
        AgeofProperty = ?,
        months = ?,
        monthlyRent = ?,
        BulilderName = ?,
        maintenaceCharges = ?,
        type = ?,
        propertytype = ?,
        owernertype = ?,
        possessionstatus = ?,
        bhk = ?,
        bathroom = ?,
        furnishedtype = ?,
        carparking = ?,
        twowheelerparking = ?,
        faceing = ?,
        securitydeposit = ?,
        overlooking = ?,
        flooring = ?,
        lifts = ?
      WHERE id = ?
      `,
        [
          createProperty.propertyName,
          createProperty.descripition,
          createProperty.BuildupArea,
          createProperty.sqft,
          createProperty.AgeofProperty,
          createProperty.months,
          createProperty.monthlyRent,
          createProperty.BulilderName,
          createProperty.maintenaceCharges,
          createProperty.type,
          createProperty.propertytype,
          createProperty.owernertype,
          createProperty.possessionstatus,
          createProperty.bhk,
          createProperty.bathroom,
          createProperty.furnishedtype,
          createProperty.carparking,
          createProperty.twowheelerparking,
          createProperty.faceing,
          createProperty.securitydeposit,
          createProperty.overlooking,
          createProperty.flooring,
          createProperty.lifts,
          propertyDatas.id, // ID to identify the record to update
        ],
        (_, result) => {
          navigation.navigate('ListingProperty');
         
          // You may want to navigate to another screen or perform other actions
        },
        (_, error) => {
          console.error('Error updating data:', error);
        }
      );
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        containerStyle={styles.headerContainer}
        statusBarProps={{ backgroundColor: 'transparent' }}
        centerComponent={{ text:'Property' , style: styles.heading }}
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

        <View style={styles.screenMargin}>

          <View style={styles.note}>

            <Text>Note :</Text>
            <Text style={styles.noteText}>
              * indicate a mandatory field
            </Text>

          </View>
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
              label="Address *"
              onChangeText={(text) => setCreateProperty({ ...createProperty, propertyaddress: text })}
              value={createProperty.propertyaddress}
              style={styles.textinputColor}
              mode="flat"
            />
          </View>
          <View style={styles.smallgap}>

            <Text style={styles.titleText}>I want to  <Text style={styles.star}>*</Text></Text>
            <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 5 }}>
              {type.map((item, index) => {
                return (
                  <View key={index} style={{ flexWrap: 'wrap', }}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={item.name === createProperty.type}
                      onPress={() => handleChipSelection(item, 'type')}

                    />
                  </View>
                );
              })}
            </View>
          </View>

          <View style={[styles.smallgap,]}>
            <TextInput
              label="Descripition"
              onChangeText={(text) => setCreateProperty({ ...createProperty, descripition: text })}
              value={createProperty.descripition}
              style={styles.textinputColor}
              mode="flat"
              multiline
            />
          </View>

          {/* <View style={styles.smallgap}>
            <TextInput
              label={"Maintenace Charges"}
              onChangeText={(text) => setCreateProperty({ ...createProperty, maintenaceCharges: text })}
              value={createProperty?.maintenaceCharges?.toString()}
              style={styles.textinputColor}
              mode="flat"
              keyboardType="numeric"
            />
          </View> */}

          <View style={styles.smallgap}>
            <TextInput
              label={createProperty.type == "sell" ? "Price *" : "Monthly Rent *"}
              onChangeText={(text) => setCreateProperty({ ...createProperty, monthlyRent: text })}
              value={createProperty.monthlyRent.toString()}
              style={styles.textinputColor}
              mode="flat"
              keyboardType="numeric"
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
                value={createProperty.sqft.toString()}
                style={styles.textinputColor}
                mode="flat"
                keyboardType="numeric"
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
              //keyboardType="numeric"
              />
            </View>
            <View style={{ flex: 0.8, paddingLeft: 15, }}>
              <TextInput
                label="Month *"
                onChangeText={(text) => setCreateProperty({ ...createProperty, months: text })}
                value={createProperty.months.toString()}
                style={styles.textinputColor}
                mode="flat"
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.smallgap}>
            <Text style={styles.titleText}>Add Property Image </Text>
          </View>
          <View style={styles.smallgap}>

            {createProperty.image != null ?

              <View style={{ paddingRight:10,paddingLeft:10 }}>
                <Image source={{ uri: createProperty.image }} style={styles.uploadImage} />
                <View style={styles.deleteIcon}>
                  <TouchableOpacity
                    onPress={() =>   setCreateProperty({ ...createProperty, image: null })}>
                    <View style={styles.removeCricle}>
                      <Entypo
                        name={'circle-with-cross'}
                        size={24}
                        color={colors.errorColor}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              : <TouchableOpacity
                style={styles.borderbutton}
                onPress={handleImagePicker}
              >
                <Text style={styles.buttonText}>upload Image +</Text>
              </TouchableOpacity>}

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
                      isSelected={item.name === createProperty.propertytype}
                      onPress={() => handleChipSelection(item, 'propertyType')}

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
                  <View key={index}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={item.name === createProperty.owernertype}
                      onPress={() => handleChipSelection(item, 'owernerType')}

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
                      isSelected={item.name === createProperty.possessionstatus}
                      onPress={() => handleChipSelection(item, 'possessionStatus')}

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
                      label={item.name.toString()}
                      isSelected={item.name === createProperty.bhk}
                      onPress={() => handleChipSelection(item, 'bhk')}

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
                      label={item.name.toString()}
                      isSelected={item.name === createProperty.bathroom}
                      onPress={() => handleChipSelection(item, 'bathroom')}

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
                      isSelected={item.name === createProperty.furnishedtype}
                      onPress={() => handleChipSelection(item, 'furnishedtype')}

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
                      isSelected={item.name === createProperty.carparking}
                      onPress={() => handleChipSelection(item, 'carparking')}

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
                      isSelected={item.name === createProperty.twowheelerparking}
                      onPress={() => handleChipSelection(item, 'twowheelerparking')}

                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.smallgap}>
            <Text style={styles.titleText}>Faceing  <Text style={styles.star}>*</Text></Text>
            <View style={styles.chipStyle}>
              {Faceing.map((item, index) => {
                return (
                  <View key={index}>
                    <SelectableChip
                      key={index}
                      label={item.name}
                      isSelected={item.name === createProperty.faceing}
                      onPress={() => handleChipSelection(item, 'facing')}

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
                      isSelected={item.name === createProperty.securitydeposit}
                      onPress={() => handleChipSelection(item, 'securitydeposit')}

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
                      isSelected={item.name === createProperty.overlooking}
                      onPress={() => handleChipSelection(item, 'overlooking')}

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
                      isSelected={item.name === createProperty.flooring}
                      onPress={() => handleChipSelection(item, 'flooring')}

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
                      isSelected={item.name === createProperty.lifts}
                      onPress={() => handleChipSelection(item, 'lifts')}

                    />
                  </View>
                );
              })}
            </View>
          </View>

         

        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: isValid ? colors.primaryColor : colors.grayColor }]}
        onPress={() => {
          if (isValid) {
            if (propertyDatas != null) {
              handleUpdateData()
            } else {
              handleSaveData()
            }
          }

        }}
      >
        <Text style={styles.buttonTexts}>{propertyDatas != null ? "Update" : 'Create'}</Text>
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
    paddingRight: 10,
    paddingTop:14
  },
  smallgap: {
    paddingTop: 15
  },

  textinputColor: {
    color: colors.white,
    fontSize: 18
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
   
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
  textcolorsBtn: {
    color: colors.white,
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
    width: '100%', height: '100%', backgroundColor: colors.white,
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
  noteText: {
    fontSize: 16,
  },
  star: {
    color: colors.errorColor
  },
  chipStyle: {
    flexDirection: 'row', padding: 10, flexWrap: 'wrap'
  },
  buttonContainer: {

    alignItems: 'center',
    justifyContent: 'center',
    height: DimensionUtils(60),
  },
  buttonTexts: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  note: {
    backgroundColor: colors.grayColor, padding: 10
  },
  borderbutton: {
    borderWidth: 1,
    borderColor: colors.darkgrayColor,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dotted'
  },
  buttonText: {
    fontSize: 16,
    color: colors.darkgrayColor,
  },
  uploadImage: {
    width: '100%',
    height: DimensionUtils(200),
    borderRadius: 10
  },
  deleteIcon: {
    width: 25,
    height: 25,
     right: -6,
     top: -6,
    zIndex: 1,
  
    position: 'absolute',

  },

});
export default CreateProperty;