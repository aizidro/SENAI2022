import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>SENAI</Text>
      <StatusBar style="auto" />
    <View style={styles.main}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    width: '100vw',
    height:'10vh',
    justifyContent:'center',
  },
  textHeader: {
    fontSize:'18px',
    color:'#fff',
    fontWeight:'bold',
    fontFamily:'basic-serif'
  }
});
