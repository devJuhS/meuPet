import React from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PetShopScreen () {
  return (
    <ScrollView style={styles.container}>
      {/* logo principal */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem vindo!</Text>
        <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
      </View>

      {/* barra de pesquisa */}
      <Text style={styles.questionText}>O que o seu pet precisa?</Text>
      <TextInput style={styles.searchInput} placeholder="Busque aqui..."/>

      {/* categorias */}
      <View style={styles.categoryContainer}> 
        <TouchableOpacity style={styles.categoryButton}> 
          <Text style={styles.categoryText}>Cachorros</Text>
          <Image source={require('@/assets/images/ic1.png')} style={styles.categoryIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Gatos</Text>
          <Image source={require('@/assets/images/ic2.png')} style={styles.categoryIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Outros Pets</Text>
          <Image source={require('@/assets/images/ic3.png')} style={styles.categoryIcon}/>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={require('@/assets/images/b1.png')} style={styles.bannerImage} />
        <Image source={require('@/assets/images/b2.jpg')} style={styles.bannerImage} />
      </View>

      {/* Items Comprados*/}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Comprados</Text>
        <Text style={styles.sectionSubtitle}>Vistos recentemente</Text>
      </View>

      {/* Lista de produtos*/}
      <View style={styles.productContainer}>
        <View style={styles.productCard}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/81+5+4wTfYL._AC_UF1000,1000_QL80_.jpg' }} style={styles.productImage} />
          <Text style={styles.productName}>Ração Carne E Vegetais...</Text>
          <Text style={styles.productPrice}>R$ 151,00</Text>
        </View>
        <View style={styles.productCard}>
          <Image source={{ uri: 'https://a-static.mlcdn.com.br/450x450/pote-de-racao-15kg-e-agua-2l-automatico-cachorro-e-gato-rosa-plasutil/flixmobile/14736-522/e303a7052008ea150be30e8892130f50.jpeg' }} style={styles.productImage} />
          <Text style={styles.productName}>Compartimento Pote para...</Text>
          <Text style={styles.productPrice}>R$ 111,34</Text>
        </View>
        <View style={styles.productCard}>
          <Image source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_855819-MLB50987113367_082022-O.webp' }} style={styles.productImage} />
          <Text style={styles.productName}>Coleira para Gatos com...</Text>
          <Text style={styles.productPrice}>R$ 31,00</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 24,
    marginTop: 40,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginLeft: 'auto',
  },
  questionText: {
    fontSize: 16,
    marginVertical: 8,
  },
  searchInput: {
    height: 40,
    borderColor: '#f18000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  categoryButton: {
    width: '28%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    elevation: 2,

    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 2, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 3,    // Raio da sombra
  },
  categoryText: {
    fontSize: 16,    
  },
  categoryIcon: {
    width: 40,
    height: 40,
  },


  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  bannerImage: {
    width: 300,
    height: 320,
    marginRight: 10,
    borderRadius: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '30%',
    backgroundColor: '#fff',
    borderColor: '#f18000',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 2,
    padding: 8,
    alignItems: 'center',
    
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFA500',
    marginTop: 4,
  },
});

