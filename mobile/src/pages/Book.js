import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';

import api from '../services/api';

export default function Book({ navigation }) {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

  async function handleSubmit() {
    console.log('id', id);
    const user_id = await AsyncStorage.getItem('user');

    console.log('user_id', user_id, 'spotId', id);
    const response = await api.post(
      `/spots/${id}/bookings`,
      {
        date,
      },
      {
        headers: { user_id },
      },
    );

    console.log(response);

    Alert.alert('Solicitação de reserva enviada.');
    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>DATA DE INTERESSE *</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Qual data você quer reservar"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}> Solicitar Reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={handleCancel}
      >
        <Text style={styles.buttonText} onPress={handleCancel}>
          {' '}
          Cancelar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 50,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  cancelButton: {
    backgroundColor: '#CCC',
    marginTop: 10,
  },
  button: {
    height: 42,
    backgroundColor: '#F05A5B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
