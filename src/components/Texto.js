import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}){
    //Determina a formatação padrão do meu componente
    let estilo = estilos.texto;

    //verifica se deve exibir em negrito
    if(style?.fontWeight=="Bold"){
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "SpaceG",
    },
    textoNegrito:{
        fontFamily: "SpaceGBold",
        fontWeight: "normal",
    }
})