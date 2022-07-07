import React, { memo } from "react";
import { RecommendWrapper } from "./style";
import TopBanners from './components/topBanner/TopBanners';
import HotRecommend from './components/hotRecommend/HotRecommend';
import NewAlbum from './components/newAlbum/NewAlbum';
import Leaderboard from './components/leaderboard/Leaderboard';

export default memo(() => {
  return (
    <RecommendWrapper>
      <TopBanners />
      <div className="flex justify-center bg-[#f5f5f5]">
        <div className="w-[980px] shrink-0 bg-[#fff] border-[#d3d3d3] border-[1px] border-solid flex">
          <div className="flex-1 px-[20px] pt-[20px] pb-[40px]">
            {/* 热门推荐 */}
            <HotRecommend />
            {/* 新碟上架 */}
            <NewAlbum />
            {/* 榜单 */}
            <Leaderboard />
          </div>
          <div className="right-section w-[248px]"></div>
        </div>
      </div>
    </RecommendWrapper>
  );
});
