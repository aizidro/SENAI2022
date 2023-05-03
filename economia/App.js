import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = new useState(0);
  const [juros, setJuros] = new useState(0);
  const [Nparcelas, setNparcelas] = new useState(0);
  const [montante, setMontante] = new useState(0);
  const [vparcela, setVparcela] = new useState(0);

  const calculoMontante = () => {
      let cMontante = (valor * ((1 + (juros / 100)) ** Nparcelas)).toFixed(2)
      setMontante(cMontante);
      let parcelaSimples = (cMontante / Nparcelas);
      setVparcela(parcelaSimples);
  } 
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Viabilidade Econômica</Text>

      <View>
        <Text style={styles.texto}>Valor Necessario:</Text>
        <TextInput style={styles.input} onChangeText={(val) => { setValor(val); }} ></TextInput>
      </View>

      <View>
        <Text style={styles.texto}>Taxa de Juros a.m.</Text>
        <TextInput style={styles.input} onChangeText={(val) => { setJuros(val); }}></TextInput>
      </View>

      <View>
        <Text style={styles.texto}>N. de Parcelas</Text>
        <TextInput style={styles.input} onChangeText={(val) => { setNparcelas(val); }}></TextInput>
      </View>

      <TouchableOpacity onPress={calculoMontante} style={styles.button}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>Montante: {montante}</Text>
      <Text style={styles.texto}>Valor da parcela: {vparcela}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2525',
    alignItems: 'center',
    justifyContent: 'center',
    gap:'2rem',
  },
  texto: {
    fontSize:'20px',
    fontWeight:'bold',
    color:'#333',
  },
  titulo: {
    fontSize:'35px',
    fontFamily:'alexandria',
    fontWeight:'bold',
  },
  input: {
    borderBottomWidth: '1px',
    borderBottomColor: '#333',
    backgroundColor: '#e5e5e5',
    padding: '5px',
    borderRadius:'7px',
    border:'none',
  },
  button: {
        
  }
});