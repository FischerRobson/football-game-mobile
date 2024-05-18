import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import { LoaderCircle } from 'lucide-react-native'

export function Spinner() {
  const spinValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start()
  }, [spinValue])

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <Animated.View style={[{ transform: [{ rotate: spin }] }]}>
      <LoaderCircle className={'text-cyan-700 h-5 w-5'} size={48} />
    </Animated.View>
  )
}
