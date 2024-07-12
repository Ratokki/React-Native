import * as React from 'react';
import { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Avatar, Card, Text, Title, Paragraph, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importer l'icône

const LeftContent = props => <Avatar.Icon {...props} icon="folder" size={35} style={styles.icon} /> // Utilisez une icône valide et ajustez la taille

const cardRecent = [
  {
    img: require('../assets/image1.jpg'),
    nom: 'Tokki',
    vol: 'Vol1',
    date: 'Ajourdhui',
    dateRes: '12-07-24'
  },
  {
    img: require('../assets/image2.jpg'),
    nom: 'Ervel',
    vol: 'Vol2',
    date: 'Hier',
    dateRes: '11-07-24'
  },
  {
    img: require('../assets/image6.jpg'),
    nom: 'Ra Toky',
    vol: 'Vol3',
    date: 'Avant-hier',
    dateRes: '10-07-24'
  },
];

const cardAnnule = [
  {
    img: require('../assets/image3.jpg'),
    nom: 'Tokki',
    vol: 'Vol1',
    dateRes: '11-07-24'
  },
  {
    img: require('../assets/image5.jpg'),
    nom: 'Ervel',
    vol: 'Vol2',
    dateRes: '10-07-24'
  },
]

const MyComponent = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredRecentCards = cardRecent.filter(card => 
    card.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.vol.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredAnnuleCards = cardAnnule.filter(card => 
    card.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.vol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView>
      <View>
        <Searchbar
          placeholder="Recherche"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Réservation récente</Text>
          <Icon style={styles.next} name="navigate-next" size={24} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalScroll}>
            {filteredRecentCards.map((card, index) => (
              <View key={index} style={styles.cardItem}>
                <Card style={styles.card} onPress={() => navigation.navigate('infoTableauBord', { card })}>
                  <Card.Cover style={styles.img} source={card.img} />
                  <Card.Content>
                    <View style={styles.cardTitleContainer}>
                      <LeftContent />
                      <View>
                        <Paragraph style={styles.date}>{card.date}</Paragraph>
                        <View style={styles.titre}>
                          <Paragraph>Par: {card.nom}</Paragraph>
                          <Paragraph>vol: {card.vol}</Paragraph> 
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
          <Text style={styles.title}>Réservation annulé</Text>
          <Icon style={styles.next} name="navigate-next" size={24} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalScroll}>
            {filteredAnnuleCards.map((card, index) => (
              <View key={index} style={styles.cardItem}>
                <Card style={styles.card} onPress={() => navigation.navigate('infoTableauBord', { card })}>
                  <Card.Cover style={styles.img} source={card.img} />
                  <Card.Content>
                    <View style={styles.cardTitleContainer}>
                      <LeftContent />
                      <View>
                        <View style={styles.titre}>
                          <Paragraph>Par: {card.nom}</Paragraph>
                          <Paragraph>Vol: {card.vol}</Paragraph> 
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
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#809aca',
    fontSize: 23,
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
  searchBar: {
    margin: 15,
    borderRadius: 10,
  }
});

export default MyComponent;
