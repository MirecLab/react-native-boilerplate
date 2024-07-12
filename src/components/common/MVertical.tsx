import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';

interface MVerticalProps{
    children: React.JSX.Element,
    style?: any
}

export default function MVertical(props : MVerticalProps){

    const styles = StyleSheet.create({
        container: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
        },
    });

    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}