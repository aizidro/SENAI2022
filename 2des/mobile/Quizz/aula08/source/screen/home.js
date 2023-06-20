import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

export default function Home({navigation}) {

function comecar(){
    navigation.navigate('Quiz')
}


    return (
        <View style={styles.Container}>
            <Image source={require("../../assets/background.png")} style={styles.img} />
            <View style={styles.conteudo}>
                <Text style={styles.textPrincipal}>Quizz</Text>
                <Image source={require("../../assets/Jesus.png")}style={styles.Jesus}></Image>
                <Text style={styles.textPrincipal}> Biblico</Text>
                <TouchableOpacity style={styles.editButton} onPress={comecar}>
                    <Text style={styles.Button}>Iniciar</Text>
                </TouchableOpacity>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    conteudo: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textPrincipal: {
        fontSize: '60px',
        fontWeight: 'bold',

    },
    Jesus:{
        width:200,
        height:200
    },
    editButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '150px',
        height: '40px',
        backgroundColor: 'rgba(237, 173, 82,0.7)',
        borderRadius: '10px',
    },
    Button: {
        textAlign: 'center',
        justifyContent: 'center'
    }
})