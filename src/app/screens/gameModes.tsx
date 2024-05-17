import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from '../../components/button'
import { ArrowLeft } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'

export function GameModes() {
  const { goBack } = useNavigation()

  return (
    <View className="flex-1 justify-center items-center px-12">
      <TouchableOpacity
        className="absolute left-4 top-12"
        onPress={() => goBack()}
      >
        <ArrowLeft className="text-zinc-400 " size={40} />
      </TouchableOpacity>
      <View className="gap-2">
        <Text className="text-zinc-950 font-bold text-2xl">
          Select Game Mode
        </Text>
        <Button>Guess Team</Button>
        <Button>Find Intruder</Button>
      </View>
    </View>
  )
}
