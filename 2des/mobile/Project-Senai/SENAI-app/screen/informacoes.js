import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function DetalhesScreen({ navigation, route }) {
    const cursos = route.params.dados
    return (
        <View style={styles.container}>
            
            <View style={styles.textos}>
                <Text style={styles.text}>area: {cursos.area} </Text>
                <Text style={styles.text}>curso: {cursos.curso}</Text>
                <Text style={styles.text}>cargaHoraria: {cursos.cargaHoraria}</Text>
                <Text style={styles.text}>unidade: {cursos.unidade}</Text>
                <Text style={styles.text}>telefone: {cursos.telefone}</Text>
                <Text style={styles.text}>email: {cursos.email}</Text>
                <Text style={styles.text}>modalidade: {cursos.modalidade}</Text>
                <Text style={styles.text}>valor: {cursos.valor}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 300,
    },
    textos:{
        width: '100%',
    },
    text:{
        fontSize: 16,
        margin: 5,
    }
});

