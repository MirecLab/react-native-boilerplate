import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FIREBASE_AUTH } from '../../config/firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import ThemeContext from '../../context/Theme';
import MTextInput from '../common/MTextInput';
import MButton from '../common/MButton';
import MText from '../common/MText';
import { APP_NAME } from '../../config/constants';
import UserContext from '../../context/User';

interface LoginProps{

}

export default function Login(props : LoginProps){
    const theme = useContext(ThemeContext)
    const userInfo = useContext(UserContext)
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Loading, setLoading] = useState(false);
    const AUTH = FIREBASE_AUTH;
    
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
        },
        buttonsContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        button: {
            fontSize: 14,
            width: "90%",
            backgroundColor: theme.colors.background,
            borderBottomColor: theme.colors.primary,
            borderBottomWidth: 1,
            padding: 10,
            borderRadius: 5,
        },
        loginButton: {
            width: "90%",
            backgroundColor: theme.colors.primary,
            color: theme.colors.textOnPrimary,
            fontSize: theme.text.med,
            padding: 8,
            borderRadius: 10,
        }
    })
    
    const login = async ()=>{
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(AUTH, Email, Password);
            alert("Succesfully logged in")
            userInfo.setConnectionStatus(true)
            userInfo.userData = FIREBASE_AUTH.currentUser
            //user can be found in FIREBASE_AUTH.currentUser
        }catch(e : any){
            alert(e.message)
        }finally{
            setLoading(false);
        }
    }

    const register = async ()=>{
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(AUTH, Email, Password);
            alert("Succesfully signed up")
        }catch(e : any){
           alert(e.message)
        }finally{
            setLoading(false);
        }
    }
    

      const header = `Login with ${APP_NAME}`

      return (
        <View style={styles.container}>
            <MText text={header} />
            <MTextInput placeholder="Email..." onChangeText={(text)=>{setEmail(text)}} style={styles.button}/>
            <MTextInput isSecure={true} onChangeText={(pwd)=>{setPassword(pwd)}} placeholder="Password..." style={styles.button}/>
            {
                Loading ? 
                <Text>Loading...</Text> 
                :
                <MButton text='Login' onPress={()=>{login()}} style={styles.loginButton}/>
                // <View style={styles.buttonsContainer} >
                //     {/* <MButton style={styles.button} text='Signup' onPress={()=>{register()}}/> */}
                // </View>
            }
        </View>
    )
}
