import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MText from '../common/MText';
import ThemeContext from '../../context/Theme';
import MButton from '../common/MButton';
import Login from './Login';
import { APP_NAME } from "../../config/constants";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import { FIREBASE_AUTH } from '../../config/firebase/FirebaseConfig';
import UserContext from '../../context/User';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

interface NotConnectedProps{

}

export default function NotConnected(props : NotConnectedProps){
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        header:{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            padding: 20,
            paddingTop: 60,
        },
        container:{
            backgroundColor: theme.colors.variant,   
            padding: 10,
            alignSelf: "center",
            borderRadius: 10,
            width: "90%",
        },
        separator:{
            width: "100%",
            borderBottomColor: theme.colors.primary,
            borderBottomWidth: 1,
            marginVertical: 15,
        },
        SignupText:{
            textAlign: "center",
            color: theme.colors.primary,
        },
        googleSign:{
            alignSelf: "center",
            width: "80%",
        }
    });

    const header = `Connect to track your fitness journey with ${APP_NAME}!`

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const res = await GoogleSignin.signIn();
          const credential = GoogleAuthProvider.credential(res.idToken);
          await signInWithCredential(FIREBASE_AUTH, credential);
          user.setConnectionStatus(true)
        } catch (error) {
          switch (error.code) {
            case statusCodes.SIGN_IN_CANCELLED:
              console.error("User Sign In is required");
              break;
            case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
              console.error("Google Play Services are needed");
              break;
          }
          console.log("Error", error.message);
        }
      };

    return (
        <View>
            <MText style={styles.header} text={header}/>
            <View style={styles.container}> 
                <Login/>
                <MText style={styles.SignupText} text='Or'/>
                <GoogleSigninButton style={styles.googleSign} onPress={signIn}/>
                <View style={styles.separator}/>
                <MText style={styles.SignupText} text="Don't have an account ?"/>
                <MText style={styles.SignupText} text="Signup with google"/>
                
            </View>
            
        </View>
        
    )
}