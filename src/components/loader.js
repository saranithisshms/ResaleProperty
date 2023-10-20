import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import { ActivityIndicator } from 'react-native-paper';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true}  color={colors.primaryColor} />
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      
        justifyContent: 'center',
        alignItems: 'center',
        padding:50
    },
});

export default Loading;