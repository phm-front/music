import React, { memo, useEffect } from 'react'

import SectionTopBar from "@/pages/recommend/common/sectionTopBar/SectionTopBar";
import { getLeaderbored } from '@/api/discover/recommend';

export default memo(function Leaderboard() {
  useEffect(() => {
    Promise.all([
      getLeaderbored({ idx: 0 })
    ]).then(arr => {
      console.log(arr);
    })
  }, [])
  return (
    <div>
      <SectionTopBar title="榜单" moreUrl="/discover/toplist" />
    </div>
  )
})
