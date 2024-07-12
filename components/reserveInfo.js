import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importer l'icône
import { Card, Title, Paragraph, Modal, Portal, IconButton, TextInput, Button, Provider } from 'react-native-paper';

const infoTableauBord = ({ route }) => {
  const { card } = route.params; // Récupérer les paramètres passés

  const [visible, setVisible] = useState(false);
  const [dateRes, setDateRes] = useState(card.dateRes);
  const [nbrPlace, setNbrPlace] = useState(card.nbrPlace);
  const [passager, setPassager] = useState(card.passager);
  const [vol, setVol] = useState(card.vol);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.detailContainer}>
        <IconButton
          icon="pencil"
          size={24}
          style={styles.editIcon}
          onPress={showModal}
        />
        <Card style={styles.container}>
          <Card.Cover source={card.img} />
          <Card.Content>
            <Title>Information</Title>
            <View style={styles.paragraph}>
              <Paragraph style={styles.left}>Reservé le:</Paragraph>
              <Paragraph style={styles.right}>{card.dateRes}</Paragraph>
            </View>
            <View style={styles.paragraph}>
              <Paragraph style={styles.left}>Nombre de place:</Paragraph>
              <Paragraph style={styles.right}>{card.nbrPlace}</Paragraph>
            </View>
            <View style={styles.paragraph}>
              <Paragraph style={styles.left}>Passager:</Paragraph>
              <Paragraph style={styles.right}>{card.passager}</Paragraph>
            </View>
            <View style={styles.paragraph}>
              <Paragraph style={styles.left}>Vol:</Paragraph>
              <Paragraph style={styles.right}>{card.vol}</Paragraph>
            </View>
          </Card.Content>
        </Card>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
            <View style={styles.modalHeader}>
               <Title style={styles.modalTitle}>Modifier les informations</Title>
               <Icon name="close" size={24} style={styles.closeIcon} onPress={hideModal} />
            </View>
            <TextInput
              label="Date de résérvation"
              mode="outlined"
              value={dateRes}
              onChangeText={setDateRes}
              style={styles.input}
            />
            <TextInput
              label="Nombre de place"
              mode="outlined"
              value={nbrPlace}
              onChangeText={setNbrPlace}
              style={styles.input}
            />
            <TextInput
              label="Passager"
              mode="outlined"
              value={passager}
              onChangeText={setPassager}
              style={styles.input}
            />
            <TextInput
              mode="outlined"
              label="Vol"
              value={vol}
              onChangeText={setVol}
              style={styles.input}
            />
            <Button mode="contained" onPress={hideModal} style={styles.saveButton}>Sauvegarder</Button>
          </Modal>
        </Portal>
      </View>
    </Provider>
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
    height: 350,
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
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  editIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
  },
  closeIcon: {
    color: '#000',
  },
  input: {
    marginBottom: 10,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#d789ef',
  },
});

export default infoTableauBord;
