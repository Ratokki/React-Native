import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card, Avatar, Button, Text, Title, Paragraph, Searchbar, Portal, Modal, Provider, Menu, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const infoPerso = [
    {
        Nom: 'Tokki',
        Prenom: 'Ervel',       
        Mail: 'tkervel@gmail.com',
        NumTel: '0345045284',
        Sexe: 'Homme',
        DateNais: '01-01-01',
    },
    {
        Nom: 'Ra',
        Prenom: 'Toky', 
        Mail: 'toky@gmail.com',
        NumTel: '0345045284',
        Sexe: 'Homme',
        DateNais: '01-01-01',
    },
    {
        Nom: 'Mr',
        Prenom: 'Ervel', 
        Mail: 'mrervel@gmail.com',
        NumTel: '0345045284',
        Sexe: 'Homme',
        DateNais: '01-01-01',
    },
];

export default function Reservation() {
    const [visible, setVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState({});
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [mail, setMail] = useState('');
    const [numTel, setNumTel] = useState('');
    const [sexe, setSexe] = useState('');
    const [dateNais, setDateNais] = useState('');
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => {
        setVisible(false);
        setNom('');
        setPrenom('');
        setMail('');
        setNumTel('');
        setSexe('');
        setDateNais('');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const openMenu = (index) => setMenuVisible({ ...menuVisible, [index]: true });
    const closeMenu = (index) => setMenuVisible({ ...menuVisible, [index]: false });

    const handleDetails = (perso) => {
        setSelectedPerson(perso);
        setDetailsVisible(true);
    };

    const hideDetailsModal = () => setDetailsVisible(false);

    const handleEdit = (perso) => {
        setSelectedPerson(perso);
        setNom(perso.Nom);
        setPrenom(perso.Prenom);
        setMail(perso.Mail);
        setNumTel(perso.NumTel);
        setSexe(perso.Sexe);
        setDateNais(perso.DateNais);
        showModal();
    };

    const handleSave = () => {
        // Ajoutez la logique pour enregistrer les nouvelles données ici
        hideModal();
    };

    const [searchQuery, setSearchQuery] = React.useState('');
    const filteredPersons = infoPerso.filter(person =>
        person.Nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.Mail.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Provider>
            <View>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={Styles.modalContainer}>
                        <View style={Styles.modalHeader}>
                            <Text style={Styles.modalTitle}>Modifier une vol</Text>
                            <Icon name="close" size={24} style={Styles.closeIcon} onPress={hideModal} />
                        </View>
                        <TextInput
                            value={nom}
                            onChangeText={text => setNom(text)}
                            style={Styles.input}
                            mode="outlined"
                            label="Nom"
                        />
                        <TextInput
                            value={prenom}
                            onChangeText={text => setPrenom(text)}
                            style={Styles.input}
                            mode="outlined"
                            label="Prenom"
                        />
                        <TextInput
                            label="Email"
                            value={mail}
                            onChangeText={text => setMail(text)}
                            style={Styles.input}
                            mode="outlined"
                        />
                        <TextInput
                            value={numTel}
                            onChangeText={text => setNumTel(text)}
                            style={Styles.input}
                            mode="outlined"
                            label="Numero telephone"
                        />
                        <TextInput
                            value={sexe}
                            onChangeText={text => setSexe(text)}
                            style={Styles.input}
                            mode="outlined"
                            label="Sexe"
                        />
                        <TextInput
                            label="Date de Naissance"
                            value={date.toLocaleDateString()}
                            mode="outlined"
                            onFocus={() => setShowDatePicker(true)}
                            right={<TextInput.Icon name="calendar" />}
                        />
                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={onChange}
                            />
                        )}
                        <Button onPress={handleSave} mode="contained" style={Styles.saveButton}>Enregistrer</Button>
                    </Modal>
                    <Modal visible={detailsVisible} onDismiss={hideDetailsModal} contentContainerStyle={Styles.modalContainer}>
                        {selectedPerson && (
                            <View>
                                <Text style={Styles.modalTitle}>Détails de la personne</Text>
                                <View style={Styles.detailRow}>
                                    <Text style={Styles.detailTitle}>Nom:</Text>
                                    <Text style={Styles.detailValue}>{selectedPerson.Nom}</Text>
                                </View>
                                <View style={Styles.detailRow}>
                                    <Text style={Styles.detailTitle}>Prénom:</Text>
                                    <Text style={Styles.detailValue}>{selectedPerson.Prenom}</Text>
                                </View>
                                <View style={Styles.detailRow}>
                                    <Text style={Styles.detailTitle}>Email:</Text>
                                    <Text style={Styles.detailValue}>{selectedPerson.Mail}</Text>
                                </View>
                                <View style={Styles.detailRow}>
                                    <Text style={Styles.detailTitle}>Téléphone:</Text>
                                    <Text style={Styles.detailValue}>{selectedPerson.NumTel}</Text>
                                </View>
                                <View style={Styles.detailRow}>
                                    <Text style={Styles.detailTitle}>Sexe:</Text>
                                    <Text style={Styles.detailValue}>{selectedPerson.Sexe}</Text>
                                </View>
                                <View style={Styles.detailRow}>
                                    <Text style={Styles.detailTitle}>Date de naissance:</Text>
                                    <Text style={Styles.detailValue}>{selectedPerson.DateNais}</Text>
                                </View>
                                <Button onPress={hideDetailsModal} mode="contained" style={Styles.saveButton}>Fermer</Button>
                            </View>
                        )}
                    </Modal>
                </Portal>
                <View style={Styles.header}>
                    <Button
                        icon="account-plus"
                        style={Styles.newButton} // Utiliser un style séparé pour le bouton
                        labelStyle={{ color: '#7fa3ad' }}  // Couleur du texte "Nouveau"
                        onPress={showModal}
                    >
                        Nouveau
                    </Button>
                    <Searchbar
                        placeholder="Recherche"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={Styles.searchBar} // Utiliser un style séparé pour le Searchbar
                    />
                </View>
                <Text style={Styles.TitreListe}>Liste des Clients</Text>
                <View style={Styles.cardContainer}>
                    {filteredPersons.map((perso, index) => (
                        <TouchableWithoutFeedback key={index} onPress={() => handleDetails(perso)}>
                            <View>
                                <Card style={Styles.Listes}>
                                    <Card.Content style={Styles.CardContent}>
                                        <Avatar.Icon size={50} icon="account" style={Styles.Avatar} />
                                        <View style={Styles.Apropos}>
                                            <View>
                                                <Title style={Styles.Nom}>{perso.Nom}</Title>
                                                <Paragraph style={Styles.Mail}>{perso.Mail}</Paragraph>
                                            </View>
                                            <Menu
                                                style={Styles.menu}
                                                visible={menuVisible[index]}
                                                onDismiss={() => closeMenu(index)}
                                                anchor={
                                                    <Icon name="dots-vertical" style={Styles.icon} size={25} onPress={() => openMenu(index)} />
                                                }>
                                                <Menu.Item onPress={() => handleDetails(perso)} title="Détails" />
                                                <Menu.Item onPress={() => handleEdit(perso)} title="Modifier" />
                                                <Menu.Item onPress={() => {}} title="Supprimer" />
                                            </Menu>
                                        </View>
                                    </Card.Content>
                                </Card>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </View>
        </Provider>
    );
}

const Styles = StyleSheet.create({
    header: {
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center', // Assurez-vous que les éléments sont alignés au centre
        justifyContent: 'space-between'
    },
    newButton: {
        color: 'red',
        fontSize: 30,
        marginRight: 40, // Ajouter un espace à droite du bouton
    },
    searchBar: {
        flex: 1, // Permettre à la Searchbar de prendre tout l'espace restant
        backgroundColor: 'rgba(177, 177, 177, 0.253)', // Définit la couleur de fond comme transparente
        elevation: 0, // Supprime l'ombre par défaut
        borderBottomColor: 'transparent', // Supprime la bordure inférieure
    },
    search: {
        // Définit la couleur de fond comme transparente
        elevation: 0, // Supprime l'ombre par défaut
        // Supprime la bordure inférieure
        marginTop: -5,
        backgroundColor: 'rgb(177, 177, 177)',
    },
    cardContainer: {
        marginTop: 15,
    },
    TitreListe: {
        marginTop: -10,
        marginLeft: 15,
        color: '#809aca',
        fontSize: 23,
    },
    Listes: {
        height: 75,
        marginVertical: 5, // Réduire l'espace vertical entre les cartes
        marginHorizontal: 10, // Espace horizontal entre les cartes
        backgroundColor: '#ebeff4',
    },
    Avatar: {
        marginTop: -3,
    },
    icon: {
        marginTop: -2,
    },
    CardContent: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Apropos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Nom: {
    marginTop: -2,
    marginLeft: 8,
},
Mail: {
    marginTop: -3,
    marginLeft: 8,
},
menu: {
    backgroundColor: '#ebeff4',
    
},
modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
},
closeIcon: {
    marginRight: 10,
},
modalTitle: {
    fontSize: 30,
    flex: 1,
    color: '#809aca',
},
modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
},
closeIcon: {
    alignSelf: 'flex-end',
    marginBottom: 10,
},
modalTitle: {
    fontSize: 18,
    marginBottom: 10,
},
input: {
    marginBottom: 10,
},
saveButton: {
    marginTop: 10,
    backgroundColor: '#d789ef', // Couleur du bouton Enregistrer
},
detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
},
detailTitle: {
    flex: 1,
    fontWeight: 'bold',
},
detailValue: {
    flex: 1,
    textAlign: 'right',
},
});
