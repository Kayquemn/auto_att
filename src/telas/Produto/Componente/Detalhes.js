import React from 'react';
import {View, StyleSheet, Alert,} from 'react-native';

import Texto from '../../../components/Texto'
import Botao from '../../../components/Botao' 

export default function Detalhes({nome,detalhe,detalhe1,detalhe2,detalhe3,detalhe4,preco}) {
    return <View>
                <Texto style={styles.nome}>{nome}</Texto>
                <Texto style={styles.descricao}>{detalhe}</Texto>
                <Texto style={styles.descricao}>{detalhe1}</Texto>
                <Texto style={styles.descricao}>{detalhe2}</Texto>
                <Texto style={styles.descricao}>{detalhe3}</Texto>
                <Texto style={styles.descricao}>{detalhe4}</Texto>
                <Texto style={styles.price}>{preco}</Texto>
                <Botao textoBotao={"Adicionar na lista de desejos"}acaoBotao={()=>{Alert.alert("Em breve")}}/>
            </View>
}


const styles = StyleSheet.create({
    nome: {
        color: 'black',
        fontSize: 20,
    }, 
    descricao:{
        fontSize: 15,
        margin: 15,
    },
    price: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
        margin: 15,
    }

});