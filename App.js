import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, 
  TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Flex, ListItem } from '@react-native-material/core';
import { Octicons, Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import MyStopWatch from './MyStopWatch';

function TempoPartilha() {
  const [bgColor, setBgColor] = React.useState('white')
  return (
     <KeyboardAvoidingView 
      style={{
        backgroundColor: bgColor, 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset="80"
      enabled
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <MyStopWatch onYellowCard={setBgColor} onRedCard={setBgColor} onReset={setBgColor} />
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  
  );
}

function Regras() {
  return (
    <View style={{flex: 1}}>
    {/* // <Flex>
    // <ScrollView> */}
    <ListItem 
      leading={<Octicons color={'#fa8072'} name="stop" size={20} />}
      title={<Text style={[styles.title, {color:'#fa8072'}]}>Sigilo</Text>}
      secondaryText={<Text style={styles.secondaryText}>O que se fala, o que se vê, o que se escuta aqui, aqui fica – este é um espaço em que podemos ser nós mesmos, sem medo de nos expor.</Text>}
    />
    <ListItem
      leading={<FontAwesome5 color={'#6a5acd'} name="people-arrows" size={20} />}
      title={<Text style={[styles.title, {color:'#6a5acd'}]}>Sem Conversas paralelas</Text>}
      secondaryText={<Text style={styles.secondaryText}>Devemos respeitar quando o outro estiver em seu tempo de partilha.</Text>}
    />
    <ListItem
      leading={<Ionicons color={'#ffd700'} name="volume-mute" size={20} />}
      title={<Text style={[styles.title, {color:'#ffd700'}]}>Linguagem Apropriada</Text>}
      secondaryText={<Text style={styles.secondaryText}>Devemos honrar nosso próximo estabelecendo uma linguagem apropriada.</Text>}
    />
    <ListItem
      leading={<Octicons color={'#d2691e'} name="stopwatch" size={24} />}
      title={<Text style={[styles.title, {color:'#d2691e'}]}>Tempo</Text>}
      secondaryText={<Text style={styles.secondaryText}>Todos devem ter oportunidade de falar.</Text>}
    />
    <ListItem
      leading={<MaterialIcons color={'#556b2f'} name="support" size={24} />}
      title={<Text style={[styles.title, {color:'#556b2f'}]}>Apoio</Text>}
      secondaryText={<Text style={styles.secondaryText}>Nosso papel é de apoio. Não tentamos consertar ninguém.</Text>}
    />
    {/* </ScrollView>
    </Flex> */}
    </View>
  );
}

function Sobre() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sobre</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Regras'>
      <Drawer.Screen name="Regras" component={Regras} />
        <Drawer.Screen name="Partilha" component={TempoPartilha} />
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500"
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "400"
  },
  explanations: {
    fontSize: 18
  }
});
