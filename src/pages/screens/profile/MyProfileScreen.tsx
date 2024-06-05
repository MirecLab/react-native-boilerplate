import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import UserContext from "../../../context/User";
import AccountHeader from "../../../components/account/AccountHeader";
import NotConnected from "../../../components/account/NotConnected";
import { NavigatorScreenParams, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface MyProfileProps {
  navigation: StackNavigationProp<ParamListBase>;
}

export default function MyProfile(props: MyProfileProps) {    
  const user = useContext(UserContext)

  const styles = StyleSheet.create({
      settingsIcon: {
          alignSelf: "center",
          marginVertical: "auto",
      }
  });
    
  return (
    <View>
      {user.status ? (
        <AccountHeader navigation={props.navigation}/>          
      ) : (
        <NotConnected />
      )}
    </View>
  );
}
