import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MHorizontalProps{
    children: React.JSX.Element,
    style?: any
}

export default function MHorizontal(props : MHorizontalProps){

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
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