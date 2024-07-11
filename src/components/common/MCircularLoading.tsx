import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import ThemeContext from '../../context/Theme';
import MText from './MText';

interface MCircularLoadingProps{
    size: "sm" | "med" | "lg",
    style?: any
}



export default function MCircularLoading(props : MCircularLoadingProps){
    const rotation = useSharedValue<number>(0);
    const theme = useContext(ThemeContext);

    const size = 
        props.size == "sm"? theme.text.sm * 8: 
        props.size == "med"? theme.text.med * 8:
        props.size == "lg"? theme.text.lg * 8: 
        undefined;
    if(size == undefined) throw new Error("Invalid size for MCircularLoading component.");
    console.log(size)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          },
          box: {
            width: size,
            height: size,
            borderTopColor: theme.colors.primary,
            borderBottomColor: `rgba(0,0,0,0.1)`,
            borderRightColor: `rgba(0,0,0,0.1)`,
            borderLeftColor: `rgba(0,0,0,0.1)`,
            borderWidth: 10,
            borderRadius: size/2,

            
          },
    });
    
    React.useEffect(() => {
        rotation.value = withRepeat(
        withTiming(1, { 
            duration: 2000,
            easing: Easing.linear
        }),
        -1
      );
    }, []);

    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ rotateZ: `${rotation.value * 360}deg` }],
    }));
  



  
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
        <MText text="Loading..." style={{color: theme.colors.primary, paddingTop: 8}}/>
      </View>
    )
}
