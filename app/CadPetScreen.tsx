// AddPetScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createPets } from '@/src/api';

export default function AddPetScreen() {
  const navigation = useNavigation();
  const [pet, setPet] = useState({
    name: '',
    color: '',
    species: '',
    breed: '',
    gender: '',
    birthDate: '',
    weight: '',
  });

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleSave = () => {
    // Salve o novo pet (você pode enviar para o backend ou atualizar o estado do HomeScreen).
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Pet</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={pet.name}
        onChangeText={(text) => setPet({ ...pet, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Cor"
        value={pet.color}
        onChangeText={(text) => setPet({ ...pet, color: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Espécie"
        value={pet.species}
        onChangeText={(text) => setPet({ ...pet, species: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Raça"
        value={pet.breed}
        onChangeText={(text) => setPet({ ...pet, breed: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={pet.gender}
        onChangeText={(text) => setPet({ ...pet, gender: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={pet.birthDate}
        onChangeText={(text) => setPet({ ...pet, birthDate: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={pet.weight}
        onChangeText={(text) => setPet({ ...pet, weight: text })}
      />
      <Button title="Cadastrar" onPress={handleSave} color="orange" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
