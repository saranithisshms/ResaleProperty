import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LogBox, ScrollView, Alert, Image, Button, FlatList } from 'react-native';
import colors from '../../styles/colors';
import { Header, HeaderProps, } from '@rneui/themed';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { DimensionUtils } from '../../styles/dimension';
import SQLite from 'react-native-sqlite-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Loading from '../../components/loader';






const Details = ({ item }) => (

    <View style={styles.mainContainer}>
        {item.imageuri ?
            <Image
                source={{
                    uri: item.imageuri ? item.imageuri : 'https://coolhouseconcepts.com/wp-content/uploads/2018/05/Man-Cave-Ideas.jpg', // Replace with the actual URL of your image
                }}
                style={styles.image}
            />
            : <Image
                source={require('../../assest/emptyImage.jpg')}
                style={styles.image}

            />}
        <View style={styles.subCont}>

            <View>
                <Text style={styles.title}>{item.propertyName}</Text>
            </View>
            <Text style={styles.subtitle}>Address:</Text>
            <Text style={styles.normalText}>{item.address}</Text>

            <View>
                <Text style={styles.normalText}>Area {item.sqft} sq.ft  </Text>
            </View>
            <View>
                <Text style={styles.pricetext}>{item.monthlyRent} ₹ </Text>
            </View>

            <View>
                <Text style={styles.subtitle}>Description:</Text>
                <Text style={styles.normalText}>{item.descripition}</Text>
            </View>

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 19, paddingTop: 10, color: colors.black, }}>OverView</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 0, }}>
                <View style={{ flex: 1, }}>
                    <View style={styles.gap}>
                        <Text style={styles.subtitle}>
                            Built Area
                        </Text>
                        <Text style={styles.overText}>
                            {item.sqft} sq.ft.
                        </Text>
                    </View>
                    <View style={styles.gap}>
                        <Text style={styles.subtitle}>
                            BHK
                        </Text>
                        <Text style={styles.overText}>
                            {item.bhk}
                        </Text>
                    </View>
                    {item.carparking &&
                        <View style={styles.gap}>
                            <Text style={styles.subtitle}>
                                Car parking
                            </Text>
                            <Text style={styles.overText}>
                                {item.carparking}
                            </Text>
                        </View>}
                    {item.twowheelerparking &&
                        <View style={styles.gap}>
                            <Text style={styles.subtitle}>
                                Two wheeler parking
                            </Text>
                            <Text style={styles.overText}>
                                {item.twowheelerparking}
                            </Text>
                        </View>}
                    <View style={styles.gap}>
                        <Text style={styles.subtitle}>
                            LandLord
                        </Text>
                        <Text style={styles.overText}>
                            {item.BulilderName}
                        </Text>
                    </View>

                    {item.phone &&
                        <View style={styles.gap}>
                            <Text style={styles.subtitle}>
                                MobileNumber
                            </Text>
                            <Text style={styles.overText}>
                                {item.phone}
                            </Text>
                        </View>}

                </View>
                <View style={{ flex: 0.8, paddingLeft: 12, }}>
                    {item.possessionstatus &&
                        <View style={styles.gap}>
                            <Text style={styles.subtitle}>
                                Possession Status
                            </Text>
                            <Text style={styles.overText}>
                                {item.possessionstatus}
                            </Text>
                        </View>}
                    {item.flooring &&
                        <View style={styles.gap}>
                            <Text style={styles.subtitle}>
                                Flooring
                            </Text>
                            <Text style={styles.overText}>
                                {item.flooring}
                            </Text>
                        </View>}
                    <View style={styles.gap}>
                        <Text style={styles.subtitle}>
                            Bathroom
                        </Text>
                        <Text style={styles.overText}>
                            {item.bathroom}
                        </Text>
                    </View>
                    <View style={styles.gap}>
                        <Text style={styles.subtitle}>
                            Faceing
                        </Text>
                        <Text style={styles.overText}>
                            {item.faceing}
                        </Text>
                    </View>
                    {item.overlooking &&
                        <View style={styles.gap}>
                            <Text style={styles.subtitle}>
                                Overlooking
                            </Text>
                            <Text style={styles.overText}>
                                {item.overlooking}
                            </Text>
                        </View>}
                    {item.securitydeposit &&
                        <View style={styles.gap}>
                            <Text style={styles.subtitle}>
                                Security Deposit
                            </Text>
                            <Text style={styles.overText}>
                                {item.securitydeposit}
                            </Text>
                        </View>}
                    {item.lifts &&
                        <View style={styles.gap}>
                            <Text style={styles.subtitle}>
                                No.Lifts
                            </Text>
                            <Text style={styles.overText}>
                                {item.lifts}
                            </Text>
                        </View>}
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
                            {item.sqft} sq.ft.
                        </Text>
                    </View>
                    <View style={styles.gap}>
                        <Text style={styles.subtitle}>
                            BHK
                        </Text>
                        <Text style={styles.overText}>
                            {item.bhk}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 0.8, paddingLeft: 15, }}>
                    <View style={styles.gap}>
                        <Text style={styles.subtitle}>
                            Amount
                        </Text>
                        <Text style={styles.overText}>
                            {item.monthlyRent} ₹
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </View>


);

