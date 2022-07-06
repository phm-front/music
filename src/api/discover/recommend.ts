import service from "@/service";
// 获取banner数据
export const getBannersRq = () => service.get({ url: "/banner" });
// 获取热门推荐数据
export const getHotRecommendRq = (params) => service.get({ url: "/personalized", params });
// 获取热门推荐数据
export const getAlbumListRq = (params) => service.get({ url: "/top/album", params });
