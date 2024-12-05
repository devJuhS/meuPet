import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image,  TouchableOpacity} from 'react-native';
import { Card, FAB } from 'react-native-paper';
import {useNavigation, Link} from 'expo-router';


export default function PetScreen(){
    const navigation = useNavigation();
    const [pets, setPets] = useState([
        { id: '1', name: 'Jorge', type: 'Cachorro', breed: 'Chihuahua', age: '2 anos', gender: 'Macho' },
        { id: '2', name: 'Oliver', type: 'Gato', breed: 'Bobtail', age: '5 anos', gender: 'Macho' },
        { id: '3', name: 'Luna', type: 'Cachorro', breed: 'Bombaim', age: '3 anos', gender: 'Fêmea' },
      ]);

      const renderItem = ({ item }) => (
        <Card style={styles.card}>
          <Card.Title title={item.name} subtitle={`${item.type} - ${item.breed}\n${item.gender} - ${item.age}`} />
        </Card>
      );

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);

    return(

        <View style={styles.container}>

            <Text style={styles.title}>Meus Pets</Text>

            <FlatList
            data={pets}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={styles.list}
            />

            <Link style={styles.botao}  href="/CadPetScreen">
                <FAB style={styles.fab} icon="plus"/>
            </Link>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,

    },

    list: { 
        flex: 1 
    },
    
    card: { 
        marginBottom: 10, 
        backgroundColor: '#FFA500' 
    },

    botao:{
        position: 'absolute',
        bottom: 20,
        right: 20,        
    },

    fab: { 
        backgroundColor: '#F18000', 
        borderRadius: 50,
    },
})