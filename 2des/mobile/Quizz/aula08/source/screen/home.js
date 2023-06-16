import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

export default function Home() {
    return (
        <View style={styles.Container}>
            <Image source={require("../../assets/background.png")} style={styles.img} />
            <View style={styles.conteudo}>
                <Text style={styles.textPrincipal}>Quizz Biblico</Text>
                <TouchableOpacity style={styles.editButton}>
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
        fontSize: '50px',
        fontWeight: 'bold',

    },
    editButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '150px',
        height: '40px',
        backgroundColor: '#AB3434',
        borderRadius: '10px',
    },
    Button: {
        textAlign: 'center',
        justifyContent: 'center'
    }
})