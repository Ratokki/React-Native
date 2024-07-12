import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from './components/Acceuil';
import Clients from './components/clients';
import Lieu from './components/lieu';
import Avion  from './components/avion';
import Reservation from './components/reservation';
import Vol from './components/vol';
import TableauBord from './components/TableauBord';
import infoTableauBord from './components/infoTableauBord';
import DetailsScreen from './components/DetailsScreen';
import Test from './components/test';
import reserveInfo from './components/reserveInfo';

const Stack = createNativeStackNavigator();

//options={{ headerShown: false }}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={Acceuil}/>
        <Stack.Screen name = "Client" component={Clients}/>
        <Stack.Screen name = "Lieu" component={Lieu}/>
        <Stack.Screen name = "Vol" component={Vol}/>
        <Stack.Screen name = "Reservation" component={Reservation}/>
        <Stack.Screen name = "Avion" component={Avion}/>
        <Stack.Screen name = "TableauBord" component={TableauBord}/>
        <Stack.Screen name = "infoTableauBord" component={infoTableauBord}/>
        <Stack.Screen name = "reserveInfo" component={reserveInfo}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;