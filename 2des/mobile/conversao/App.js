import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [comprimento, setComprimento] = new useState(0);
  const [corrente, setCorrente] = new useState(0);
  const [resultado, setResultado] = new useState(0);
  const [resultado127, setResultado127] = new useState(0);
  const calcularBitola = () => {
    let b1 = (1.72 * (comprimento * corrente)) / 510.4
    setResultado(b1)
    let b2 = (2 * (comprimento * corrente)) / 294.64
    setResultado127(b2)
  }
  return (
    <View style={styles.container}>
      <Text>Digite  o valor do Comprimento(L) do Cabo</Text>
      <TextInput style={styles.input} onChangeText={(val) => { setComprimento(val); console.log(comprimento) }} />
      <Text>Digite o valor da corrente(I)</Text>
      <TextInput style={styles.input} onChangeText={(val) => { setCorrente(val); console.log(corrente) }} />
      <Button title="Result" onPress={() => calcularBitola()} />
      <Text style={styles.result}> O resultado em 220V é: {Math.floor(resultado)}mm</Text>
      <Text style={styles.result}> O resultado em 127V é: {Math.floor(resultado127)}mm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5426ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: '1px',
    borderBottomColor: '#333',
    backgroundColor: '#e5e5e5',
    padding: '5px',
  },
});
