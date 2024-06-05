import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MText from "../common/MText";
import Ionicons from "@expo/vector-icons/Ionicons";
import ThemeContext from "../../context/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FIREBASE_AUTH } from "../../config/firebase/FirebaseConfig";
import UserContext from "../../context/User";
import Logger from "../../config/logger/logger";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

interface AccountHeaderProps {
    navigation?: StackNavigationProp<ParamListBase>;
}

export default function AccountHeader(props: AccountHeaderProps) {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext)
  const styles = StyleSheet.create({
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "center",
      width: "90%",
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    container: {
      backgroundColor: theme.colors.primary,
      padding: 10,
      alignSelf: "center",
      display: "flex",
      flexDirection: "row",
      borderRadius: 10,
    },
    ProfileIcon: {
      alignSelf: "center",
      marginLeft: 20,
    },
    Name: {
      color: theme.colors.textOnPrimary,
    },
    Greetings: {
      display: "flex",
      flexDirection: "column",
    },
  });
  
  const Logout = async () => {
    try{
      GoogleSignin.signOut()
      await FIREBASE_AUTH.signOut()
      user.setConnectionStatus(false)
      Logger.log("Logged out")
    }catch(e : any) {
        alert(e.message)
    }
  }

  const EditProfile = () =>{
    print()
    props.navigation?.navigate("EditProfile")
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        <View style={styles.Greetings}>
          <MText text="Welcome back !" style={styles.Name}></MText>
          <MText text="Username" style={styles.Name}></MText>
        </View>
        <TouchableOpacity onPress={EditProfile}>
          <Ionicons
            name={"person-circle-sharp"}
            size={64}
            color={theme.colors.inversed}
            style={styles.ProfileIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={Logout}>
            <Ionicons
              name="log-out-sharp"
              size={48}
              color={theme.colors.inversed}
            />
          </TouchableOpacity>
    </View>
  );
}
