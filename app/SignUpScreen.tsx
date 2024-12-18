import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Use o useRouter do expo-router para navegação
import { createUser } from '@/src/api'; // Seu método de API, se necessário

export default function SignUpScreen() {
    const router = useRouter();  // Hook de navegação do expo-router
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [genero, setGenero] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const ButtonAlert = () =>
        Alert.alert('Conta Criada com Sucesso!', '', [
            {
                text: 'Ok',
                onPress: () => router.push('/PerfilScreen'), // Usando router.push() do expo-router
                style: 'default'
            },
        ]);

    useEffect(() => {
        // Nenhuma necessidade de setOptions com expo-router, já que ele lida com o cabeçalho automaticamente
    }, []);

return (

<View style={styles.container}>
  {/* Logo */}
    <Image source={require('@/assets/images/icon.png')} style={styles.logo} />

  {/* Login Form */}
    <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>



        {/* Nome Input */}
        <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            placeholderTextColor="#8A8A8A"
            value={nome}
            onChangeText={setNome}
        />

         {/* CPF Input */}
         <TextInput
            style={styles.input}
            placeholder="CPF"
            placeholderTextColor="#8A8A8A"
            value={cpf}
            onChangeText={setCpf}
        />


        {/* Email Input */}
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#8A8A8A"
            value={email}
            onChangeText={setEmail}
        />

        {/* Telefone Input */}
        <TextInput
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="#8A8A8A"
            value={tel}
            onChangeText={setTel}
        />


        {/* Gênero */}
        <TextInput
        style={styles.input}
        placeholder="Gênero"
        placeholderTextColor="#8A8A8A"
        value={genero}
        onChangeText={setGenero}
        />



        {/* Data de Nascimento */}
        <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="#8A8A8A"
        value={dtNasc}
        onChangeText={setDtNasc}
        />


        {/* Senha Input */}
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#8A8A8A"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!showPassword}
            />

            <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
                >
                <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
            </View>

            {/* Botão Cadastrar */}
            <TouchableOpacity style={styles.button} onPress={ButtonAlert}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            {/* Criar Conta */}
            <TouchableOpacity onPress={() => router.push('/PerfilScreen')}> {/* Navegar para Login */}
                    <Text style={styles.createAccount}>Já tenho uma Conta!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#4B006E',
    justifyContent: 'center',
    alignItems: 'center',
},
logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
},
formContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
},
input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: '#8A8A8A',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
},
passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
},
eyeButton: {
    position: 'absolute',
    right: 15,
    top: 11,
},
eyeIcon: {
    fontSize: 20,
    color: '#8A8A8A',
},
forgotPassword: {
    color: '#000',
    marginTop: 10,
    fontSize: 14,
},
button: {
    backgroundColor: '#FF8C00',
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
},
buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
},
createAccount: {
    color: '#000',
    marginTop: 20,
    fontSize: 14,
},
});