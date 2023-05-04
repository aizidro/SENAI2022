import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import  CursoFic from '../mock/fic'

export default function ead({ navigation}) {
    
    return (
        <View style={styles.container}>
            <FlatList
                data={CursoFic}
                style={styles.fic}
                renderItem={({ item }) => <TouchableOpacity style={styles.item}>
                    <Text>{item.curso}</Text>
                    <Text>{item.area}</Text>
                </TouchableOpacity>}
            />
        </View>);

}

const styles = StyleSheet.create({
    container: {

    },
    fic: {

    },
    item: {

    }
})