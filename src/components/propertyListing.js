import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Image,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your icon library of choice
import { DimensionUtils } from "../styles/dimension";

const PropertyCard = ({ name, onEditPress, onDeletePress }) => {
  return (
    <View
      style={[
        styles.cardContainer,
        Platform.OS === 'ios' ? styles.shadowIOS : styles.shadowAndroid,
      ]}
    >
      <View style={styles.buttonContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.row}>
            <Image
              source={{
                uri: 'https://coolhouseconcepts.com/wp-content/uploads/2018/05/Man-Cave-Ideas.jpg', // Replace with the actual URL of your image
              }}// Replace with the actual path to your image
              style={styles.image}
            />
            <View style={styles.title}>
              <Text  numberOfLines={2} style={styles.text}>{name} sasasasasasaaasadsdsasasa</Text>
              <View>
                <Text numberOfLines={2} style={styles.desText}>{'asashasohashauishauishaishiaugsiuagsigas'}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => onEditPress()}>
              <Icon name="edit" size={28} color="blue" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Alert.alert(
                'Delete',
                'Do You Want to Delete the Property?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      // deletehandle()
                      onDeletePress()
                    },
                  },
                ],
                { cancelable: false },
              );
            }}>
              <Icon name="trash" size={28} color="red" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    margin: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  desText: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'normal',
  },
  shadowIOS: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  shadowAndroid: {
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',

  },
  image: {
    width: DimensionUtils(100), // Set the desired width
    height: DimensionUtils(100), // Set the desired height
    borderRadius: 4
  },
  title: {
    paddingLeft: 10
  }
});

export default PropertyCard;
