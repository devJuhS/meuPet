import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, Link } from 'expo-router';
import { getUser } from '@/src/api';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

return (

<View style={styles.container}>
  {/* Logo */}
    <Image source={require('@/assets/images/icon.png')} style={styles.logo} />

  {/* Login Form */}
    <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#8A8A8A"
          value={email}
          onChangeText={setEmail}
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

        {/* Esqueceu a Senha */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* Botão Entrar */}
        <Link href="/(tabs)/HomeScreen">
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </Link>

        {/* Criar Conta */}
        <Link href="/SignUpScreen">
          <TouchableOpacity>
            <Text style={styles.createAccount}>Ainda não tem conta?</Text>
          </TouchableOpacity>
        </Link>

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
    width: 250,
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