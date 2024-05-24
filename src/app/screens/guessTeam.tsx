import { useCallback, useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import { api } from '../../lib/api'
import { GoBack } from '../../components/goBack'
import { Button } from '../../components/button'
import { Spinner } from '../../components/spinner'
import { API_ROUTES } from '../../constants/apiRoutes'

interface GuessTeamGame {
  gameId: string
  playersNames: string[]
}

export function GuessTeam() {
  const [game, setGame] = useState<GuessTeamGame | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [teamName, setTeamName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [currentScore, setCurrentScore] = useState(0)

  console.log('render')

  const createNewGame = useCallback(() => {
    setTeamName('')
    setIsLoading(true)

    api
      .get(API_ROUTES.NEW_GUESS_TEAM)
      .then((res) => {
        setGame(res.data)
        setError(null)
      })
      .catch((e) => {
        console.error(e)
        setError('Something went wrong, try again please')
      })
      .finally(() => setIsLoading(false))
  }, [])

  const skipGame = useCallback(() => {
    setCurrentScore(0)
    createNewGame()
  }, [createNewGame])

  async function sendResponse() {
    if (game === null || !teamName) return

    api
      .post(API_ROUTES.PLAY_GUESS_TEAM, {
        gameId: game.gameId,
        answer: teamName,
      })
      .then((resp) => {
        if (resp.data === 'Correct answer') {
          createNewGame()
          setCurrentScore((prev) => prev + 1)
        } else {
          setError('Wrong answer')
        }
      })
      .catch((err) => {
        console.error(err)
        setError('Something went wrong, try again please')
      })
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
      {game && (
        <View className="w-full px-2 items-center justify-center">
          <View className="flex-col gap-4 mt-2 items-center justify-center">
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <Text className="text-lg font-semibold">
                  {game.playersNames[0]}
                </Text>
                <Text className="text-lg font-semibold">
                  {game.playersNames[1]}
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
            <Text className="mt-3 text-red-400">{error}</Text>
          </View>

          <View className="flex-row mt-4">
            <Button
              variant="secondary"
              styles="w-40 mr-1"
              onPress={() => skipGame()}
            >
              Skip
            </Button>
            <Button styles="w-40 ml-1" onPress={() => sendResponse()}>
              Submit
            </Button>
          </View>
        </View>
      )}
    </View>
  )
}
