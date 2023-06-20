import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { useState } from "react";

export default function Result({ navigation, route }) {
    const acertos = route.params.acertos
    const erros = route.params.erros

    const resultado = ()=>{
        if(acertos >=4){
            return <Text style={styles.opcaoCorreta}>Aprovado</Text>
        }else{
            return <Text style={styles.opcaoIncorreta}>Reprovado</Text>
        }    
    }

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/background.png")} style={styles.img} />
            <View style={styles.acertos}>
                <Text style={styles.txt}>Acertos ({acertos})</Text>
                <Text style={styles.txt}>Erros ({erros})</Text>
                {resultado()}
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
        color:'#000',
        fontSize: 40,

    },
    acertos:{
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'
    },
    img: {
        width: '100vw',
        height: '100vh',
        zIndex:-1
    }, 
  
    resultado:{
        position:'absolute',
        fontSize:30,
    },
    opcaoCorreta:{
        color:'green',
        fontSize:30
        
    },
    opcaoIncorreta:{
        color:'red',
        fontSize:30
    }

})