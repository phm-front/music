import service from '@/service'

export const getBannersRq = () => service.get({ url: '/banner' })
