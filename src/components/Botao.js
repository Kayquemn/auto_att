import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";

import Texto from './Texto';

export default function Botao({ textoBotao }) {
    const [mensagem, setMensagem] = useState('');

    const handlePress = () => {
        setMensagem();
        // Mostrar a mensagem de "Adicionado"
        Alert.alert('MUITO BOM GEARHEAD', 'Adicionado a lista de desejos!');
    };

    return (
        <>
            <TouchableOpacity style={styles.botao} onPress={handlePress}>
                <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
            </TouchableOpacity>
            <Texto>{mensagem}</Texto>
        </>
    );
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: '#FF8F00',
        paddingVertical: 20,
        borderRadius: 15,
        width: "80%",
        marginLeft: 43,
    },
    botaoTexto: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
});