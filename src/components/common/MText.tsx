import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import ThemeContext from '../../context/Theme';

interface MTextProps{
    text: string,
    style?: any
}

export default function MText(props : MTextProps){
    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        text : {
            color: theme.colors.text,
            fontSize: 20
        }
    });

    return (
        <Text style={[styles.text, props.style ]}>{props.text}</Text>
    )
}