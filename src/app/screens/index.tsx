import React from 'react'
import { Image, Text, View } from 'react-native'
import { Button } from '../../components/button'
import { useNavigation } from '@react-navigation/native'

export function HomeScreen() {
  const { navigate } = useNavigation()

  return (
    <View className="flex-1 justify-center items-center px-12">
      <Image
        source={require('../../assets/images/logo.png')}
        alt="logo"
        className="w-40 h-40"
      />
      <View className="flex flex-row gap-1 justify-center items-center">
        <Text className="text-zinc-700 text-2xl">Welcome to</Text>
        <Text className="text-zinc-950 font-bold text-2xl">Football Game</Text>
      </View>
      <View className="flex flex-row justify-center items-center">
        <Text className="text-zinc-500 text-sm">
          Test your knowledge in football based games
        </Text>
      </View>

      <Button styles="mt-4" onPress={() => navigate('GameModes')}>
        Play
      </Button>
    </View>
  )
}
