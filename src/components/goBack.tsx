import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'lucide-react-native'

export function GoBack() {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity
      className="absolute left-4 top-12"
      onPress={() => goBack()}
    >
      <ArrowLeft className="text-zinc-400 " size={40} />
    </TouchableOpacity>
  )
}
