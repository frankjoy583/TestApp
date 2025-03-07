import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect with Spiral</Text>
      <Text style={styles.subtitle}>Connect with God on a daily basis and earn points.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Screen1;