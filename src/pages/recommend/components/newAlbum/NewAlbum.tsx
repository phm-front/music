import React, { memo, useEffect, useState, useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";

import SectionTopBar from "@/pages/recommend/common/sectionTopBar/SectionTopBar";
import AlbumItem from "@/pages/recommend/common/albumItem/AlbumItem";
import { getAlbumListRq } from "@/api/discover/recommend";
import { NewAlbumWrapper } from './style';

export default memo(function NewAlbum() {
  const [albumList, setAlbumList] = useState([]);
  const carouselRef = useRef<CarouselRef>()

  useEffect(() => {
    // 获取新碟上架数据
    getAlbumListRq({ limit: 10 }).then((res) => {
      if (res.code === 200) {
        setAlbumList(res.albums);
      }
    });
  }, [setAlbumList]);

  const pageToByType = (type: number) => {
    carouselRef.current[type ? 'next' : 'prev']()
  }

  return (
    <NewAlbumWrapper>
      <SectionTopBar title="新碟上架" moreUrl="/discover/album" />
      <div className="w-[100%] h-[186px] my-[20px] border-[1px] border-solid border-[#d3d3d3]">
        <div className="relative w-[100%] h-[100%] flex items-center justify-center bg-[#f5f5f5] border-[1px] border-solid border-[#fff]">
          <Carousel className="w-[640px]" ref={carouselRef}>
            {[1, 2].map((num) => {
              return (
                <div key={num}>
                  <div className="wrap-11 flex flex-wrap justify-between">
                    {(num === 1 ? albumList.slice(0, 5) : albumList.slice(5)).map((iten) => {
                      return <AlbumItem albumInfo={iten} key={iten.id}></AlbumItem>;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
          <div onClick={() => pageToByType(0)} className="left-arrow w-[17px] h-[17px] bg-[url('@/assets/images/index.png')] absolute top-[50%] left-[2px] translate-y-[-50%] cursor-pointer"></div>
          <div onClick={() => pageToByType(1)} className="right-arrow w-[17px] h-[17px] bg-[url('@/assets/images/index.png')] absolute top-[50%] right-[2px] translate-y-[-50%] cursor-pointer"></div>
        </div>
      </div>
    </NewAlbumWrapper>
  );
});
