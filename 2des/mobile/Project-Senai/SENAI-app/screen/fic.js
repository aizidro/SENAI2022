import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import CursoFic from '../mock/fic'
const dimensions = Dimensions.get('screen')
export default function fic({ navigation }) {
    const abrirDetalhes = (dados) => {
        navigation.navigate('Detalhes', { dados });
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={CursoFic}
                style={styles.fic}
                renderItem={({ item }) =>

                    <TouchableOpacity style={styles.item} onPress={()=>{abrirDetalhes(item)}}>
                        <Text style={styles.titulo}>{item.area}</Text>
                        <View style={styles.card}>
                        <Text style={styles.txt}>{item.curso}</Text>
                        </View>
                        
                    </TouchableOpacity>}
            />
        </View>);

}

const styles = StyleSheet.create({
    container: {
      textAlign:'center'
    },
    card:{
        
    },
    titulo: {
        fontSize:'20px',
        fontWeight:'bold'
    },
    item: {
        
    }
})