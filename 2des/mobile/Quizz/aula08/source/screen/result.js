import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { useState } from "react";

export default function Result({ navigation, route }) {
    const acertos = route.params.acertos
    const erros = route.params.erros

    if(acertos >=4){
        alert(`voce acertou ${acertos} voce foi aprovado`)
    }else{
        alert(`voce errou ${erros} voce foi reprovado`)
    }

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/background.png")} style={styles.img} />
            <View style={styles.acertos}>
                <Text style={styles.txt}>ACERTO = {acertos}</Text>
                <Text style={styles.txt}>ERRO = {erros}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        height: '100%',

    },
    txt: {
        color: "#fff",
        fontSize: 30,
    },
    acertos:{
        position:'absolute'
    },
    img: {
        width: '100vw',
        height: '100vh'
    }


})