import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { Nom, Mail } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détails</Text>
            <Text style={styles.detail}>Nom: {Nom}</Text>
            <Text style={styles.detail}>Mail: {Mail}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebeff4',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    detail: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default DetailsScreen;
