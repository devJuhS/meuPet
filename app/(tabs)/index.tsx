import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons style={styles.icon} name="person-circle-outline" size={50} color="black" />
        <Text style={styles.texto}>Bem Vindo!</Text>
        <Image style={styles.logo} source={require('@/assets/images/logoMeuPet.png')}/>
      </View>

      <View style={styles.linha}></View>

      <View style={styles.busca}>
        <Text style={styles.textoBusca}>O que o seu pet precisa?</Text>
        <TextInput 
        style={styles.caixaBusca}
        placeholder='Busque aqui...'
        placeholderTextColor="#8A8A8A"/>
      </View>

      <View style={styles.cards}>
        <TouchableOpacity style={styles.card}>
          <Text>Cachorros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text>Gatos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text>Outros Pets</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

    container:{
      flex: 1,
      backgroundColor: '#FFFFFF',
    },

    header:{
      flexDirection: 'row',
    },

    icon:{
      marginTop: 10,
      marginLeft: 10, 
    },

    texto:{
      fontSize: 25,
      marginTop: 20,
      marginRight: 130,
      marginLeft: 0,
      fontWeight: 'bold',
    },

    logo:{
      marginTop: 10,
      marginRight: 10,
      width: 50,
      height: 50,
    },

    linha:{
      height: 2,
      width: '95%',
      backgroundColor: '#F18000',
      marginTop: 5,
      marginLeft: 10,
    },

    busca:{
      marginTop: 20,
    },

    textoBusca:{
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 20,
    },

    caixaBusca:{
      marginTop: 10,
      height: 40,
      margin: 15,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#F18000',
    },

    cards:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
    },

    card:{
      width: 90,
      height: 70,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#C4C4C4',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowOffset: {width: -2, height: 4},
      shadowRadius: 10,

    },

});
