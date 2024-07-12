import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Avatar, Card, Text, Paragraph, Searchbar, Button, Portal, Modal, Menu, TextInput, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importer l'icône
import DateTimePicker from '@react-native-community/datetimepicker';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" size={35} style={styles.icon} /> // Utilisez une icône valide et ajustez la taille

const cardRecent = [
  {
    img: require('../assets/image1.jpg'),
    nbrPlace: '1',
    dateRes: '12-06-24',
    passager: 'tokki',
    vol: 'vol1'
  },
  {
    img: require('../assets/image2.jpg'),
    nbrPlace: '2',
    dateRes: '11-06-24',
    passager: 'ervel',
    vol: 'vol1'
  },
  {
    img: require('../assets/image6.jpg'),
    nbrPlace: '3',
    dateRes: '10-06-24',
    passager: 'tokki',
    vol: 'vol1'
  },
];

const cardTous = [
  {
    img: require('../assets/image3.jpg'),
    nbrPlace: '1',
    dateRes: '20-06-24',
    passager: 'tokki',
    vol: 'vol1'
  },
  {
    img: require('../assets/image5.jpg'),
    nbrPlace: '1',
    dateRes: '20-06-24',
    passager: 'tokki',
    vol: 'vol1'
  },
  {
    img: require('../assets/image1.jpg'),
    nbrPlace: '1',
    dateRes: '20-06-24',
    passager: 'tokki',
    vol: 'vol1'
  },
  {
    img: require('../assets/image2.jpg'),
    nbrPlace: '1',
    dateRes: '20-06-24',
    passager: 'tokki',
    vol: 'vol1'
  },
  {
    img: require('../assets/image6.jpg'),
    nbrPlace: '1',
    dateRes: '20-06-24',
    passager: 'tokki',
    vol: 'vol1'                                                                                                    
  },
]

