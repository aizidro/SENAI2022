import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
      />
      <Switch
        value={habilitado}
        onValueChange={habilitar}
      />
      <Image
  source={{
    
  }}
      />

      {/* {

        (habilitado)
          ?
          <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/702/702814.png"
        }}
        style={styles.lampada}
      />
      :
      <Image
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/702/702797.png"
      }}
      style={styles.lampada}
    />
  } */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '52px',
    height: '68px'
  },
  lampada: {
    width:'68px',
    height:'68px'
  }
});
