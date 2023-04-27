import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = new useState(0);
  const [altura, setAltura] = new useState(0);
  const [imc, setImc] = new useState(0);
  const [diagnostico, setDiagnostico] = new useState(0);
  const calcularImc = () => {
    let conta = (peso / (altura * altura))
    setImc(conta)
    if (conta < 18.5) setDiagnostico('Magreza')
    else if( conta < 24.9) setDiagnostico('Normal')
    else if(conta < 29.9) setDiagnostico('Excesso de Peso')
    else if(conta < 34.9) setDiagnostico('Obesidade Classe |')
    else if(conta < 39.9) setDiagnostico('Obesidade Classe ||')
    else setDiagnostico('Obesidade classe |||')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>IMC</Text>
      <View>
        <Text style={styles.texto}>Peso:</Text>
        <TextInput style={styles.input} onChangeText={(val) => { setPeso(val); }}></TextInput>
      </View>

      <View>
        <Text style={styles.texto}>Altura:</Text>
        <TextInput style={styles.input} onChangeText={(val) => { setAltura(val); }}></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={calcularImc}>
        <Text style={styles.botao}>calcular</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>imc: {(imc).toFixed(2)}</Text>
      <Text style={styles.texto}> diagnostico: {diagnostico}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2ef3',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  },
  input: {
    backgroundColor: '#e5e5e5',
    borderRadius: '7px',
    padding: '5px',
    lineHeight: '1',
  },
  button: {
    width: '100px',
    height: '30px',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: '5px',
  },
  texto: {
    fontSize:'20px',
    fontWeight:'bold',
    color:'#fff',
  },
  botao: {
    color:'#000',
    fontWeight:'bold',
    fontSize:'15px',
    textAlign:'center',
    alignItems:'center',
  
  },
});
