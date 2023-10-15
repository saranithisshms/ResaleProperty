import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const SelectableChip = ({ label, isSelected, onPress }) => {
    return (

        <TouchableOpacity onPress={onPress}>
            <View style={[styles.chip, isSelected ? styles.selected : null]}>
                <Text style={isSelected ? styles.selectlabel : styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    chip: {
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 1
    },
    selected: {
        backgroundColor: colors.primaryColor,
        borderWidth: 0
    },
    label: {
        color: colors.black,
        fontSize: 16

    },
    selectlabel: {
        color: colors.white,
        fontSize: 16

    }
});

export default SelectableChip;