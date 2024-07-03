import { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { GoBack } from '../../components/goBack'
import { api } from '../../lib/api'
import { API_ROUTES } from '../../constants/apiRoutes'
import { Button } from '../../components/button'
import { useApi } from '../../hooks/useApi'

type FindIntruderGame = {
  gameId: string
  playersNames: string[]
}

export function FindIntruder() {
  const [game, setGame] = useState<FindIntruderGame | null>(null)

  const { get, post, isLoading, error } = useApi()

  const createNewGame = useCallback(async () => {
    const { data } = await get<FindIntruderGame>(API_ROUTES.NEW_FIND_INTRUDER)
    setGame(data)
  }, [get])

  async function play(selectedPlayer: string) {
    const { data } = await post(API_ROUTES.PLAY_FIND_INTRUDER, {
      gameId: game.gameId,
      answer: selectedPlayer,
    })

    if (data === 'Correct answer') {
      createNewGame()
    }
  }

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
          return (
            <Button onPress={() => play(p)} key={p}>
              {p}
            </Button>
          )
        })}
      </View>
    </View>
  )
}
