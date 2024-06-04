import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from '../../../components/Texto'

export default function item({ item: {nome,imagem} }) {
   
        return <View key={nome} style={styles.item}>
        <Image source={imagem} style={styles.imagem} />
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles= StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 5,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
    },
    nome: {
        fontSize: 20,
        lineHeight: 26,
        marginLeft: 11,
        fontWeight: "bold",
    
    },
    imagem: {
        width: 105,
        height: 80,
        borderRadius: 10,
    },
})