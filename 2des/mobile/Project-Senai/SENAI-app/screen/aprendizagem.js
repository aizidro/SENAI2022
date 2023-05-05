import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import  CursoEad from '../mock/aprendizagem'

export default function ead({ navigation}) {
    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={CursoEad}
                style={styles.ead}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={()=>{abrirDetalhes(item)}}>
                    <Text style={styles.curso}>{item.area}</Text>
                    <Text style={styles.titulo}>{item.curso}</Text>
                </TouchableOpacity>}
            />
        </View>);

}

const styles = StyleSheet.create({
    container: {
        textAlign:'center',
        
    },
    
    curso: {
        fontSize:'20px'
    },
    area: {
        marginTop:'20px',
        textAlign:'center'
    }
})