import { useCallback, useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import { api } from '../../lib/api'
import { GoBack } from '../../components/goBack'
import { Button } from '../../components/button'
import { Spinner } from '../../components/spinner'
import { API_ROUTES } from '../../constants/apiRoutes'
import { useApi } from '../../hooks/useApi'
import { Skeleton } from '../../components/skeleton'

interface GuessTeamGame {
  gameId: string
  playersNames: string[]
}

export function GuessTeam() {
  const [game, setGame] = useState<GuessTeamGame | null>(null)
  const [teamName, setTeamName] = useState('')
  const [currentScore, setCurrentScore] = useState(0)
  const [wrongAttempt, setWrongAttempt] = useState(false)

  const { get, post, isLoading } = useApi()

  const createNewGame = useCallback(async () => {
    setGame(null)
    setTeamName('')
    setWrongAttempt(false)

    const { data } = await get<GuessTeamGame>(API_ROUTES.NEW_GUESS_TEAM)
    setGame(data)
  }, [get])

  const skipGame = useCallback(() => {
    setCurrentScore(0)
    createNewGame()
  }, [createNewGame])

  async function sendResponse() {
    if (game === null || !teamName) return

    const { data } = await post<string>(API_ROUTES.PLAY_GUESS_TEAM, {
      gameId: game.gameId,
      answer: teamName,
    })

    if (data === 'Correct answer') {
      createNewGame()
      setCurrentScore((prev) => prev + 1)
    } else {
      setWrongAttempt(true)
    }
  }

  useEffect(() => {
    createNewGame()
  }, [createNewGame])

  return (
    <View className="flex-1 justify-center items-center px-12">
      <GoBack />
      <Text className="absolute left-50 top-40 text-xl">
        Score: {currentScore}
      </Text>
      <Text className="text-zinc-700 text-lg">
        Guess which team these two players have played:
      </Text>

      <View className="w-full px-2 items-center justify-center">
        <View className="flex-col mt-2 items-center justify-center">
          {isLoading && !game ? (
            <>
              <Skeleton.Paragraph />
              <Skeleton.Paragraph />
            </>
          ) : (
            <>
              <Text className="text-lg font-semibold">
                {game?.playersNames[0]}
              </Text>
              <Text className="text-lg font-semibold">
                {game?.playersNames[1]}
              </Text>
            </>
          )}
        </View>

        <View className="mt-5 w-full justify-center">
          <Text className="text-center">Team name:</Text>
          <TextInput
            value={teamName}
            onChangeText={setTeamName}
            className="bg-zinc-200 h-8 rounded-md text-center mt-1 font-semibold"
          />
          {wrongAttempt && (
            <Text className="mt-3 text-red-400">Wrong attempt</Text>
          )}
        </View>

        <View className="flex-row mt-4">
          <Button
            variant="secondary"
            styles="w-40 mr-1"
            onPress={() => skipGame()}
            disabled={isLoading}
          >
            Skip
          </Button>
          <Button
            styles="w-40 ml-1"
            onPress={() => sendResponse()}
            disabled={isLoading}
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  )
}
