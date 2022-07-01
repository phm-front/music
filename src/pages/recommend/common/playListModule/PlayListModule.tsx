import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import { Info } from './type';
import { PlayListMuduleWrapper } from './style';
import { formatPlayCount } from '@/utils/format';

export default memo<{
  info: Info,
  cn?: string
}>(function PlayListModule({ info, cn }) {
  const { picUrl, name, playCount, id } = info
  return (
    <PlayListMuduleWrapper className={`w-[140px] h-[204px] flex flex-col ${cn && cn}`}>
      <div className="w-[100%] h-[140px] relative">
        <img className="w-[140px] h-[140px] cursor-pointer" src={picUrl + '?param=140y140'} alt={name} title={name} />
        <div className="bottom-bar text-[#ccc] px-[10px] flex items-center absolute left-0 right-0 bottom-0 h-[27px] bg-[url('@/assets/images/coverall.png')]">
          <span className="left-icon w-[14px] h-[11px] bg-[url('@/assets/images/iconall.png')]"></span>
          <span className="text-[12px] pl-[6px]">{ formatPlayCount(playCount) }</span>
          <span className="play-btn cursor-pointer ml-auto w-[16px] h-[17px] bg-[url('@/assets/images/iconall.png')]"></span>
        </div>
      </div>
      <NavLink to={`/playlist?id=${id}`} className="leading-[1.4] mt-[6px] text-[14px] text-[#000] hover:underline hover:text-[#000]">{ name }</NavLink>
    </PlayListMuduleWrapper>
  )
})
