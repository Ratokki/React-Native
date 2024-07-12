import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const infoTableauBord = ({ route }) => {
  const { card } = route.params; // Récupérer les paramètres passés

  return (
    <View style={styles.detailContainer}>
      <Card style={styles.container}>
        <Card.Cover source={card.img} />
        <Card.Content>
          <Title>Information</Title>
          <View style={styles.paragraph}>
            <Paragraph style={styles.left}>Nom:</Paragraph>
            <Paragraph style={styles.right}>{card.nom}</Paragraph>
          </View>
          <View style={styles.paragraph}>
            <Paragraph style={styles.left}>Vol:</Paragraph>
            <Paragraph style={styles.right}>{card.vol}</Paragraph>
          </View> 
          <View style={styles.paragraph}>
            <Paragraph style={styles.left}>Le:</Paragraph>
            <Paragraph style={styles.right}>{card.dateRes}</Paragraph>
          </View>        
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 330,
    width: 280,
  },
  paragraph: {
    flexDirection: 'row', // Pour aligner les éléments horizontalement
    justifyContent: 'space-between', // Pour créer un espace entre les éléments
    alignItems: 'center', // Pour centrer verticalement
  },
  left: {
    flex: 1, // Utiliser flex pour prendre l'espace disponible
  },
  right: {
    flex: 1, // Utiliser flex pour prendre l'espace disponible
    textAlign: 'right', // Aligner le texte à droite
  },
});

export default infoTableauBord;
