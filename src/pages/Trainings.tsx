import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import TrainingsScreen from './screens/trainings/TrainingsScreen';

interface TrainingsProps{

}

const TrainingsStack = createStackNavigator()

export default function Trainings(props : TrainingsProps){

    return (
        <TrainingsStack.Navigator>
            <TrainingsStack.Screen name="Trainings" component={TrainingsScreen} />
        </TrainingsStack.Navigator>
    )
}