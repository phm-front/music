import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { AlbumItemWrapper } from "./style";
import { AlbumInfo } from "./type";

export default memo<{
  albumInfo: AlbumInfo;
}>(function AlbumItem({ albumInfo }) {
  const { picUrl, name, id, artist } = albumInfo;
  return (
    <AlbumItemWrapper>
      <div className="relative">
        <img
          className="cursor-pointer"
          width="100"
          height="100"
          src={`${picUrl}?param=100y100`}
          alt={name}
        />
        <NavLink
          to={`/album?id=${id}`}
          className="a-bg absolute top-0 left-0 w-[118px] h-[100px] bg-[url('@/assets/images/coverall.png')]"
        ></NavLink>
        <div title="播放" className="play-icon absolute right-[25px] bottom-[5px] w-[22px] h-[22px] bg-[url('@/assets/images/iconall.png')] cursor-pointer"></div>
      </div>
      <div className="w-[90%] truncate leading-[18px]" title={ name }>
        <NavLink
          to={`/album?id=${id}`}
          className="text-[12px] text-[#000] hover:text-[#000] hover:underline"
        >
          { name }
        </NavLink>
      </div>
      <div className="w-[90%] truncate leading-[18px]">
        <NavLink
          to={`/artist?id=${artist.id}`}
          className="text-[12px] text-[#666] hover:text-[#666] hover:underline"
        >
          { artist.name }
        </NavLink>
      </div>
    </AlbumItemWrapper>
  );
});
