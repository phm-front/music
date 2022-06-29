import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
  background-image: url(${props => props.bg});
  background-size: 6000px;
  background-position: center center;
  .download {
    width: 254px;
    height: 285px;
    background: url(${require('@/assets/images/download.png')}) no-repeat 0 0;
  }
`
