import React, { memo } from "react";
import { RecommendWrapper } from "./style";
import TopBanners from './components/TopBanners';

export default memo(() => {
  return (
    <RecommendWrapper>
      <TopBanners />
    </RecommendWrapper>
  );
});
