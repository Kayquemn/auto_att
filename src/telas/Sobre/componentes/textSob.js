import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Texto from '../../../components/Texto';
import Logo from './../../../../assets/Imagem_Logo.png';



export default function sobre({ Titulosobre, efeito, efeito1, efeito2 }) {

    return <>
        <View style={styles.geral}>
            <Image source={Logo} style={styles.imagem}resizeMode="contain"/>
            <Texto style={styles.Titulosobre}>{Titulosobre}</Texto>
            <Texto style={styles.efeito}>{efeito}</Texto>
            <Texto style={styles.efeito1}>{efeito1}</Texto>
            <Texto style={styles.efeito2}>{efeito2}</Texto>
        </View>
       
    </>
}

const styles = StyleSheet.create({
    geral: {
    
    }, 

    Titulosobre: {
        fontSize: 50,
        fontWeight: 'bold',
         top: 20,
         left: 50,
         color: '#FF8F00',
         
    },
    imagem: {
        width: 400,
        height: 400,
        alignSelf: "center",
        borderRadius: 100, 
        marginTop: 20,

    },
    efeito: {
        fontSize: 25,
    marginTop: 30, 
    marginLeft: 15, 
    marginRight: 15,
    textAlign: 'center', 
    },

    efeito1: {
        fontSize: 25,
    marginTop: 30, 
    marginLeft: 15, 
    marginRight: 15,
    textAlign: 'center',
    },

    efeito2: {
        fontSize: 25,
    marginTop: 30, 
    marginLeft: 15, 
    marginRight: 15,
    textAlign: 'center',
    }
   
});