const MyComponent = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [nombrePlace, setNombrePlace] = useState('');


  const [searchVisible, setSearchVisible] = useState(false);



  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
    setNombrePlace('');
  };

  const handleSave = () => {
    console.log('Nombreplace:', nombrePlace);
    hideModal();
  };

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleOutsideClick = () => {
    if (searchVisible) {
      setSearchVisible(false);
      Keyboard.dismiss(); // Cacher le clavier
    }
  };

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={handleOutsideClick}>
        <ScrollView>
          <View>
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Faire une reservation</Text>
                  <Icon name="close" size={24} style={styles.closeIcon} onPress={hideModal} />
                </View>

                <TextInput
                    label="Date de Reservation"
                    value={date.toLocaleDateString()}
                    mode="outlined"
                    onFocus={() => setShowDatePicker(true)}
                    right={<TextInput.Icon name="calendar" />}
                    style={styles.input}
                />
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}

                <TextInput
                  value={nombrePlace}
                  onChangeText={text => setNombrePlace(text)}
                  style={styles.input}
                  mode="outlined"
                  label="Nombre de place(s)"
                />
                <View style={styles.monMenu}>
                <Menu
                  visible={showMenu}
                  
                  onDismiss={() => setShowMenu(false)}
                  anchor={
                    <TextInput
                      value={selectedOption}
                      mode="outlined"
                      right={<TextInput.Icon name="chevron-down" onPress={() => setShowMenu(true)} />}
                    />
                  }
                >
                  <Menu.Item onPress={() => { setSelectedOption('Passager1'); setShowMenu(false); }} title="Passager1" />
                </Menu>
                </View>
                <View style={styles.monMenu}>
                <Menu
                  visible={showMenu}
                  style={styles.monMenu}
                  onDismiss={() => setShowMenu(false)}
                  anchor={
                    <TextInput
                      value={selectedOption}
                      mode="outlined"
                      right={<TextInput.Icon name="chevron-down" onPress={() => setShowMenu(true)} />}
                    />
                  }
                >
                  <Menu.Item onPress={() => { setSelectedOption('Vol1'); setShowMenu(false); }} title="Vol1" />
                </Menu>
                </View>


                <Button onPress={handleSave} mode="contained" style={styles.saveButton}>Réserver</Button>
              </Modal>
            </Portal>
            <View style={styles.header}>
            <Button
                icon="account-plus"
                style={styles.newButton} // Utiliser un style séparé pour le bouton
                labelStyle={{ color: '#7fa3ad' }}  // Couleur du texte "Nouveau"
                onPress={showModal}
            >
             Nouveau
            </Button>
            <Searchbar
                placeholder="Recherche"
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.searchBar} // Utiliser un style séparé pour le Searchbar
            />
           </View>
            <Text style={styles.title}>Listes des réservations</Text>
            <View style={styles.titleContainer}>
              <Text style={styles.title1}>Ce mois-ci</Text>
              <Icon style={styles.next} name="navigate-next" size={24} />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.horizontalScroll}>
                {cardRecent.map((card, index) => (
                  <View key={index} style={styles.cardItem}>
                    <Card style={styles.card} onPress={() => navigation.navigate('reserveInfo', { card })}>
                      <Card.Cover style={styles.img} source={card.img} />
                      <Card.Content>
                        <View style={styles.cardTitleContainer}>
                          <LeftContent />
                          <View>
                            <Paragraph style={styles.date}>{card.vol}</Paragraph>
                            <View style={styles.titre}>
                              <Paragraph>Par {card.passager}</Paragraph>
                              <Paragraph>le {card.dateRes}</Paragraph>
                            </View>
                          </View>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={styles.titleContainer}>
              <Text style={styles.title1}>Tous</Text>
              <Icon style={styles.next} name="navigate-next" size={24} />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.horizontalScroll}>
                {cardTous.map((card, index) => (
                  <View key={index} style={styles.cardItem}>
                    <Card style={styles.card} onPress={() => navigation.navigate('reserveInfo', { card })}>
                      <Card.Cover style={styles.img} source={card.img} />
                      <Card.Content>
                        <View style={styles.cardTitleContainer}>
                          <LeftContent />
                          <View>
                            <Paragraph style={styles.date}>{card.vol}</Paragraph>
                            <View style={styles.titre}>
                              <Paragraph>Par {card.passager}</Paragraph>
                              <Paragraph>le {card.dateRes}</Paragraph>
                            </View>
                          </View>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(177, 177, 177, 0.253)',// Définit la couleur de fond comme transparente
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
  searchInput: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'white', // Définir la couleur de fond comme blanche
    borderRadius: 5, // Arrondir les coins
  },
  title: {
    color: '#809aca',
    fontSize: 23,
    marginTop: -8,
    marginLeft: 15,
  },
  title1: {
    color: '#8b8b8b',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15, // Ajouter un espace à droite pour l'icône
  },
  date: {
    marginLeft: -40,
    color: '#8f8f8f',
  },
  titre: {
    marginLeft: -10,
  },
  card: {
    padding: 15,
  },
  horizontalScroll: {
    flexDirection: 'row',
    margin: 15,
    marginTop: 30,
    marginLeft: 11,
  },
  cardItem: {
    marginRight: 15, // Espace entre les card
  },
  card: {
    width: 160, // Redimensionner la largeur de la carte selon votre besoin
    height: 240, // Redimensionner la hauteur de la carte selon votre besoin
    borderRadius: 15, // Ajouter des coins arrondis à la carte
    overflow: 'hidden',
  },
  img: {
    height: 160,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
    marginTop: 20,
    marginLeft: -10, // Ajustez si nécessaire pour l'espacement
  },
  next: {
    marginTop: 30,
    color: '#b1b1b1',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
  },
  closeIcon: {
    color: '#000',
  },
  input: {
    marginBottom: 10,
  },
  monMenu: {
    marginTop: 15,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#d789ef',
  },
});

export default MyComponent;
