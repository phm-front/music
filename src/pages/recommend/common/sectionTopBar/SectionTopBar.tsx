import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { SectionTopBarWrapper } from "./style";

export default memo<{
  title: string;
  moreUrl: string;
  navList?: any[];
}>(function SectionTopBar(props) {
  const { title, moreUrl, navList } = props;
  return (
    <SectionTopBarWrapper className="h-[35px] flex justify-between items-center">
      <div className="flex items-center">
        <img width="16" height="16" src={require("@/assets/images/ring.png")} alt="" />
        <NavLink to={moreUrl} className="text-[20px] text-[#333] hover:text-[#333] leading-[28px] ml-[10px] cursor-pointer">{title}</NavLink>
        {navList && (
          <div className="a-color pl-[10px]">
            {navList.map((item, index) => {
              return (
                <NavLink
                  className="hover:underline text-[#666] hover:text-[#666] text-[12px]"
                  to={item.url}
                  key={item.name}
                >
                  <span className="ml-[10px]">{item.name}</span>
                  {index !== navList.length - 1 && <span className="ml-[10px]">|</span>}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
      <div className="a-color">
        <NavLink
          to={moreUrl}
          className="text-[12px] text-[#666] hover:text-[#666] hover:underline mr-[6px]"
        >
          更多
        </NavLink>
        <img
          width="10"
          height="10"
          className="mr-[4px]"
          src={require("@/assets/images/right-arrow.png")}
          alt=""
        />
      </div>
    </SectionTopBarWrapper>
  );
});
