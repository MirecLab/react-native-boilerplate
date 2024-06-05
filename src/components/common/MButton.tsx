    import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ThemeContext from '../../context/Theme';

interface MButtonProps{
    text : string,
    onPress? : ()=>void,
    style: any
}



export default function MButton(props : MButtonProps){
    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        text : {
            color: props.style.color != undefined? props.style.color:theme.colors.text,
            fontSize: 20,
            textAlign: "center",
        }
    });

    return (
        <TouchableOpacity onPress={props.onPress?props.onPress:()=>{}} style={ props.style }>
            <Text style={[styles.text ]}>{props.text}</Text>
        </TouchableOpacity>
    )
}