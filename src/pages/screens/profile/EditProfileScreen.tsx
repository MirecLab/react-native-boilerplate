import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import MText from '../../../components/common/MText';
import { FIREBASE_APP, FIREBASE_AUTH } from '../../../config/firebase/FirebaseConfig';
import MButton from '../../../components/common/MButton';
import { updateProfile } from 'firebase/auth';
import MTextInput from '../../../components/common/MTextInput';

interface EditProfileProps{

}

export default function EditProfile(props : EditProfileProps){
    const user = FIREBASE_AUTH.currentUser
    const [formData, setFormData] = useState({displayName: ""});

    const updateUser = () =>{
        updateProfile(user, formData)
    }

    
    return (
        <View>
            <MTextInput baseContent={user.displayName} onChangeText={(text : string)=>{
                const data = {...formData, displayName: text}
                setFormData(data)
                }} />
            <MText text={user.email} />
            <MButton text='Save' style={{}} onPress={async ()=> await updateUser()}/>

        </View>
    )
}