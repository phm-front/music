import React, { memo } from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { ReduxState } from "@/store/types";
import { getBanners } from "@/store/recommend/actionCreators";
import { TopBannerWrapper } from './style';

import { Carousel } from "antd";
import { useState } from "react";
import { useCallback } from "react";

export default memo(function TopBanners() {
  const { banners } = useSelector((state: ReduxState) => ({
    banners: state.recommendStore.banners
  }), shallowEqual) // shallowEqual 浅层比较 性能优化
  const dispatch = useDispatch()

  const [curBg, setCurBg] = useState('')

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  // banner切换
  const bannerChange = useCallback((from, to) => {
    setCurBg(banners[to]?.imageUrl)
  }, [banners])
  return (
    <TopBannerWrapper bg={ curBg + "?imageView&blur=40x20" } className="h-[285px] flex justify-center">
      <div className="w-[980px] flex">
        <Carousel className="w-[730px] h-[100%]" beforeChange={bannerChange} autoplay>
          {
            banners.map(item => {
              return (
                <img height="285" src={item.imageUrl} key={item.encodeId} alt="banner" />
              )
            })
          }
        </Carousel>
        <div className="download"></div>
      </div>
    </TopBannerWrapper>
  )
})
