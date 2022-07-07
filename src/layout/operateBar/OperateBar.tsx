import React, { memo } from 'react'

import { OperateBarWrapper } from './style'

export default memo(function OperateBar() {
  return (
    <OperateBarWrapper className="bottom-bar fixed h-[53px] w-[100%] left-0 bottom-0 bg-[url('@/assets/images/playbar.png')]">
      底部播放条
    </OperateBarWrapper>
  )
})
