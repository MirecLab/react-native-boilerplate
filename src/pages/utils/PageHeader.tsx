import React, { useContext } from 'react';
import ThemeSwitch from '../../components/ThemeSwitch';
import { Text, View } from 'react-native';
import ThemeContext from '../../context/Theme';
import Ionicons from '@expo/vector-icons/Ionicons';

interface PageHeaderProps{
    title : string,
    theme : string,
    setTheme : (theme : string)=>void
}

export default function PageHeader(props : PageHeaderProps){
    const theme = useContext(ThemeContext);
    const isDark = props.theme == "dark"

    return (
        <View style={{display:"flex", flexDirection:"row", alignItems:"center", width:"100%"}}>
            <Text style={{fontSize:24,color:theme.colors.text,fontWeight: "bold"}}>{ props.title }</Text>
            <View style={{marginLeft: "auto",display:"flex", flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="sunny-sharp" size={20} color={theme.colors.primary} />
                <ThemeSwitch setTheme={props.setTheme} theme={props.theme} />
                <Ionicons name="moon-sharp" size={20} color={theme.colors.primary} />
            </View>
        </View>
    )
}
