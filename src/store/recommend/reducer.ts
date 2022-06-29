import { RecommendState } from './types'

const initialRecommendState: RecommendState = {
  banners: []
}

interface Action {
  type: string
  [key: string]: any
}

function reducer(state = initialRecommendState, action: Action) {
  switch (action.type) {
    case 'SET_BANNERS':
      return { ...state, banners: action.value }
    default:
      return state
  }
}

export default reducer
