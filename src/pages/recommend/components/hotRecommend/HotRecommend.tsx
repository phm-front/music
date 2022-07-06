import React, { memo } from "react";
import { useMemo } from "react";

import SectionTopBar from "@/pages/recommend/common/sectionTopBar/SectionTopBar";
import PlayListModule from '@/pages/recommend/common/playListModule/PlayListModule';
import { getHotRecommendRq } from '@/api/discover/recommend';
import { useEffect } from "react";
import { useState } from "react";

export default memo(function HotRecommend() {
  const [recommendList, setRecommendList] = useState([])

  const navList = useMemo(() => [
    { name: "华语", url: "/discover/playlist?cat=华语" },
    { name: "流行", url: "/discover/playlist?cat=流行" },
    { name: "摇滚", url: "/discover/playlist?cat=摇滚" },
    { name: "民谣", url: "/discover/playlist?cat=民谣" },
    { name: "电子", url: "/discover/playlist?cat=电子" },
  ], []);

  useEffect(() => {
    getHotRecommendRq({ limit: 8 }).then(res => {
      if (res.code === 200) {
        setRecommendList(res.result)
      }
    })
  }, [])

  return (
    <>
      <SectionTopBar title="热门推荐" moreUrl="/discover/playlist" navList={navList} />
      <div className="flex flex-wrap justify-between">
        {
          recommendList.map(item => <PlayListModule cn="mt-[20px]" info={item} key={item.id} />)
        }
      </div>
    </>
  );
});