const DetailsProperty = () => {

    const route = useRoute();

    

    const [propertyData, setPropertyData] = useState([

    ]);
    const [loader, setLoader] = useState(false);

    const db = SQLite.openDatabase(
        {
            name: 'propertyDatasImage.db',
            location: 'default',
        },
        () => {
            //  console.log('Database opened successfully');
        },
        (error) => {
            // console.error('Error opening database: ', error);
        }
    );

    const navigation = useNavigation();

    const propertyDatas = route.params?.propertyDatas ?? null;

    useEffect(() => {
        LogBox.ignoreLogs(['Warning message']);

        if (propertyDatas != null && propertyDatas != undefined) {

             getPropertyDataById(propertyDatas.id)
        }
    }, []);


    const getPropertyDataById = async (id) => {
        setLoader(true)
        await db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM Properties where id = ?',
                [id],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        const property = rows.item(0);
                        //setPropertyData(property); // Update the propertyData state
                        propertyData.push(property)
                        console.log('Fetched property by ID:', property);
                    } else {
                        console.log('No property found with the given ID.');
                    }
                },
                (_, error) => {
                    console.error('Error fetching data by ID:', error);
                }
            );
        });
        setLoader(false)
    };


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
                rightComponent={
                    <View style={styles.headerright}>
                        <TouchableOpacity style={styles.addIcon} onPress={() => {
                            navigation.navigate('CreateProperty', { propertyDatas: propertyDatas });
                        }}>
                            <AntDesign name="edit" size={24} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                }
            />

            <FlatList
                data={propertyData}
                renderItem={({ item }) => <Details item={item} />}
                keyExtractor={item => item.id}
            />




            {/* <ScrollView >
                {loader ? <Loading /> :

                    <View style={styles.mainContainer}>
                        {propertyData.imageuri ?
                            <Image
                                source={{
                                    uri: propertyData.imageuri ? propertyData.imageuri : 'https://coolhouseconcepts.com/wp-content/uploads/2018/05/Man-Cave-Ideas.jpg', // Replace with the actual URL of your image
                                }}
                                style={styles.image}
                            />
                            : <Image
                                source={require('../../assest/emptyImage.jpg')}
                                style={styles.image}

                            />}
                        <View style={styles.subCont}>

                            <View>
                                <Text style={styles.title}>{propertyData.propertyName}</Text>
                            </View>
                            <Text style={styles.subtitle}>Address:</Text>
                            <Text style={styles.normalText}>{propertyData.address}</Text>

                            <View>
                                <Text style={styles.normalText}>Area {propertyData.sqft} sq.ft  </Text>
                            </View>
                            <View>
                                <Text style={styles.pricetext}>{propertyData.monthlyRent} ₹ </Text>
                            </View>

                            <View>
                                <Text style={styles.subtitle}>Description:</Text>
                                <Text style={styles.normalText}>{propertyData.descripition}</Text>
                            </View>

                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 19, paddingTop: 10, color: colors.black, }}>OverView</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: 0, }}>
                                <View style={{ flex: 1, }}>
                                    <View style={styles.gap}>
                                        <Text style={styles.subtitle}>
                                            Built Area
                                        </Text>
                                        <Text style={styles.overText}>
                                            {propertyData.sqft} sq.ft.
                                        </Text>
                                    </View>
                                    <View style={styles.gap}>
                                        <Text style={styles.subtitle}>
                                            BHK
                                        </Text>
                                        <Text style={styles.overText}>
                                            {propertyData.bhk}
                                        </Text>
                                    </View>
                                    {propertyData.carparking &&
                                        <View style={styles.gap}>
                                            <Text style={styles.subtitle}>
                                                Car parking
                                            </Text>
                                            <Text style={styles.overText}>
                                                {propertyData.carparking}
                                            </Text>
                                        </View>}
                                    {propertyData.twowheelerparking &&
                                        <View style={styles.gap}>
                                            <Text style={styles.subtitle}>
                                                Two wheeler parking
                                            </Text>
                                            <Text style={styles.overText}>
                                                {propertyData.twowheelerparking}
                                            </Text>
                                        </View>}
                                    <View style={styles.gap}>
                                        <Text style={styles.subtitle}>
                                            LandLord
                                        </Text>
                                        <Text style={styles.overText}>
                                            {propertyData.BulilderName}
                                        </Text>
                                    </View>

                                    {propertyData.phone &&
                                        <View style={styles.gap}>
                                            <Text style={styles.subtitle}>
                                                MobileNumber
                                            </Text>
                                            <Text style={styles.overText}>
                                                {propertyData.phone}
                                            </Text>
                                        </View>}

                                </View>
                                <View style={{ flex: 0.8, paddingLeft: 12, }}>
                                    {propertyDatas.possessionstatus &&
                                        <View style={styles.gap}>
                                            <Text style={styles.subtitle}>
                                                Possession Status
                                            </Text>
                                            <Text style={styles.overText}>
                                                {propertyData.possessionstatus}
                                            </Text>
                                        </View>}
                                    {propertyData.flooring &&
                                        <View style={styles.gap}>
                                            <Text style={styles.subtitle}>
                                                Flooring
                                            </Text>
                                            <Text style={styles.overText}>
                                                {propertyData.flooring}
                                            </Text>
                                        </View>}
                                    <View style={styles.gap}>
                                        <Text style={styles.subtitle}>
                                            Bathroom
                                        </Text>
                                        <Text style={styles.overText}>
                                            {propertyData.bathroom}
                                        </Text>
                                    </View>
                                    <View style={styles.gap}>
                                        <Text style={styles.subtitle}>
                                            Faceing
                                        </Text>
                                        <Text style={styles.overText}>
                                            {propertyData.faceing}
                                        </Text>
                                    </View>
                                    {propertyData.overlooking &&
                                        <View style={styles.gap}>
                                            <Text style={styles.subtitle}>
                                                Overlooking
                                            </Text>
                                            <Text style={styles.overText}>
                                                {propertyData.overlooking}
                                            </Text>
                                        </View>}
                                    {propertyData.securitydeposit &&
                                        <View style={styles.gap}>
                                            <Text style={styles.subtitle}>
                                                Security Deposit
                                            </Text>
                                            <Text style={styles.overText}>
                                                {propertyData.securitydeposit}
                                            </Text>
                                        </View>}
                                    {propertyData.lifts &&
                                        <View style={styles.gap}>
                                            <Text style={styles.subtitle}>
                                                No.Lifts
                                            </Text>
                                            <Text style={styles.overText}>
                                                {propertyData.lifts}
                                            </Text>
                                        </View>}
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
                                            {propertyData.sqft} sq.ft.
                                        </Text>
                                    </View>
                                    <View style={styles.gap}>
                                        <Text style={styles.subtitle}>
                                            BHK
                                        </Text>
                                        <Text style={styles.overText}>
                                            {propertyData.bhk}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.8, paddingLeft: 15, }}>
                                    <View style={styles.gap}>
                                        <Text style={styles.subtitle}>
                                            Amount
                                        </Text>
                                        <Text style={styles.overText}>
                                            {propertyData.monthlyRent} ₹
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>}
            </ScrollView> */}

        </View>
    );
};

const styles = StyleSheet.create({

    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#000' ,
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
    headerright: {
        paddingTop: 8
    },
    image: {
        width: '100%',
        height: DimensionUtils(200),
        resizeMode: 'cover',
    },
    subCont: {
        paddingLeft: DimensionUtils(15),
        paddingRight: DimensionUtils(15),
        paddingTop: DimensionUtils(10),

    },
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    subtitle: {
        fontSize: 15,
        color:'#7393B3',
        fontWeight: 'bold'
    },
    pricetext: {
        fontSize: 19,
        color:'#000',
        fontWeight: 'bold',
        paddingTop: 2
    },
    overText: {
        fontSize: 14,
        color:'#000',

    },
    title: {
        fontSize: 20,
        color:'#000',
        fontWeight: 'bold'
    },
    normalText: {
        fontSize: 16,
        color:'#000',
        paddingTop: 2
    },
    gap: {
        paddingTop: 5
    },
    titlegap: {
        paddingTop: 10
    }

});


export default DetailsProperty;