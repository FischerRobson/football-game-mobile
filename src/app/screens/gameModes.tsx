import { View, Text } from 'react-native'
import { Button } from '../../components/button'
import { useNavigation } from '@react-navigation/native'
import { GoBack } from '../../components/goBack'
import { SCREENS } from '../../constants/screens'

export function GameModes() {
  const { navigate } = useNavigation()

  return (
    <View className="flex-1 justify-center items-center px-12">
      <GoBack />
      <View className="gap-2">
        <Text className="text-zinc-950 font-bold text-2xl">
          Select Game Mode
        </Text>
        <Button onPress={() => navigate(SCREENS.GUESS_TEAM)}>Guess Team</Button>
        <Button onPress={() => navigate(SCREENS.FIND_INTRUDER)}>
          Find Intruder
        </Button>
      </View>
    </View>
  )
}
