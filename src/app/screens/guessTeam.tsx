import { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import { api } from '../../lib/api'
import { GoBack } from '../../components/goBack'
import { Button } from '../../components/button'
import { Spinner } from '../../components/spinner'

interface GuessTeamGame {
  id: string
  playersNames: string[]
}

export function GuessTeam() {
  const [game, setGame] = useState<GuessTeamGame | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [teamName, setTeamName] = useState('')

  function createNewGame() {
    setTeamName('')
    setIsLoading(true)
    api
      .get('/games/new/guess-team')
      .then((res) => {
        setGame(res.data)
      })
      .catch((e) => {
        console.error(e)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    createNewGame()
  }, [])

  return (
    <View className="flex-1 justify-center items-center px-12">
      <GoBack />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Text className="text-zinc-700 text-lg">
            Guess which team these two players have played:
          </Text>
          {game && (
            <View className="w-full px-2 items-center justify-center">
              <View className="flex-row gap-4 mt-2 items-center justify-center">
                <Text className="text-lg font-semibold">
                  {game.playersNames[0]}
                </Text>
                <Text className="text-lg font-semibold">
                  {game.playersNames[1]}
                </Text>
              </View>

              <View className="mt-5 w-full justify-center">
                <Text className="text-center">Team name:</Text>
                <TextInput
                  value={teamName}
                  onChangeText={setTeamName}
                  className="bg-zinc-200 h-8 rounded-md text-center mt-1 font-semibold"
                />
              </View>

              <View className="flex-row mt-4">
                <Button
                  variant="secondary"
                  styles="w-40 mr-1"
                  onPress={() => createNewGame()}
                >
                  Skip
                </Button>
                <Button styles="w-40 ml-1">Submit</Button>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  )
}
