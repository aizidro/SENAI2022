import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

export default function Home() {
    return (
        <View style={styles.Container}>
            <Image source={require("../../assets/background.png")} style={styles.img} />
            <View style={styles.conteudo}>
                <Text style={styles.textPrincipal}>Quizz Da História</Text>  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100vw',
        height: '100vh'
    },
    Container: {
        display: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    conteudo: {
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
    },
    textPrincipal:{
        fontSize:'30px'
    }
})