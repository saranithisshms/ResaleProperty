import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LogBox } from 'react-native';

import colors from '../../styles/colors';
import { Header, HeaderProps, } from '@rneui/themed';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropertyCard from '../../components/propertyListing';


// import Toast from 'react-native-simple-toast';

const CreateProperty = () => {

  //   const route = useRoute();
  //   const tripId = route.params?.tripId;
  //   console.log(tripId)
    const navigation = useNavigation();

  //   const [userTask, setUserTask] = useState<any>([]);


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


  return (
    <View style={styles.mainContainer}>
      <Header
        containerStyle={styles.headerContainer}
        statusBarProps={{ backgroundColor: 'transparent' }}
        centerComponent={{ text: 'Add Property', style: styles.heading }}
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



      <View>

       

      </View>



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
    width: '100%', height: '100%'
  },
  addIcon:{
    marginLeft: 10 ,paddingTop:10
  }
});
export default CreateProperty;