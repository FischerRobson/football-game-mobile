import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../app/screens'
import { GameModes } from '../../app/screens/gameModes'
import { GuessTeam } from '../../app/screens/guessTeam'
import { SCREENS } from '../../constants/screens'
import { FindIntruder } from '../../app/screens/findIntruder'

export function MainNavigationStack() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.GAME_MODES}
          component={GameModes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.GUESS_TEAM}
          component={GuessTeam}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.FIND_INTRUDER}
          component={FindIntruder}
          options={{ headerShown: false }}
        />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
