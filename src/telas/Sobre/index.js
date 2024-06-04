
import React from "react";
import Texto from '../../components/Texto'
import Info from './componentes/textSob'

import { Image, ScrollView, StyleSheet, FlatList } from "react-native";

export default function sobre({info}){
 return<>
 <FlatList 
    ListHeaderComponent={() =>{
        return<>
        <Info {...info}/>
        </>
    }}
 />
 </>
}