import { View, StyleSheet, Text, Image ,TouchableOpacity, FlatList} from "react-native";
import React from 'react';
import usuarios from "../mock/usuarios";

const listaUsuario = ({navigation}) => {
    const handleUsuarioPress = ({item}) => {
        navigation.navigate('informacoes', {item})
    }
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={()=>handleUsuarioPress(item)}>
            <Image style = {styles.img} source={item.foto} />           
            <View>
                <Text>Id:{item.id}</Text>
                <Text>Nome: {item.nome}</Text>
            </View>
        </TouchableOpacity>
    )
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text>Usuarios</Text>
            </View>
            <FlatList 
                data={usuarios}
                renderItem={renderItem}
                style={styles.list}
            />
        </View>
    )    
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection:  'column'
    },
    text: {
        fontFamily: "Arial",
        fontSize: 25,
        color: '#000'
    },
    item: {
        color: '#000',
        fontSize: 30
    },
    img: {
        width: 100,
        height: 100
    }
})

export default listaUsuario;