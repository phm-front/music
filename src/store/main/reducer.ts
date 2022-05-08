import { MainState } from './types'

const initialMainState: MainState = {
  count: 0
}

interface Action {
  type: string
  [key: string]: any
}

function reducer(state = initialMainState, action: Action) {
  switch (action.type) {
    case 'ADD_ACTION':
      return { ...state, count: state.count + action.num }
    default:
      return state
  }
}

export default reducer
