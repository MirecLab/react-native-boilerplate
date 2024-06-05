import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/home/HomeScreen';

interface HomeProps{

}

const ProfileStack = createStackNavigator()

export default function Home(props : HomeProps){

    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Home" component={HomeScreen} />
        </ProfileStack.Navigator>
    )
}