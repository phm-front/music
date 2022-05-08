import { combineReducers } from 'redux'
import { reducer as mainReducer } from '@/store/main'

const reducer = combineReducers({
  mainStore: mainReducer
})

export default reducer
