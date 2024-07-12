import React from "react";
import { View, StyleSheet } from 'react-native';
import { Card, Title} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Acceuil({navigation}) {
    return (
        
        <View style={Styles.principale}>
            <View style={Styles.container1}>
                <Card style={Styles.card} onPress={()=>navigation.navigate('TableauBord')}>
                    <View style={Styles.content}>
                        <Icon name="view-dashboard" size={40} color="#7fa3ad" />
                        <Title style={Styles.title}>Tableau de Bord</Title>
                    </View>
                </Card>
                <Card style={Styles.card} onPress={()=>navigation.navigate('Vol')}>
                    <View style={Styles.content}>
                        <Icon name="cloud" size={40} color="#7fa3ad" />
                        <Title style={Styles.title}>Vols</Title>
                    </View>
                </Card>
            </View>
            <View style={Styles.container2}>
                <Card style={Styles.card} onPress={()=>navigation.navigate('Reservation')}>
                    <View style={Styles.content}>
                        <Icon name="calendar-month" size={40} color="#7fa3ad" />
                        <Title style={Styles.title}>Reservations</Title>
                    </View>
                </Card>
                <Card style={Styles.card} onPress={()=> navigation.navigate('Client')}>
                    <View style={Styles.content}>
                        <Icon name="account" size={40} color="#7fa3ad" />
                        <Title style={Styles.title}>Clients</Title>
                    </View>
                </Card>
            </View>
            <View style={Styles.container3}>
                <Card style={Styles.card} onPress={()=>navigation.navigate('Avion')}>
                    <View style={Styles.content}>
                        <Icon name="airplane" size={40} color="#7fa3ad" />
                        <Title style={Styles.title}>Avions</Title>
                    </View>
                </Card>
                <Card style={Styles.card} onPress={()=> navigation.navigate('Lieu')}>
                    <View style={Styles.content}>
                        <Icon name="map-marker" size={40} color="#7fa3ad" />
                        <Title style={Styles.title}>Lieu</Title>
                    </View>
                </Card>
                
            </View>
        </View>
        
    );
}

const Styles = StyleSheet.create({
    principale: {
        paddingTop: 15,
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: '100%',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: -10,
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 70,
    },
    container3: {
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 70,
    },
    card: {
        width: 150,
        height: 150,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#ebeff4',
        margin: 9,
    },
    content: {
        padding: 15,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    }
})