import styled from 'styled-components'
export const AlbumItemWrapper = styled.div`
  width: 118px;
  &:hover .play-icon {
    display: block;
  }
  .a-bg {
    background-position: 0 -570px;
  }
  .play-icon {
    display: none;
    background-position: 0 -85px;
    &:hover {
      background-position: 0 -110px;
    }
  }
`
