import { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { GoBack } from '../../components/goBack'
import { api } from '../../lib/api'
import { API_ROUTES } from '../../constants/apiRoutes'
import { Button } from '../../components/button'

type FindIntruderGame = {
  gameId: string
  playersNames: string[]
}

export function FindIntruder() {
  const [game, setGame] = useState<FindIntruderGame | null>(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const createNewGame = useCallback(() => {
    api
      .get(API_ROUTES.NEW_FIND_INTRUDER)
      .then((res) => {
        const { data } = res
        console.log(data)
        setGame(data)
      })
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    createNewGame()
  }, [createNewGame])

  return (
    <View className="flex-1 justify-center items-center px-12">
      <GoBack />
      <Text className="text-zinc-700 text-lg mb-3">
        Find what player is the intruder
      </Text>
      <View className="gap-2">
        {game?.playersNames.map((p) => {
          return <Button key={p}>{p}</Button>
        })}
      </View>
    </View>
  )
}
