import React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import Topo from './Componente/Topo';
import Detalhes from './Componente/Detalhes';
import Item from './Componente/Item';
import Texto from '../../components/Texto'
import item from './Componente/Item';


export default function index({ topo, detalhes, itens }) {


    // const renderItem = ({ item: { nome, imagem } }) => <View Key={nome}>
    //     <Image source={imagem} />
    //     <Text>{nome}</Text>
    // </View>



    return <>
    <View style={styles.fundo}>
       
        <FlatList
            data={itens.lista}
            renderItem={item}
            KeyExtractor={itens.lista.nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <Detalhes {...detalhes} />
                </>

            }}

        />


    </View>
    </>
}
const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#ccc',
    }
});

