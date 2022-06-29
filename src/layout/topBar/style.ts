import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  font-size: 14px;
  a {
    color: #ccc;
  }
  a:hover,
  .active {
    background-color: #000;
    color: #fff;
  }
  .active {
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-bottom-color: #b02421;
    }
  }
`
