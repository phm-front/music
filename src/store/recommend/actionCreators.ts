import { getBannersRq } from '@/api/discover/recommend'

export const getBanners = (): any => {
  return dispatch => {
    getBannersRq().then(res => {
      dispatch(setBannersAction(res.banners))
    })
  }
}

const setBannersAction = (banners) => ({
  type: 'SET_BANNERS',
  value: banners
})
