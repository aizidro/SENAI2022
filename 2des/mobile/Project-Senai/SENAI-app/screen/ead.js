import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import  CursoEad from '../mock/ead'

export default function ead({ navigation}) {
    
    return (
        <View style={styles.container}>
            <FlatList
                data={CursoEad}
                style={styles.ead}
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
    ead: {

    },
    item: {

    }
})