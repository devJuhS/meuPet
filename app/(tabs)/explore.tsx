import Ionicons from '@expo/vector-icons/Ionicons';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from 'react-native';


export default function BuscaScreen() {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Busca</Text>
      </View>

      <View style={styles.linha}></View>

      <View style={styles.busca}>
      <Text style={styles.questionText}>O que o seu pet precisa?</Text>
        <TextInput 
        style={styles.caixaBusca}
        placeholder='Busque aqui...'
        placeholderTextColor="#8A8A8A"/>
      </View>

      <View>
        <Text style={styles.text1}>Termos mais buscados:</Text>
        <Text style={styles.text2}>Ração golden</Text>
        <Text style={styles.text2}>Tapete Higiênico</Text>
        <Text style={styles.text2}>Sachê</Text>
      </View>

      <View style={styles.itens}>
        <Ionicons style={styles.bag} name="bag-handle-outline" size={30} color="black" />
        <Text style={styles.textItens}>Items:</Text>
      </View>

      <View style={styles.cards}>
        <TouchableOpacity style={styles.card}>
          <Image source={require('@/assets/images/golden1.png')}/>
          <Text style={styles.textcard}>Ração Golden Special para Gatos Adultos Sabor Frango e Carne</Text>
          <Text style={styles.preco}>149,90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('@/assets/images/golden2.png')}/>
          <Text style={styles.textcard}>Ração Golden Special para Cães Adultos Sabor Frango e Carne</Text>
          <Text style={styles.preco}>149,90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('@/assets/images/golden3.png')}/>
          <Text style={styles.textcard}>Ração Golden para Gatos Castrados Sabor Frango</Text>
          <Text style={styles.preco}>153,49</Text>
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

    textHeader:{
      marginLeft: 20,
      marginTop: 5,
      fontSize: 25,
      fontWeight: 'bold',
    },

    linha:{
      height: 2,
      width: '100%',
      backgroundColor: '#F18000',
      marginTop: 5,
    },

    questionText:{
      fontSize: 16,
      marginLeft: 20,
    },

    busca:{
      marginTop: 20,
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

    text1:{
      fontSize: 20,
      fontWeight:'bold',
      margin: 15,
    },

    text2:{
      fontSize: 17,
      color: '#C4C4C4',
      marginLeft: 30,
      marginBottom: 10,
    },

    itens:{
      flexDirection: 'row',
    },

    bag:{
      marginLeft: 15,
      marginTop: 15,
    },

    textItens:{
      marginLeft: 10,
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
    },

    cards:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
    },

    card:{
      width: 110,
      height: 230,
      paddingTop: 15,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#f18000',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowOffset: {width: -2, height: 4},
      shadowRadius: 10,
    },

    textcard:{
      marginHorizontal: 10,
    },

    preco:{
      fontWeight: 'bold',
      verticalAlign: 'bottom',
    },

});
