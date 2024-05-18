import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../app/screens'
import { GameModes } from '../../app/screens/gameModes'
import { GuessTeam } from '../../app/screens/guessTeam'

export function MainNavigationStack() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GameModes"
          component={GameModes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuessTeam"
          component={GuessTeam}
          options={{ headerShown: false }}
        />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
