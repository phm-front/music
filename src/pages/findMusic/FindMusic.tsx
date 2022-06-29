// import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { FindMusicWrapper } from './style';

const FindMusic = () => {
  const findMusicSubRoute = [
    { name: "推荐", route: "recommend" },
    { name: "排行榜", route: "toplist" },
    { name: "歌单", route: "playlist" },
    { name: "主播电台", route: "djradio" },
    { name: "歌手", route: "artist" },
    { name: "新碟上架", route: "album" },
  ];
  return (
    <FindMusicWrapper>
      <div className="h-[35px] bg-[rgb(176,36,33)] text-[12px] text-[#fff] pl-[404px] flex items-center">
        {findMusicSubRoute.map((item) => {
          return (
            <NavLink className="px-[17px]" to={item.route} key={item.name}>
              <div className="nav-content px-[13px] leading-[21px]">{item.name}</div>
            </NavLink>
          );
        })}
      </div>
      <Outlet />
    </FindMusicWrapper>
  );
};

export default FindMusic;
