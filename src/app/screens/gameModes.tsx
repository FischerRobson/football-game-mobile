import { View, Text } from 'react-native'
import { Button } from '../../components/button'
import { useNavigation } from '@react-navigation/native'
import { GoBack } from '../../components/goBack'

export function GameModes() {
  const { navigate } = useNavigation()

  return (
    <View className="flex-1 justify-center items-center px-12">
      <GoBack />
      <View className="gap-2">
        <Text className="text-zinc-950 font-bold text-2xl">
          Select Game Mode
        </Text>
        <Button onPress={() => navigate('GuessTeam')}>Guess Team</Button>
        <Button>Find Intruder</Button>
      </View>
    </View>
  )
}
