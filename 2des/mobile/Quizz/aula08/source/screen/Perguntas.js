import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import perguntas from '../../mocks/perguntas.json'
import { useState } from "react";

export default function Perguntas() {
    const [contador, setContador] = useState(0);
    const perguntaAtual = perguntas[contador];
  
    function mudarPergunta() {
      setContador(contador + 1);
    }
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/background.png")} style={styles.img} />
            <View style={styles.Quest}>
                <Text style={styles.h1}>Pergunta {contador + 1}</Text>
                <Text>{perguntas[contador].Perguntas}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        width: '100vw',
        height: '100vh'
    },
    img: {
        width: '100vw',
        height: '100vh'
    },
    h1: {
        fontSize: '30px',
    },
    Quest:{
        position: 'absolute',
        alignItems:'center',
    }
})