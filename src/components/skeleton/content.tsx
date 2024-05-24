import { View } from 'react-native'

export function Content() {
  return (
    <View className="p-4">
      <View className="bg-gray-200 h-4 w-3/4 rounded-md mb-4" />
      <View className="bg-gray-200 h-4 w-1/2 rounded-md mb-4" />
      <View className="bg-gray-200 h-4 w-full rounded-md mb-4" />
      <View className="bg-gray-200 h-4 w-5/6 rounded-md mb-4" />
      <View className="bg-gray-200 h-4 w-2/3 rounded-md mb-4" />
    </View>
  )
}
