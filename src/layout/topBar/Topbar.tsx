import { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TopBarWrapper } from "./style";

export default memo(function Topbar() {
  const navigate = useNavigate();

  const topList = [
    { name: "发现音乐", href: "", routeUrl: "/discover" },
    { name: "我的音乐", href: "", routeUrl: "/mine" },
    { name: "关注", href: "", routeUrl: "/friend" },
    { name: "商城", href: "https://music.163.com/store/product", routeUrl: "" },
    { name: "音乐人", href: "https://music.163.com/st/musician", routeUrl: "" },
    { name: "下载客户端", href: "", routeUrl: "/download" },
  ];

  return (
    <TopBarWrapper className="bg-[#242424] text-[#ccc]">
      <div className="w-[1100px] h-[70px] m-auto flex justify-center items-center">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer w-[176px] h-[100%] bg-[url('~@/assets/images/topbar.png')] bg-no-repeat"
        ></div>
        {topList.map((item) => {
          return item.href ? (
            <a
              className="cursor-pointer h-[100%] px-[20px] leading-[70px] text-center"
              href={item.href}
              key={item.name}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          ) : (
            <NavLink
              className="cursor-pointer h-[100%] px-[20px] leading-[70px] text-center"
              to={item.routeUrl}
              key={item.name}
            >
              {item.name}
            </NavLink>
          );
        })}
        <div className="w-[300px]"></div>
      </div>
    </TopBarWrapper>
  );
});
