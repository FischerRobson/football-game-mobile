import { StatusBar } from 'expo-status-bar'
import { MainNavigationStack } from './src/components/navigation/mainNavigationStack'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="bg-zinc-400" />
      <MainNavigationStack />
    </>
  )
}
