export const API_ROUTES = {
  NEW_GUESS_TEAM: '/games/new/guess-team',
  PLAY_GUESS_TEAM: '/games/play/guess-team',
  NEW_FIND_INTRUDER: '/games/new/find-intruder',
} as const

export type ApiRoutes = (typeof API_ROUTES)[keyof typeof API_ROUTES]
