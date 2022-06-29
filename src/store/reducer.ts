import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '@/store/recommend'

const reducer = combineReducers({
  recommendStore: recommendReducer
})

export default reducer
