import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyProfile from './screens/profile/MyProfileScreen';
import EditProfile from './screens/profile/EditProfileScreen';

interface ProfileProps {

}

const ProfileStack = createStackNavigator()


export default function Profile(props: ProfileProps) {

    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='MyProfile' component={MyProfile}/>
            <ProfileStack.Screen name='EditProfile' component={EditProfile}/>
        </ProfileStack.Navigator>

    )
}