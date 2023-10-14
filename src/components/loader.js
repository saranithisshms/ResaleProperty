import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import colors from '../styles/colors';

const Loading = () => {
    return (
        <View style={styles.container}>
            <LoaderKit
                style={{ width: 50, height: 50 }}
                name={'BallPulse'} 
                size={50} 
                color={colors.primaryColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loading;